function testNoteStoresText() {
  var note = new Note("Language", "My favourite language is Javascript");
  assert.isTrue(note.message == "My favourite language is Javascript", "Note stores text");
};

testNoteStoresText();

function testListNotes() {
  var notepad = new Notepad
  notepad.addNote("Language", "My favourite language is Javascript")
  notepad.addNote("Disclaimer", "My favourite hobby is lying")
  assert.isTrue(Array.isArray(notepad.notes), "Note list has an array")
  assert.isTrue(notepad.notes[0].title == "Language", "First note added goes into the note list array")
  assert.isTrue(notepad.notes[1].title == "Disclaimer", "Second note added goes into the note list array")
};

testListNotes();

// function testHTMLifyNotes() {
//   var notepad = new Notepad
//   noteListView = new NoteListView(notepad)
//   notepad.addNote("Language", "Javascript")
//   notepad.addNote("Disclaimer", "I love lying")
//   assert.isTrue(noteListView.HTMLifyNotes() == "<ul><li>Javascript</li><li>I love lying</li></ul>", "Notes are HTMLified");
// };
//
// testHTMLifyNotes();

function testHTMLifyNotes2() {
  var notepad = new Notepad
  var noteDouble = new NoteDouble
  notepad.notes.push(noteDouble)
  var noteListView = new NoteListView(notepad)

  function NoteDouble() {
    this.id = 1
    this.message = "12345678901234567890this bit shouldn't appear"
  }
  assert.isTrue(noteListView.HTMLifyNotes() == "<ul><li><li><div id=1>12345678901234567890</div></li></li></ul>", "Prints IDs and first 20 characters of the message");
}

testHTMLifyNotes2()

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
  assert.isTrue(document.getElementById("notelist").innerHTML == "it worked", "Note controller changes the page view")
}

testNoteController()

function testSingleNoteView() {
  var note = new Note("Language", "My favourite language is Javascript");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.display() == "<h2>Language</h2><p>My favourite language is Javascript</p>", "Single notes can be viewed")
}

testSingleNoteView()

// function testHTMLifyNotesLength() {
//   var notepad = new Notepad
//   noteListView = new NoteListView(notepad)
//   notepad.addNote("Language", "My favourite language is Javascript")
//   notepad.addNote("Disclaimer", "My favourite hobby is lying")
//   assert.isTrue(noteListView.HTMLifyNotes() == "<ul><li>My favourite languag</li><li>My favourite hobby i</li></ul>", "Notes are limited to 20 characters");
// };
//
// testHTMLifyNotesLength()
