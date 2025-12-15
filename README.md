# Angular-Testing-Step-By-Step

A practical learning repo to master Angular testing from zero to confident. Each chapter builds on the previous one, with tiny focused examples first, then realistic components/services, then full feature flows.

## What you’ll learn

- Testing basics: test structure, assertions, setup/teardown
- Angular testing fundamentals: `TestBed`, DI, providers, modules
- Component testing: inputs/outputs, DOM querying, change detection, host components
- Service testing: HttpClient, interceptors, error handling, retries
- RxJS testing: marble tests (optional), async streams, fake timers
- Forms testing: reactive forms, validators, custom validators
- Router testing: guards, resolvers, navigation
- State testing: NgRx/Signals (optional track)
- Test quality: avoiding flaky tests, good naming, test boundaries
- CI-ready setup: coverage, thresholds, fast runs

## Repo structure

- `01-fundamentals/` — testing fundamentals (no Angular yet)
- `02-arrays-and-strings/` — TestBed + DI patterns
- `03-setup-and-teardown/` — component tests (simple → complex)
- `04-forms/` — HttpClient + HttpTestingController
- `05-event-emitters/` — reactive forms + validators
- `06-services/` — routing + guards
- `07-spyOn/` — NgRx or Signals track-
- `08-testbed/` — TestBed + DI patterns
- `09-components/` — component tests (simple → complex)
- `09-services-http/` — HttpClient + HttpTestingController
- `10-forms/` — reactive forms + validators
- `11-router/` — routing + guards
- `12-state/` — NgRx or Signals track
- `13-e2e-or-integration/` — optional broader flows
- `shared/` — utilities, test helpers, factories

## How to use

1. Start at `01-fundamentals`
2. Run tests after every step
3. Compare your solution with the provided one (if you include it)
4. Move forward only when you understand _why_ a test is written that way

## Goals

- Teach _testing thinking_, not just syntax
- Keep tests fast, deterministic, and readable
- Use patterns you can copy into real projects

## Contributing

PRs welcome: new exercises, clearer explanations, alternative approaches (Jest vs Karma), and “common pitfalls” notes.

## License

MIT (or your choice)

If you tell me whether this repo targets **Jest only**, **Karma/Jasmine**, or **both**, I’ll tailor the wording + folder structure to match and keep it consistent.
