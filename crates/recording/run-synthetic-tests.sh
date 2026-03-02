#!/bin/bash
cargo run --package orbit-recording --example synthetic-test-runner --features test-utils -- "$@"
