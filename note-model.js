(function(exports) {
  var note = new Note();

  function Note(note) {
    // this.text = input;
    this.list = [note];
  };

  Note.prototype.addNote = function(note){
    this.list.push(note)
  };

  Note.prototype.HTMLifyNotes = function() {
    var htmlList = this.list.join("</li><li>")
    return "<ul><li>" + htmlList + "</li></ul>"
  }

  exports.Note = Note;
})(this);
