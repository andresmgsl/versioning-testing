interface libraryOne {
  sayHello: () => string;
  testMessage: () => string;
  testMessageInternal: string;
}

export function libraryOne(): libraryOne {
  const sayHello = () => 'Hello from LibraryOne.';
  const testMessage = () => 'library-one';
  const testMessageInternal = 'text-message';

  return {
    sayHello,
    testMessage,
    testMessageInternal,
  };
}

export function helloWorld(): string {
  return 'hello world';
}
