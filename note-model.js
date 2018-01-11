(function(exports) {
  var idCounter = 0

  function Note(title, message) {
    this.title = title
    this.message = message
    this.id = idCounter
    idCounter ++
  };

  Note.prototype.getID = function() {
    return this.id
  }

  Note.prototype.getMessage = function() {
    return this.message
  }

  exports.Note = Note;
})(this);
