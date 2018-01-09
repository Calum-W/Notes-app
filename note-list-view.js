(function(exports) {

  HTMLifyNotes = function(notepad) {
    var messages = [];
    for (i = 0; i < notepad.notes.length; i ++) {
      messages.push(notepad.notes[i])
    }
    var htmlList = messages.join("</li><li>")
    return "<ul><li>" + htmlList + "</li></ul>"
  }

  exports.HTMLifyNotes = HTMLifyNotes;

})(this);
