import {Note, TypeColor} from './Note'
import {DBHandler} from './dbHandler'
import * as chalk from 'chalk';

export class UserNotes {
  constructor(private UserName: string, private Notes: Note[] = []) {
    let DB: DBHandler = new DBHandler(UserName, Notes);
  }

  addNewNote(Title: string, Body: string, Color: TypeColor): void {
    this.Notes.push(new Note(Title, Body, Color));
  }

  removeNote(Title: string): void {
    this.Notes.forEach(note => {
      if (note.getTitle() === Title) {
        const index = this.Notes.indexOf(note)
        if (index > -1) this.Notes.splice(index, 1);
      }
    });
  }
}

let Persona1: UserNotes = new UserNotes("Juan");
