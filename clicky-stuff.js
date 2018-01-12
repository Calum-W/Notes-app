makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteIDFromUrl(window.location));
};

function getNoteIDFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(noteID) {
  var singleNoteView = new SingleNoteView(controller.notepad.notes[noteID])
  console.log(singleNoteView)
  document
    .getElementById("notelist")
    .innerHTML = singleNoteView.display();
};
