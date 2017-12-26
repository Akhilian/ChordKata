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
        expect(note.third).toEqual(new Note('E'));
      });
    });
    
    describe('when the root is F', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('F');
      
        // then
        expect(note.third).toEqual(new Note('A'));
      });
    });

    describe('when the root is G', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('G');
      
        // then
        expect(note.third).toEqual(new Note('B'));
      });
    });

    describe('when the root is D', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('D');
      
        // then
        expect(note.third).toEqual(new Note('F#/Gb'));
      });
    });

    describe('when the root is A', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('A');
      
        // then
        expect(note.third).toEqual(new Note('C#/Db'));
      });
    });
  });

  describe('#thirdMinor', () => {
    describe('when the root is C', () => {
      test('should have a major third', () => {
        // given
        const note = new Note('C');
      
        // then
        expect(note.thirdMinor).toEqual(new Note('D#/Eb'));
      });
    });
  });

  describe('#fifth', () => {
    describe('when the root is C', () => {

      test('should have G a fifth with root note is C', () => {
        // given
        const note = new Note('C');

        // then
        expect(note.fifth).toEqual(new Note('G'));
      });

      test('should have A a fifth with root note is D', () => {
        //   given
        const note = new Note('D');

        // then
        expect(note.fifth).toEqual(new Note('A'));
      });

      test('should have B a fifth with root note is E', () => {
        //   given
        const note = new Note('E');

        // then
        expect(note.fifth).toEqual(new Note('B'));
      });

      test('should have C a fifth with root note is F', () => {
        //   given
        const note = new Note('F');

        // then
        expect(note.fifth).toEqual(new Note('C'));
      });

      test('should have D a fifth with root note is G', () => {
        //   given
        const note = new Note('G');

        // then
        expect(note.fifth).toEqual(new Note('D'));
      });

      test('should have E a fifth with root note is A', () => {
        //   given
        const note = new Note('A');

        // then
        expect(note.fifth).toEqual(new Note('E'));
      });

      test('should have F#/Gb a fifth with root note is B', () => {
        //   given
        const note = new Note('B');

        // then
        expect(note.fifth).toEqual(new Note('F#/Gb'));
      });
    });
  });
});