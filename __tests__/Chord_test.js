const Note = require('../Note');
const Chord = require('../Chord');

describe('Chord', () => {
  describe('#isMajor', () => {
    test('should return true when chord is major', () => {
      // given
      const C = new Chord('C');

      // when
      const isCmajor = C.isMajor;

      // given
      expect(isCmajor).toEqual(true);
    });

    test('should return false when chord is minor', () => {
      // given
      const C = new Chord('Cm');

      // when
      const isCmajor = C.isMajor;

      // given
      expect(isCmajor).toEqual(false);
    });
  });

  describe('#rootNote', () => {
    test('should return the root note', () => {
      // given
      const C = new Chord('C');

      // when
      const getRootNote = C.rootNote;

      // given
      expect(getRootNote).toEqual(new Note('C'));
    });

    test('should return the root note of a A chord', () => {
      // given
      const A = new Chord('A');

      // when
      const getRootNote = A.rootNote;

      // given
      expect(getRootNote).toEqual(new Note('A'));
    });

    test('should return the root note of a Dm7 chord', () => {
      // given
      const Dm7 = new Chord('Dm7');

      // when
      const getRootNote = Dm7.rootNote;

      // given
      expect(getRootNote).toEqual(new Note('D'));
    });
  });

  describe('#composed', () => {
    test('should return 3 notes for a C major chord', () => {
      // given
      const C = new Chord('C');

      // when
      const notes = C.composed;

      // given
      expect(notes).toEqual([new Note('C'), new Note('E'), new Note('G')]);
    });

    test('should return 3 notes for a C minor chord', () => {
      // given
      const Cm = new Chord('Cm');

      // when
      const notes = Cm.composed;

      // given
      expect(notes).toEqual([new Note('C'), new Note('D#/Eb'), new Note('G')]);
    });

    test('should return 3 notes for a A major chord', () => {
      // given
      const A = new Chord('A');

      // when
      const notes = A.composed;

      // given
      expect(notes).toEqual([new Note('A'), new Note('C#/Db'), new Note('E')]);
    });

    test('should return 3 notes for a A minor chord', () => {
      // given
      const Am = new Chord('Am');

      // when
      const notes = Am.composed;

      // given
      expect(notes).toEqual([new Note('A'), new Note('C'), new Note('E')]);
    });
  });
});