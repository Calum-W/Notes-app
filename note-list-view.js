(function(exports) {

  HTMLifyNotes = function(notepad) {
    var messages = [];
    for (i = 0; i < notepad.notes.length; i ++) {
      messages.push(notepad.notes[i].message)
    }
    return "<ul><li>" + messages.join("</li><li>") + "</li></ul>"
  }

  exports.HTMLifyNotes = HTMLifyNotes;

})(this);
