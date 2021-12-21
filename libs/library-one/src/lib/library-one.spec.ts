import { libraryOne } from './library-one';

describe('libraryOne', () => {
  it('should work', () => {
    expect(libraryOne().testMessage()).toEqual('library-one');
  });
});
