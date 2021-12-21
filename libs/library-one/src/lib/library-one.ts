interface libraryOne {
  sayHello: () => string;
  testMessage: () => string;
}

export function libraryOne(): libraryOne {
  const sayHello = () => 'Hello from Library One.';
  const testMessage = () => 'library-one';

  return {
    sayHello,
    testMessage,
  };
}

export function helloWorld(): string {
  return 'hello world';
}
