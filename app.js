const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const body = {
  describe: 'The body of the',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'add a new note', { title, body })
  .command('list', 'list all notes')
  .command('read', 'read a note', { title })
  .command('remove', 'delte a note', { title })
  .help()
  .argv;
const command = argv._[0];

switch (command) {
  case 'add':
    console.log('adding');
    let newNote = notes.addNote(argv.title, argv.body);
    notes.logNote(newNote ? `Added new note: ${newNote.title}` : `Duplicate note title: ${argv.title}`);
    break;
  case 'list':
    console.log('listing');
    let list = notes.getAll();
    let salutation = list.length == 1 ? 'note' : 'notes';
    console.log(`Printing ${list.length} ${salutation} `)
    list.forEach((note) => notes.logNote(note));
    break;
  case 'read':
    let note = notes.getNote(argv.title);
    notes.logNote(note ? note : 'could not find note');
    break;
  case 'remove':
    removed = notes.removeNote(argv.title);
    removed ? console.log(`Removed ${argv.title}`) : console.log(`Could not remove ${argv.title}`)
    break;
  default:
    console.log('command not recognised');
    break;
}