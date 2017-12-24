class Note {

  constructor(root) {
    this.root = root;

    let scale = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
    const positionOnScale = scale.indexOf(this.root);
    
    this.scale = scale.splice(positionOnScale).concat(scale);
  }
  
  get third() {
    return this.scale[4];
  }

  get fifth() {
    return this.scale[7];
  }

};

module.exports = Note;