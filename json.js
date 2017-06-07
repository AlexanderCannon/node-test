const fs = require('fs');

let originalNote = {
  title: "a tite",
  body: "a body"
}

var originaNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originaNoteString);

var notestring = fs.readFileSync('notes.json');
var note = (JSON.parse(notestring));

console.log(typeof note);
console.log(note.title)