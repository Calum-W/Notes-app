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
  notepad.addNote("Language", "Javascript")
  notepad.addNote("Disclaimer", "I love lying")
  assert.isTrue(noteListView.HTMLifyNotes() == "<ul><li>Javascript</li><li>I love lying</li></ul>");
};

testHTMLifyNotes();

function testNoteController() {
  var notepad = new Notepad
  var noteController = new NoteController(notepad)
  function NoteListViewDouble() {
  }
  NoteListViewDouble.prototype =  {
    HTMLifyNotes: function() {
      return "it worked"
    }
  }
  notepad.addNote("Language", "Javascript")
  notepad.addNote("Disclaimer", "I love lying")
  var noteListViewDouble = new NoteListViewDouble
  noteController.insertHTML(noteListViewDouble)
  assert.isTrue(document.getElementById("notelist").innerHTML == "it worked")
}

testNoteController()

function testSingleNoteView() {
  var note = new Note("Language", "My favourite language is Javascript");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.display() == "<h2>Language</h2><p>My favourite language is Javascript</p>")
}

testSingleNoteView()

function testHTMLifyNotesLength() {
  var notepad = new Notepad
  noteListView = new NoteListView(notepad)
  notepad.addNote("Language", "My favourite language is Javascript")
  notepad.addNote("Disclaimer", "My favourite hobby is lying")
  assert.isTrue(noteListView.HTMLifyNotes() == "<ul><li>My favourite languag</li><li>My favourite hobby i</li></ul>");
};

testHTMLifyNotesLength()
