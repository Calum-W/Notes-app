(function(exports) {
  var notepad = new Notepad();

  function Notepad() {
    this.notes = [];
  };

  Notepad.prototype.addNote = function(noteTitle, noteMessage){
    note = new Note(noteTitle, noteMessage)
    this.notes.push(note)
  };

  exports.Notepad = Notepad;
})(this);
