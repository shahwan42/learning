// Exercise A§1 — health-check fan-out, the naive way.
//
// Scenario: a CLI that checks whether N internal services are up. Each check takes ~300ms of
// waiting on the network. Serially that's slow for no good reason — the CPU is idle the whole time.
//
// Run it as-is first:  go run ./01-goroutines
//
// Then do the three TODOs in order. Don't skip to the end; the point of step 2 is to see the
// failure mode with your own eyes.
package main

import (
	"fmt"
	"math/rand/v2"
	"runtime"
	"time"
)

var services = []string{
	"auth-api",
	"orders-api",
	"inventory-api",
	"payments-api",
	"notifications-api",
}

// checkService fakes a network health check: variable latency, occasional failure.
// Leave this function alone.
func checkService(name string) string {
	time.Sleep(time.Duration(200+rand.IntN(200)) * time.Millisecond)
	if rand.IntN(5) == 0 {
		return fmt.Sprintf("%-20s DOWN", name)
	}
	return fmt.Sprintf("%-20s ok", name)
}

func main() {
	start := time.Now()

	// ---- Step 0: sequential baseline (already written). Note the total time. ----
	for _, name := range services {
		fmt.Println(checkService(name))
	}

	// ---- TODO 1: make the checks concurrent ----
	// Replace the loop above with one that starts each check in its own goroutine.
	// Predict the output BEFORE running it, then run it. Write your prediction and what actually
	// happened in the "Answers" comment block at the bottom of this file.

	// ---- TODO 2: make the results actually appear ----
	// You don't have channels or WaitGroup yet, so use the deliberately-wrong tool: sleep in main
	// long enough for the goroutines to finish. Add a comment saying why this is not a fix.
	// Then answer: what happens if one service takes 5 seconds instead of 300ms?

	// ---- TODO 3: count the goroutines ----
	// Print runtime.NumGoroutine() at three points: before starting any, immediately after
	// starting them all, and after the sleep. Explain the three numbers you get — in particular,
	// why the middle number is what it is and why the last one isn't zero.
	_ = runtime.NumGoroutine

	fmt.Printf("\ntotal: %s\n", time.Since(start).Round(time.Millisecond))
}

/*
Answers
-------
1. Prediction:
   Actual:
   Why:

2. Why sleeping is not a fix:
   If one service took 5s:

3. NumGoroutine before / after starting / after sleep:
   Explanation:
*/
