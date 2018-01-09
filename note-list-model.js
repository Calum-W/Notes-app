(function(exports) {
  var notepad = new Notepad();

  function Notepad() {
    this.notes = [];
  };

  Notepad.prototype.addNote = function(note){
    this.notes.push(note)
  };

  Notepad.prototype.HTMLifyNotes = function() {
    var messages = [];
    for (i = 0; i < this.notes.length; i ++) {
      messages.push(this.notes[i])
    }
    var htmlList = messages.join("</li><li>")
    return "<ul><li>" + htmlList + "</li></ul>"
  }

  exports.Notepad = Notepad;
})(this);
