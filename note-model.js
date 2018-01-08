(function(exports) {
  var note = new Note();

  function Note(note) {
    // this.text = input;
    this.list = [note];
  };

  Note.prototype.addNote = function(note){
    this.list.push(note)
  };

  exports.Note = Note;
})(this);
