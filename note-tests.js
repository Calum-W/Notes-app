function testNoteStoresText() {
  var note = new Note("My favourite language is Javascript");
  assert.isTrue(JSON.stringify(note.list) == JSON.stringify(["My favourite language is Javascript"]));
};

testNoteStoresText();

function testListNotes() {
  var note = new Note("My favourite language is Javascript")
  note.addNote("My favourite hobby is lying")
  assert.isTrue(Array.isArray(note.list))
  assert.isTrue(JSON.stringify(note.list) == JSON.stringify(["My favourite language is Javascript", "My favourite hobby is lying"]))
};

testListNotes();

function testHTMLifyNotes() {
  var note = new Note("My favourite language is Javascript");
  note.addNote("My favourite hobby is lying");
  assert.isTrue(note.HTMLifyNotes() == "<ul><li>My favourite language is Javascript</li><li>My favourite hobby is lying</li></ul>");
};

testHTMLifyNotes();
