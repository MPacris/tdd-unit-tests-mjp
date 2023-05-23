import {capitalize, concatenate, secondWord} from './stringFunctions'


describe('call capitalization w [hello world]: Hello world', () => {
  const result = capitalize('hello world');

  it('Should not return undefined', () => {
    expect(result).not.toBe(undefined);
  });

  it('Should have the first letter of the string capitalized', () => {
    expect(result).toBe('Hello world');
  });
});

describe('call concatentate w [hello world]: helloworld', () => {
    const result = concatenate('hello world');
  
    it('Should not return undefined', () => {
      expect(result).not.toBe(undefined);
    });

    
    it('Should have the words joined together without spaces', () => {
    expect(result).toBe('helloworld');
  });

  });

  describe('call secondWord w [hello world]: hello World', () => {
    const result = secondWord('hello World');
  
    it('Should not return undefined', () => {
      expect(result).not.toBe(undefined);
    });

    it('Should have the second word capitalized', () => {
        expect(result).toBe('hello World');
      });

  });