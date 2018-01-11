  (function(exports) {
    function NoteController(notepad = new Notepad()) {
      this.notepad = notepad;
      this.view = new NoteListView(this.notepad)
    };

    NoteController.prototype.insertHTML = function(noteListView = this.view) {
      document.getElementById("notelist").innerHTML = noteListView.HTMLifyNotes();
    }

    exports.NoteController = NoteController;
  })(this);
