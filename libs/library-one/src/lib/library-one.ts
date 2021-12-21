interface libraryOne {
  sayHello: () => string;
  testMessage: () => string;
}

export function libraryOne(): libraryOne {
  const sayHello = () => 'Hello from LibraryOne.';
  const testMessage = () => 'library-one';

  return {
    sayHello,
    testMessage,
  };
}

export function helloWorld(): string {
  return 'hello world';
}
