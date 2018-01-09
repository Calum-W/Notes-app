window.onload = function() {

  (function(exports) {
    function NoteController(notepad = new Notepad()) {
      this.notepad = notepad
      this.notepad.addNote("Drink", "Favourite drink: milkshake");
    };

    NoteController.prototype.insertHTML = function() {
      document.getElementById("notelist").innerHTML = HTMLifyNotes(this.notepad);
    }

    exports.NoteController = NoteController;
  })(this);

  controller = new NoteController();
  controller.insertHTML();

};
