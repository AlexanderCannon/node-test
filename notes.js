const fs = require('fs');
const _ = require('lodash')

const fetchNotes = () => {
  let notes = []
  try {
    notes = JSON.parse(fs.readFileSync('./notes-data.json'));
  } catch (e) {
    console.log(e.message)
  }
  return notes;
};

const checkDupes = (notes, title) => {
  const dupeNotes = notes.filter((n) => n.title === title);
  if (dupeNotes.length === 0) {
    return true;
  } else {
    return false;
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = { title, body };
  if (checkDupes(notes, title)) {
    try {
      notes.push(note);
      saveNotes(notes)
      return note
    } catch (e) {
      console.log('failed to save')
    }
  }
}

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  let notes = fetchNotes();
  let res = notes.filter((n) => n.title === title);
  return res[0];
}

const removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((n) => n.title !== title);
  saveNotes(filteredNotes);
  return notes.length == filteredNotes.length ? false : true
}

const logNote = (message) => {
  debugger;
  console.log('\n\n--\n');
  console.log(message);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};