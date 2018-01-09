function testNoteStoresText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(note.message == "My favourite language is Javascript");
};

testNoteStoresText();

function testListNotes() {
  var note1 = new Note("My favourite language is Javascript")
  var note2 = new Note("My favourite hobby is lying")
  var notepad = new Notepad
  notepad.addNote(note1)
  notepad.addNote(note2)
  assert.isTrue(Array.isArray(notepad.notes))
  assert.isTrue(JSON.stringify(notepad.notes) == JSON.stringify([note1, note2]))
};

testListNotes();

function testHTMLifyNotes() {
  var note1 = new Note("My favourite language is Javascript")
  var note2 = new Note("My favourite hobby is lying")
  var notepad = new Notepad
  notepad.addNote("My favourite language is Javascript");
  notepad.addNote("My favourite hobby is lying");
  assert.isTrue(notepad.HTMLifyNotes() == "<ul><li>My favourite language is Javascript</li><li>My favourite hobby is lying</li></ul>");
};

testHTMLifyNotes();
