(function(exports) {
  var note = new Note();

  function Note(title, message) {
    this.title = title
    this.message = message
  };

  exports.Note = Note;
})(this);
