(function(exports) {

  function NoteListView(notepad) {
    this.notepad = notepad;
  }

  NoteListView.prototype.HTMLifyNotes = function() {
    return "<ul>" +
  this.notepad.notes.map( note => "<li><a href='#" + note.id + "'>" + note.message.slice(0, 20) + "</a></li>" ).join("") +
  "</li></ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
