class Note {

  constructor(root) {
    this.root = root;

    let scale = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    const positionOnScale = scale.indexOf(this.root);
    
    this.scale = scale.splice(positionOnScale).concat(scale);
  }
  
  get thirdMinor() {
    return new Note(this.scale[3]);
  }

  get third() {
    return new Note(this.scale[4]);
  }

  get fifth() {
    return new Note(this.scale[7]);
  }

};

module.exports = Note;