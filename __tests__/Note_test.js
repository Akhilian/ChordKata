const Note = require('../Note');

describe('Note', () => {
  test('should have a root note', () => {
    // given
    const note = new Note('A');
  
    // then
    expect(note.root).toEqual('A');
  });

  describe('#third', () => {
    describe('when the root is C', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('C');
      
        // then
        expect(note.third).toEqual('E');
      });
    });
    
    describe('when the root is F', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('F');
      
        // then
        expect(note.third).toEqual('A');
      });
    });

    describe('when the root is G', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('G');
      
        // then
        expect(note.third).toEqual('B');
      });
    });

    describe('when the root is D', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('D');
      
        // then
        expect(note.third).toEqual('F#/Gb');
      });
    });

    describe('when the root is A', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('A');
      
        // then
        expect(note.third).toEqual('C#/Db');
      });
    });
  });
});