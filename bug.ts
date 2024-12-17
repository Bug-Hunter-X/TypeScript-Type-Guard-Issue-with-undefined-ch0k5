function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(undefined)); // Error!