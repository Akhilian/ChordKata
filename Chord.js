const Note = require('./Note');

class Chord {

  constructor(notation) {
    this.notation = notation;
  }

  get isMajor() {
    if(this.notation.indexOf('m') >= 0) {
      return false;
    } else {
      return true;
    }
  }

  get rootNote() {
    return new Note(this.notation.charAt(0));
  }

  get composed() {
    if(this.isMajor) {
      return [this.rootNote, this.rootNote.third, this.rootNote.fifth]  
    } else {
      return [this.rootNote, this.rootNote.thirdMinor, this.rootNote.fifth]
    }
  }

};

module.exports = Chord;