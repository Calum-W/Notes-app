function testNoteStoresText() {
  var note = new Note("Language", "My favourite language is Javascript");
  assert.isTrue(note.message == "My favourite language is Javascript");
};

testNoteStoresText();

function testListNotes() {
  var notepad = new Notepad
  notepad.addNote("Language", "My favourite language is Javascript")
  notepad.addNote("Disclaimer", "My favourite hobby is lying")
  assert.isTrue(Array.isArray(notepad.notes))
  assert.isTrue(notepad.notes[0].title == "Language")
  assert.isTrue(notepad.notes[1].title == "Disclaimer")
};

testListNotes();

function testHTMLifyNotes() {
  var notepad = new Notepad
  noteListView = new NoteListView(notepad)
  notepad.addNote("Language", "My favourite language is Javascript")
  notepad.addNote("Disclaimer", "My favourite hobby is lying")
  assert.isTrue(noteListView.HTMLifyNotes() == "<ul><li>My favourite language is Javascript</li><li>My favourite hobby is lying</li></ul>");
};

testHTMLifyNotes();
