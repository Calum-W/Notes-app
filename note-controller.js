window.onload = function() {

  (function(exports) {
    function NoteController(notepad = new Notepad()) {
      this.notepad = notepad
      this.notepad.addNote("Drink", "Favourite drink: milkshake");
      this.view = new NoteListView(this.notepad)
    };

    NoteController.prototype.insertHTML = function() {
      document.getElementById("notelist").innerHTML = this.view.HTMLifyNotes();
    }

    exports.NoteController = NoteController;
  })(this);

  controller = new NoteController();
  controller.insertHTML();

};
