window.onload = function() {

  notepad = new Notepad
  controller = new NoteController(notepad);
  notepad.addNote("Hello", "This is a message saying hello")
  notepad.addNote("Goodbye", "This is another message saying goodbye")
  notepad.addNote("Note 3", "Third note")
  controller.insertHTML();

};
