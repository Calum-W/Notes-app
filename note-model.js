(function(exports) {
  var note = new Note();
  var idCounter = 0

  function Note(title, message) {
    this.title = title
    this.message = message
    this.id = idCounter
    idCounter ++
  };

  exports.Note = Note;
})(this);
