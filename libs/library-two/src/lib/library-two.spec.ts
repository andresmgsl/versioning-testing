import { libraryTwo } from './library-two';

describe('libraryTwo', () => {
  it('should work', () => {
    expect(libraryTwo().testMessage()).toEqual('library-two');
  });
});
