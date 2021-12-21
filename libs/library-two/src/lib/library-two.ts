interface libraryTwo {
  sayHello: () => string;
  testMessage: () => string;
  missingText: string;
}

export function libraryTwo(): libraryTwo {
  const sayHello = () => 'Hello from LibraryTwo.';
  const testMessage = () => 'library-two';
  const missingText = 'Missing Textr';

  return {
    sayHello,
    testMessage,
    missingText,
  };
}

export function helloWorld(): string {
  return 'Hello World';
}

export function helloWorld2(): string {
  return 'Hello World 2';
}
