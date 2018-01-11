(function(exports) {

  function NoteListView(notepad) {
    this.notepad = notepad;
  }

  NoteListView.prototype.HTMLifyNotes = function() {
    return "<ul><li>" +
  this.notepad.notes.map( note => "<li><div id=" + note.id + ">" + note.message.slice(0, 20) + "</div></li>" ).join() +
  "</li></ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
