# Track 1 — Foundations

The working core of the language. Everything else builds on this.

## Topics
- [ ] 1. Toolchain & modules — compile-to-binary model, go.mod/go.sum, build/run/fmt/vet ← **current**
- [ ] 2. Program anatomy — packages, exported vs unexported, imports, main
- [ ] 3. Types & declarations — zero values, `var` vs `:=`, const & iota, explicit conversions
- [ ] 4. Structs & methods — value vs pointer receivers, composition over inheritance
- [ ] 5. Pointers — the minimum memory model, when to use them (JIT prereq: stack/heap basics)
- [ ] 6. Slices & maps — backing arrays, append/aliasing gotchas, nil map traps
- [ ] 7. Interfaces — implicit satisfaction, io.Reader/io.Writer, keep-them-small idiom
- [ ] 8. Errors as values — `%w` wrapping, errors.Is/As, sentinel errors, when panic is OK
- [ ] 9. Testing — table-driven tests, t.Run subtests, go test flags, `-race` intro
- [ ] 10. Project layout — cmd/, internal/, package design, unlearning MVC-by-default

## Status
- Done: —
- Current: §1
- Next: §2

Debugging, tooling, and common failure modes are woven into each topic's notes rather than kept separate.
