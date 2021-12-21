import { libraryThree } from './library-three';

describe('libraryThree', () => {
  it('should work', () => {
    expect(libraryThree().testMessage()).toEqual('library-three');
  });
});
