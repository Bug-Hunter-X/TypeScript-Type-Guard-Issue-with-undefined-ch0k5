# TypeScript Type Guard and undefined

This repository demonstrates a subtle bug in TypeScript related to type guards and the `undefined` value.  The `greet` function handles `null` correctly but throws a runtime error if `undefined` is passed.

## Bug

The core problem lies in the type guard `if (name === null)`.  While this correctly identifies `null`, it doesn't account for the possibility of `undefined`.  TypeScript's type system doesn't implicitly consider `undefined` as a subtype of `string | null` in this type guard context.

## Solution

The solution involves explicitly checking for both `null` and `undefined`. This ensures that all potential cases are handled gracefully.

## How to Run

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `tsc` to compile the TypeScript files.
4. Execute `node bug.js` to see the error and `node bugSolution.js` to see the corrected output.