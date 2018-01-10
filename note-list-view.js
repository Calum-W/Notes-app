(function(exports) {

  function NoteListView(notepad) {
    this.notepad = notepad;
  }

  NoteListView.prototype.HTMLifyNotes = function() {
    var messages = [];
    for (i = 0; i < this.notepad.notes.length; i ++) {
      messages.push(this.notepad.notes[i].message)
    }
    return "<ul><li>" + messages.join("</li><li>") + "</li></ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
