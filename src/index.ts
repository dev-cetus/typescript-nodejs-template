class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  public greet() {
    return `Hello, ${this.greeting}!`;
  }
}

const greeter = new Greeter('world');
console.log(greeter.greet());
