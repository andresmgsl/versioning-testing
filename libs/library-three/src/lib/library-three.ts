interface libraryThree {
  sayHello: () => string;
  testMessage: () => string;
}

export function libraryThree(): libraryThree {
  const sayHello = () => 'Hello from Library Three.';
  const testMessage = () => 'library-three';

  return {
    sayHello,
    testMessage,
  };
}
