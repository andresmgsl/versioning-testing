interface libraryTwo {
  sayHello: () => string;
  testMessage: () => string;
}

export function libraryTwo(): libraryTwo {
  const sayHello = () => 'Hello from Library Two.';
  const testMessage = () => 'library-two';

  return {
    sayHello,
    testMessage,
  };
}

export function helloWorld(): string {
  return 'Hello World';
}

export function helloWorld2(): string {
  return 'Hello World 2';
}
