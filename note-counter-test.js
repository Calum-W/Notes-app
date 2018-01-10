function idCounterIncrements() {
  var note1 = new Note("Language", "My favourite language is Javascript");
  var note2 = new Note("Second note", "My ID should be 1")
  assert.isTrue(note2.id == 1)
}

idCounterIncrements()
