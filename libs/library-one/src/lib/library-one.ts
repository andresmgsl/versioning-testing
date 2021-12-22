interface libraryOne {
  sayHello: () => string;
  testMessage: () => string;
  testMessageInternal: string;
  breakingChanges: () => string;
}

export function libraryOne(): libraryOne {
  const sayHello = () => 'Hello from LibraryOne.';
  const testMessage = () => 'library-one';
  const testMessageInternal = 'text-message';

  return {
    sayHello,
    testMessage,
    testMessageInternal,
    breakingChanges,
  };
}

export function helloWorld(): string {
  return 'hello world';
}

export function breakingChanges(): string {
  return 'this is a breaking change';
}
