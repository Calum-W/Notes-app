(function(exports) {
  var notepad = new Notepad();

  function Notepad() {
    this.notes = [];
  };

  Notepad.prototype.addNote = function(note){
    this.notes.push(note)
  };

  exports.Notepad = Notepad;
})(this);
