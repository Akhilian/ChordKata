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

  describe('#fifth', () => {
    describe('when the root is C', () => {

      test('should have G a fifth with root note is C', () => {
        // given
        const note = new Note('C');

        // then
        expect(note.fifth).toEqual('G');
      });

      test('should have A a fifth with root note is D', () => {
        //   given
        const note = new Note('D');

        // then
        expect(note.fifth).toEqual('A');
      });

      test('should have B a fifth with root note is E', () => {
        //   given
        const note = new Note('E');

        // then
        expect(note.fifth).toEqual('B');
      });

      test('should have C a fifth with root note is F', () => {
        //   given
        const note = new Note('F');

        // then
        expect(note.fifth).toEqual('C');
      });

      test('should have D a fifth with root note is G', () => {
        //   given
        const note = new Note('G');

        // then
        expect(note.fifth).toEqual('D');
      });

      test('should have E a fifth with root note is A', () => {
        //   given
        const note = new Note('A');

        // then
        expect(note.fifth).toEqual('E');
      });

      test('should have F#/Gb a fifth with root note is B', () => {
        //   given
        const note = new Note('B');

        // then
        expect(note.fifth).toEqual('F#/Gb');
      });
    });
  });
});