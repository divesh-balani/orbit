# Orbit Recording Benchmark Results

This document tracks performance benchmarks for Orbit's recording system over time. Each benchmark run is timestamped, enabling comparison across different versions, configurations, and hardware.

## Quick Reference

### Performance Targets

| Metric | Target | Tolerance |
|--------|--------|-----------|
| Frame Rate | 30 fps | ±2 fps |
| Frame Jitter | <15ms | - |
| Dropped Frames | <2% | - |
| A/V Sync (camera↔mic) | <50ms | - |
| Audio/Video Duration Diff | <100ms | - |

### Test Scenarios

- **Baseline**: 5 second continuous recording
- **Single Pause**: 3s record → 2s pause → 3s record (2 segments)
- **Multiple Pauses**: 2s record → 1s pause → 2s record → 1s pause → 2s record (3 segments)

### Running Benchmarks

```bash
cargo run -p orbit-recording --example real-device-test-runner -- baseline --keep-outputs --benchmark-output
cargo run -p orbit-recording --example real-device-test-runner -- full --keep-outputs --benchmark-output
```

---

## Benchmark History

<!-- BENCHMARK_RESULTS_START -->

### Benchmark Run: 2026-01-28 11:42:54 UTC

*Local time: 2026-01-28 11:42:54*

**Overall Result:** ❌ FAILURES (0/6)

**Notes:** Fix #2: Display-Camera A/V sync - Sync display start time to camera/mic

**Command:** `cargo run -p orbit-recording --example real-device-test-runner -- full --keep-outputs`

<details>
<summary>System Information</summary>

| Property | Value |
|----------|-------|
| OS | macos 26.2 |
| Architecture | aarch64 |
| CPU | Apple M4 Max |
| Display | 5120x1440 |
| Microphone | Shure MV7+ |
| Camera | Camo Camera |
| Rust Version |  |

</details>

**Failed Tests:**
- Baseline (mp4+camera) — `FRAME_RATE`, `AUDIO_TIMING`
- Baseline (fragmented+camera) — `AUDIO_TIMING`
- Single Pause (mp4+camera) — `FRAME_RATE`, `AUDIO_TIMING`
- Single Pause (fragmented+camera) — `FRAME_RATE`, `AUDIO_TIMING`
- Multiple Pauses (mp4+camera) — `DURATION`, `FRAME_RATE`, `AUDIO_TIMING`
- Multiple Pauses (fragmented+camera) — `DURATION`, `FRAME_RATE`, `AUDIO_TIMING`

<details>
<summary>Detailed Results</summary>

#### ❌ FAIL Baseline (mp4+camera)

**Failure Tags:** `FRAME_RATE`, `AUDIO_TIMING`

| Metric | Result | Details |
|--------|--------|--------|
| Segments | ✅ | 1/1 expected |
| Start Times | ✅ | All segments near 0 |
| A/V Sync | ✅ | tolerance: 50ms |
| ↳ Seg 0 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| Duration | ✅ | 5.11s/5.00s |
| Frame Rate | ❌ | expected 30fps ±2 |
| ↳ Seg 0 FPS | ❌ | 28.7fps frames=147 dropped=4 (2.7%) jitter=10.6ms |
| | ⚠️ | Dropped frames exceed 2% |
| Audio Timing | ❌ | tolerance: ±100ms vs video |
| ↳ Seg 0 Mic | ❌ | 4.98s diff=136.8ms 48000Hz 1ch |
| ↳ Seg 0 System | ❌ | 4.89s diff=226.8ms 48000Hz 2ch |

**Elapsed:** 6.32s

---

#### ❌ FAIL Baseline (fragmented+camera)

**Failure Tags:** `AUDIO_TIMING`

| Metric | Result | Details |
|--------|--------|--------|
| Segments | ✅ | 1/1 expected |
| Start Times | ✅ | All segments near 0 |
| A/V Sync | ✅ | tolerance: 50ms |
| ↳ Seg 0 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| Duration | ✅ | 5.04s/5.00s |
| Frame Rate | ✅ | expected 30fps ±2 |
| ↳ Seg 0 FPS | ✅ | 29.4fps frames=148 dropped=2 (1.3%) jitter=5.0ms |
| Audio Timing | ❌ | tolerance: ±100ms vs video |
| ↳ Seg 0 Mic | ✅ | 5.03s diff=12.7ms 48000Hz 1ch |
| ↳ Seg 0 System | ❌ | 4.92s diff=117.7ms 48000Hz 2ch |

**Elapsed:** 5.89s

---

#### ❌ FAIL Single Pause (mp4+camera)

**Failure Tags:** `FRAME_RATE`, `AUDIO_TIMING`

| Metric | Result | Details |
|--------|--------|--------|
| Segments | ✅ | 2/2 expected |
| Start Times | ✅ | All segments near 0 |
| A/V Sync | ✅ | tolerance: 50ms |
| ↳ Seg 0 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| ↳ Seg 1 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| Duration | ✅ | 6.10s/6.00s |
| Frame Rate | ❌ | expected 30fps ±2 |
| ↳ Seg 0 FPS | ❌ | 29.2fps frames=89 dropped=2 (2.2%) jitter=6.6ms |
| | ⚠️ | Dropped frames exceed 2% |
| ↳ Seg 1 FPS | ❌ | 29.2fps frames=89 dropped=2 (2.2%) jitter=8.4ms |
| | ⚠️ | Dropped frames exceed 2% |
| Audio Timing | ❌ | tolerance: ±100ms vs video |
| ↳ Seg 0 Mic | ✅ | 3.02s diff=30.2ms 48000Hz 1ch |
| ↳ Seg 0 System | ❌ | 2.91s diff=140.2ms 48000Hz 2ch |
| ↳ Seg 1 Mic | ✅ | 3.02s diff=33.5ms 48000Hz 1ch |
| ↳ Seg 1 System | ❌ | 2.91s diff=143.5ms 48000Hz 2ch |

**Elapsed:** 9.23s

---

#### ❌ FAIL Single Pause (fragmented+camera)

**Failure Tags:** `FRAME_RATE`, `AUDIO_TIMING`

| Metric | Result | Details |
|--------|--------|--------|
| Segments | ✅ | 2/2 expected |
| Start Times | ✅ | All segments near 0 |
| A/V Sync | ✅ | tolerance: 50ms |
| ↳ Seg 0 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| ↳ Seg 1 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| Duration | ✅ | 6.06s/6.00s |
| Frame Rate | ❌ | expected 30fps ±2 |
| ↳ Seg 0 FPS | ✅ | 29.5fps frames=89 dropped=1 (1.1%) jitter=5.5ms |
| ↳ Seg 1 FPS | ❌ | 28.9fps frames=88 dropped=3 (3.3%) jitter=12.1ms |
| | ⚠️ | Dropped frames exceed 2% |
| Audio Timing | ❌ | tolerance: ±100ms vs video |
| ↳ Seg 0 Mic | ✅ | 3.03s diff=14.9ms 48000Hz 1ch |
| ↳ Seg 0 System | ✅ | 2.92s diff=95.1ms 48000Hz 2ch |
| ↳ Seg 1 Mic | ✅ | 3.03s diff=13.8ms 48000Hz 1ch |
| ↳ Seg 1 System | ❌ | 2.88s diff=163.8ms 48000Hz 2ch |

**Elapsed:** 9.10s

---

#### ❌ FAIL Multiple Pauses (mp4+camera)

**Failure Tags:** `DURATION`, `FRAME_RATE`, `AUDIO_TIMING`

| Metric | Result | Details |
|--------|--------|--------|
| Segments | ✅ | 3/3 expected |
| Start Times | ✅ | All segments near 0 |
| A/V Sync | ✅ | tolerance: 50ms |
| ↳ Seg 0 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| ↳ Seg 1 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| ↳ Seg 2 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| Duration | ❌ | 3.78s/6.00s |
| Frame Rate | ❌ | expected 30fps ±2 |
| ↳ Seg 0 FPS | ✅ | 29.7fps frames=59 dropped=0 (0.0%) jitter=1.1ms |
| ↳ Seg 1 FPS | ❌ | 29.3fps frames=44 dropped=2 (3.3%) jitter=10.4ms |
| | ⚠️ | Dropped frames exceed 2% |
| ↳ Seg 2 FPS | ❌ | 15.3fps frames=5 dropped=4 (6.7%) jitter=44.8ms |
| | ⚠️ | FPS outside tolerance |
| | ⚠️ | Jitter exceeds 15ms |
| | ⚠️ | Dropped frames exceed 2% |
| Audio Timing | ❌ | tolerance: ±100ms vs video |
| ↳ Seg 0 Mic | ✅ | 2.00s diff=18.2ms 48000Hz 1ch |
| ↳ Seg 0 System | ✅ | 1.91s diff=76.8ms 48000Hz 2ch |
| ↳ Seg 1 Mic | ❌ | 2.00s diff=501.5ms 48000Hz 1ch |
| ↳ Seg 1 System | ❌ | 1.91s diff=406.5ms 48000Hz 2ch |
| ↳ Seg 2 Mic | ❌ | 2.00s diff=1706.5ms 48000Hz 1ch |
| ↳ Seg 2 System | ❌ | 1.91s diff=1611.5ms 48000Hz 2ch |

**Elapsed:** 9.16s

---

#### ❌ FAIL Multiple Pauses (fragmented+camera)

**Failure Tags:** `DURATION`, `FRAME_RATE`, `AUDIO_TIMING`

| Metric | Result | Details |
|--------|--------|--------|
| Segments | ✅ | 3/3 expected |
| Start Times | ✅ | All segments near 0 |
| A/V Sync | ✅ | tolerance: 50ms |
| ↳ Seg 0 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| ↳ Seg 1 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| ↳ Seg 2 Sync | ✅ | cam↔mic=0.0ms disp↔cam=0.0ms disp↔mic=0.0ms |
| Duration | ❌ | 4.75s/6.00s |
| Frame Rate | ❌ | expected 30fps ±2 |
| ↳ Seg 0 FPS | ❌ | 7.6fps frames=6 dropped=15 (25.0%) jitter=133.5ms |
| | ⚠️ | FPS outside tolerance |
| | ⚠️ | Jitter exceeds 15ms |
| | ⚠️ | Dropped frames exceed 2% |
| ↳ Seg 1 FPS | ❌ | 25.1fps frames=49 dropped=8 (13.3%) jitter=40.0ms |
| | ⚠️ | FPS outside tolerance |
| | ⚠️ | Jitter exceeds 15ms |
| | ⚠️ | Dropped frames exceed 2% |
| ↳ Seg 2 FPS | ❌ | 17.4fps frames=34 dropped=25 (41.7%) jitter=82.1ms |
| | ⚠️ | FPS outside tolerance |
| | ⚠️ | Jitter exceeds 15ms |
| | ⚠️ | Dropped frames exceed 2% |
| Audio Timing | ❌ | tolerance: ±100ms vs video |
| ↳ Seg 0 Mic | ❌ | 2.02s diff=1141.3ms 48000Hz 1ch |
| ↳ Seg 0 System | ❌ | 1.92s diff=1046.3ms 48000Hz 2ch |
| ↳ Seg 1 Mic | ✅ | 2.02s diff=70.5ms 48000Hz 1ch |
| ↳ Seg 1 System | ✅ | 1.92s diff=24.5ms 48000Hz 2ch |
| ↳ Seg 2 Mic | ✅ | 2.02s diff=83.0ms 48000Hz 1ch |
| ↳ Seg 2 System | ✅ | 1.90s diff=32.0ms 48000Hz 2ch |

**Elapsed:** 9.18s

---

</details>

<!-- BENCHMARK_RESULTS_END -->

---

## Analysis Guidelines

When analyzing benchmark results, focus on:

1. **Regression Detection**: Compare current results with previous runs to identify performance regressions
2. **Pattern Recognition**: Look for consistent failures across test types (e.g., always fails on fragmented output)
3. **Environmental Factors**: Note hardware differences, system load, or configuration changes
4. **Root Cause Analysis**: Use failure tags to identify which subsystem needs attention

### Common Issues & Solutions

| Issue | Possible Causes | Investigation Steps |
|-------|-----------------|---------------------|
| Low FPS | Encoder bottleneck, CPU load | Check encoding timing metrics |
| High Jitter | Thread contention, GC pauses | Profile frame timestamps |
| Dropped Frames | Buffer overflow, slow encoding | Check pipeline metrics |
| A/V Sync Drift | Clock source mismatch | Verify timestamp alignment |
| Audio Gaps | Buffer underrun, device issues | Check audio stream continuity |
