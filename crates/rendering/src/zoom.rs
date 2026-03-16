use orbit_project::{XY, ZoomSegment};

pub const ZOOM_DURATION: f64 = 0.7;

const SCREEN_SPRING_STIFFNESS: f64 = 100.0;
const SCREEN_SPRING_DAMPING: f64 = 32.0;
const SCREEN_SPRING_MASS: f64 = 3.5;

#[derive(Debug, Clone, Copy)]
pub struct SegmentsCursor<'a> {
    time: f64,
    segment: Option<&'a ZoomSegment>,
    prev_segment: Option<&'a ZoomSegment>,
    segments: &'a [ZoomSegment],
}

impl<'a> SegmentsCursor<'a> {
    pub fn new(time: f64, segments: &'a [ZoomSegment]) -> Self {
        match segments
            .iter()
            .position(|s| time > s.start && time <= s.end)
        {
            Some(segment_index) => SegmentsCursor {
                time,
                segment: Some(&segments[segment_index]),
                prev_segment: if segment_index > 0 {
                    Some(&segments[segment_index - 1])
                } else {
                    None
                },
                segments,
            },
            None => {
                let prev = segments
                    .iter()
                    .enumerate()
                    .rev()
                    .find(|(_, s)| s.end <= time);
                SegmentsCursor {
                    time,
                    segment: None,
                    prev_segment: prev.map(|(_, s)| s),
                    segments,
                }
            }
        }
    }
}

#[derive(Debug, PartialEq, Clone, Copy)]
pub struct SegmentBounds {
    pub top_left: XY<f64>,
    pub bottom_right: XY<f64>,
}

impl SegmentBounds {
    pub fn from_segment(segment: &ZoomSegment) -> Self {
        let focus_pos = match segment.mode {
            orbit_project::ZoomMode::Auto => (0.5_f64, 0.5_f64),
            orbit_project::ZoomMode::Manual { x, y } => (x as f64, y as f64),
        };

        let scaled_center = [focus_pos.0 * segment.amount, focus_pos.1 * segment.amount];
        let center_diff = [
            scaled_center[0] - focus_pos.0,
            scaled_center[1] - focus_pos.1,
        ];

        SegmentBounds::new(
            XY::new(0.0 - center_diff[0], 0.0 - center_diff[1]),
            XY::new(
                segment.amount - center_diff[0],
                segment.amount - center_diff[1],
            ),
        )
    }

    pub fn new(top_left: XY<f64>, bottom_right: XY<f64>) -> Self {
        Self {
            top_left,
            bottom_right,
        }
    }

    pub fn default() -> Self {
        SegmentBounds::new(XY::new(0.0, 0.0), XY::new(1.0, 1.0))
    }
}

#[derive(Debug, Clone, Copy)]
pub struct InterpolatedZoom {
    pub t: f64,
    pub bounds: SegmentBounds,
}

fn spring_ease(t: f32) -> f32 {
    if t <= 0.0 {
        return 0.0;
    }
    if t >= 1.0 {
        return 1.0;
    }

    let omega0 = (SCREEN_SPRING_STIFFNESS / SCREEN_SPRING_MASS).sqrt() as f32;
    let zeta = (SCREEN_SPRING_DAMPING
        / (2.0 * (SCREEN_SPRING_STIFFNESS * SCREEN_SPRING_MASS).sqrt())) as f32;

    if zeta < 1.0 {
        let omega_d = omega0 * (1.0 - zeta * zeta).sqrt();
        let decay = (-zeta * omega0 * t).exp();
        1.0 - decay * ((omega_d * t).cos() + (zeta * omega0 / omega_d) * (omega_d * t).sin())
    } else {
        let decay = (-omega0 * t).exp();
        1.0 - decay * (1.0 + omega0 * t)
    }
}

fn spring_ease_out(t: f32) -> f32 {
    if t <= 0.0 {
        return 0.0;
    }
    if t >= 1.0 {
        return 1.0;
    }

    let omega0 = (SCREEN_SPRING_STIFFNESS / SCREEN_SPRING_MASS).sqrt() as f32 * 0.9;
    let zeta = (SCREEN_SPRING_DAMPING
        / (2.0 * (SCREEN_SPRING_STIFFNESS * SCREEN_SPRING_MASS).sqrt())) as f32
        * 1.15;

    if zeta < 1.0 {
        let omega_d = omega0 * (1.0 - zeta * zeta).sqrt();
        let decay = (-zeta * omega0 * t).exp();
        1.0 - decay * ((omega_d * t).cos() + (zeta * omega0 / omega_d) * (omega_d * t).sin())
    } else {
        let decay = (-omega0 * t).exp();
        1.0 - decay * (1.0 + omega0 * t)
    }
}

fn instant_ease(t: f32) -> f32 {
    if t <= 0.0 { 0.0 } else { 1.0 }
}

impl InterpolatedZoom {
    pub fn new(cursor: SegmentsCursor) -> Self {
        let use_instant = cursor.segment.map(|s| s.instant_animation).unwrap_or(false);
        if use_instant {
            Self::new_with_easing(cursor, instant_ease, instant_ease)
        } else {
            Self::new_with_easing(cursor, spring_ease, spring_ease_out)
        }
    }

    pub fn display_amount(&self) -> f64 {
        (self.bounds.bottom_right - self.bounds.top_left).x
    }

    fn new_with_easing(
        cursor: SegmentsCursor,
        ease_in: impl Fn(f32) -> f32 + Copy,
        ease_out: impl Fn(f32) -> f32 + Copy,
    ) -> InterpolatedZoom {
        let default = SegmentBounds::default();

        match (cursor.prev_segment, cursor.segment) {
            (Some(prev_segment), None) => {
                let zoom_t =
                    ease_out(t_clamp((cursor.time - prev_segment.end) / ZOOM_DURATION) as f32)
                        as f64;

                Self {
                    t: 1.0 - zoom_t,
                    bounds: {
                        let prev_segment_bounds = SegmentBounds::from_segment(prev_segment);

                        SegmentBounds::new(
                            prev_segment_bounds.top_left * (1.0 - zoom_t)
                                + default.top_left * zoom_t,
                            prev_segment_bounds.bottom_right * (1.0 - zoom_t)
                                + default.bottom_right * zoom_t,
                        )
                    },
                }
            }
            (None, Some(segment)) => {
                let t =
                    ease_in(t_clamp((cursor.time - segment.start) / ZOOM_DURATION) as f32) as f64;

                Self {
                    t,
                    bounds: {
                        let segment_bounds = SegmentBounds::from_segment(segment);

                        SegmentBounds::new(
                            default.top_left * (1.0 - t) + segment_bounds.top_left * t,
                            default.bottom_right * (1.0 - t) + segment_bounds.bottom_right * t,
                        )
                    },
                }
            }
            (Some(prev_segment), Some(segment)) => {
                let prev_segment_bounds = SegmentBounds::from_segment(prev_segment);
                let segment_bounds = SegmentBounds::from_segment(segment);

                let zoom_t =
                    ease_in(t_clamp((cursor.time - segment.start) / ZOOM_DURATION) as f32) as f64;

                if segment.start == prev_segment.end {
                    Self {
                        t: 1.0,
                        bounds: SegmentBounds::new(
                            prev_segment_bounds.top_left * (1.0 - zoom_t)
                                + segment_bounds.top_left * zoom_t,
                            prev_segment_bounds.bottom_right * (1.0 - zoom_t)
                                + segment_bounds.bottom_right * zoom_t,
                        ),
                    }
                } else if segment.start - prev_segment.end < ZOOM_DURATION {
                    let min = InterpolatedZoom::new_with_easing(
                        SegmentsCursor::new(segment.start, cursor.segments),
                        ease_in,
                        ease_out,
                    );

                    Self {
                        t: (min.t * (1.0 - zoom_t)) + zoom_t,
                        bounds: {
                            let max = segment_bounds;

                            SegmentBounds::new(
                                min.bounds.top_left * (1.0 - zoom_t) + max.top_left * zoom_t,
                                min.bounds.bottom_right * (1.0 - zoom_t)
                                    + max.bottom_right * zoom_t,
                            )
                        },
                    }
                } else {
                    Self {
                        t: zoom_t,
                        bounds: SegmentBounds::new(
                            default.top_left * (1.0 - zoom_t) + segment_bounds.top_left * zoom_t,
                            default.bottom_right * (1.0 - zoom_t)
                                + segment_bounds.bottom_right * zoom_t,
                        ),
                    }
                }
            }
            _ => Self {
                t: 0.0,
                bounds: default,
            },
        }
    }
}

fn t_clamp(v: f64) -> f64 {
    v.clamp(0.0, 1.0)
}

#[cfg(test)]
mod test {
    use orbit_project::{GlideDirection, ZoomMode, ZoomSegment};

    use super::*;

    macro_rules! assert_f64_near {
        ($left:expr, $right:expr, $label:literal) => {
            let left = $left;
            let right = $right;
            assert!(
                (left - right).abs() < 1e-6,
                "{}: `(left ~ right)` \n left: `{:?}`, \n right: `{:?}`",
                $label,
                left,
                right
            )
        };
        ($left:expr, $right:expr) => {
            assert_f64_near!($left, $right, "assertion failed");
        };
    }

    fn c<'a>(time: f64, segments: &'a [ZoomSegment]) -> SegmentsCursor<'a> {
        SegmentsCursor::new(time, segments)
    }

    fn test_interp((time, segments): (f64, &[ZoomSegment]), expected: InterpolatedZoom) {
        let actual = InterpolatedZoom::new_with_easing(c(time, segments), |t| t, |t| t);

        assert_f64_near!(actual.t, expected.t, "t");

        let a = &actual.bounds;
        let e = &expected.bounds;

        assert_f64_near!(a.top_left.x, e.top_left.x, "bounds.top_left.x");
        assert_f64_near!(a.top_left.y, e.top_left.y, "bounds.top_left.y");
        assert_f64_near!(a.bottom_right.x, e.bottom_right.x, "bounds.bottom_right.x");
        assert_f64_near!(a.bottom_right.y, e.bottom_right.y, "bounds.bottom_right.y");
    }

    fn test_segment(start: f64, end: f64, amount: f64, x: f64, y: f64) -> ZoomSegment {
        ZoomSegment {
            start,
            end,
            amount,
            mode: ZoomMode::Manual {
                x: x as f32,
                y: y as f32,
            },
            glide_direction: GlideDirection::default(),
            glide_speed: 0.05,
            instant_animation: false,
            edge_snap_ratio: 0.075,
        }
    }

    #[test]
    fn one_segment() {
        let segments = vec![test_segment(2.0, 4.0, 2.0, 0.5, 0.5)];

        test_interp(
            (0.0, &segments),
            InterpolatedZoom {
                t: 0.0,
                bounds: SegmentBounds::default(),
            },
        );
        test_interp(
            (2.0, &segments),
            InterpolatedZoom {
                t: 0.0,
                bounds: SegmentBounds::default(),
            },
        );
        test_interp(
            (2.0 + ZOOM_DURATION * 0.1, &segments),
            InterpolatedZoom {
                t: 0.1,
                bounds: SegmentBounds::new(XY::new(-0.05, -0.05), XY::new(1.05, 1.05)),
            },
        );
        test_interp(
            (2.0 + ZOOM_DURATION * 0.9, &segments),
            InterpolatedZoom {
                t: 0.9,
                bounds: SegmentBounds::new(XY::new(-0.45, -0.45), XY::new(1.45, 1.45)),
            },
        );
        test_interp(
            (2.0 + ZOOM_DURATION, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-0.5, -0.5), XY::new(1.5, 1.5)),
            },
        );
        test_interp(
            (4.0, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-0.5, -0.5), XY::new(1.5, 1.5)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.2, &segments),
            InterpolatedZoom {
                t: 0.8,
                bounds: SegmentBounds::new(XY::new(-0.4, -0.4), XY::new(1.4, 1.4)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.8, &segments),
            InterpolatedZoom {
                t: 0.2,
                bounds: SegmentBounds::new(XY::new(-0.1, -0.1), XY::new(1.1, 1.1)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION, &segments),
            InterpolatedZoom {
                t: 0.0,
                bounds: SegmentBounds::new(XY::new(0.0, 0.0), XY::new(1.0, 1.0)),
            },
        );
    }

    #[test]
    fn two_segments_no_gap() {
        let segments = vec![
            test_segment(2.0, 4.0, 2.0, 0.0, 0.0),
            test_segment(4.0, 6.0, 4.0, 0.5, 0.5),
        ];

        test_interp(
            (4.0, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(0.0, 0.0), XY::new(2.0, 2.0)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.2, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-0.3, -0.3), XY::new(2.1, 2.1)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.8, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-1.2, -1.2), XY::new(2.4, 2.4)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-1.5, -1.5), XY::new(2.5, 2.5)),
            },
        );
    }

    #[test]
    fn two_segments_small_gap() {
        let segments = vec![
            test_segment(2.0, 4.0, 2.0, 0.5, 0.5),
            test_segment(
                4.0 + ZOOM_DURATION * 0.75,
                4.0 + ZOOM_DURATION * 2.75,
                4.0,
                0.5,
                0.5,
            ),
        ];

        test_interp(
            (4.0, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-0.5, -0.5), XY::new(1.5, 1.5)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.5, &segments),
            InterpolatedZoom {
                t: 0.5,
                bounds: SegmentBounds::new(XY::new(-0.25, -0.25), XY::new(1.25, 1.25)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.75, &segments),
            InterpolatedZoom {
                t: 0.25,
                bounds: SegmentBounds::new(XY::new(-0.125, -0.125), XY::new(1.125, 1.125)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * (0.75 + 0.5), &segments),
            InterpolatedZoom {
                t: 0.625,
                bounds: SegmentBounds::new(XY::new(-0.8125, -0.8125), XY::new(1.8125, 1.8125)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * (0.75 + 1.0), &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-1.5, -1.5), XY::new(2.5, 2.5)),
            },
        );
    }

    #[test]
    fn two_segments_large_gap() {
        let segments = vec![
            test_segment(2.0, 4.0, 2.0, 0.5, 0.5),
            test_segment(7.0, 9.0, 4.0, 0.0, 0.0),
        ];

        test_interp(
            (4.0, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(-0.5, -0.5), XY::new(1.5, 1.5)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION * 0.5, &segments),
            InterpolatedZoom {
                t: 0.5,
                bounds: SegmentBounds::new(XY::new(-0.25, -0.25), XY::new(1.25, 1.25)),
            },
        );
        test_interp(
            (4.0 + ZOOM_DURATION, &segments),
            InterpolatedZoom {
                t: 0.0,
                bounds: SegmentBounds::new(XY::new(0.0, 0.0), XY::new(1.0, 1.0)),
            },
        );
        test_interp(
            (7.0, &segments),
            InterpolatedZoom {
                t: 0.0,
                bounds: SegmentBounds::new(XY::new(0.0, 0.0), XY::new(1.0, 1.0)),
            },
        );
        test_interp(
            (7.0 + ZOOM_DURATION * 0.5, &segments),
            InterpolatedZoom {
                t: 0.5,
                bounds: SegmentBounds::new(XY::new(0.0, 0.0), XY::new(2.5, 2.5)),
            },
        );
        test_interp(
            (7.0 + ZOOM_DURATION * 1.0, &segments),
            InterpolatedZoom {
                t: 1.0,
                bounds: SegmentBounds::new(XY::new(0.0, 0.0), XY::new(4.0, 4.0)),
            },
        );
    }
}
