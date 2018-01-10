(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.display = function() {
    return "<h2>" + this.note.title + "</h2><p>" + this.note.message + "</p>";
  }

  exports.SingleNoteView = SingleNoteView;

})(this);
