const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./src/database/users.json');
const db = low(adapter);

import {Note} from './Note'

export class DBHandler {
  constructor(UserName: string, Notes: Note[] = []) {
    if (!db.get('Users').find({ name: UserName}).value()) {
      this.addNewUser(UserName);
    } else {
      let sz: number = db.get('Users').find({name: UserName}).get("notes").size().value();
      for (let i = 0; i < sz; i++) {
        Notes.push(new Note(db.get('Users').find({name: UserName}).get(`notes[${i}].title`).value(),
                            db.get('Users').find({name: UserName}).get(`notes[${i}].body`).value(),
                            db.get('Users').find({name: UserName}).get(`notes[${i}].Color`).value()));
      }
    }
  }

  addNewUser(UserName: string) {
    db.defaults({Users: []}).write();
    db.get('Users').push({ name: UserName, notes: [], 
                            id: Math.floor(Math.random() * (10000 - 1) + 1)})
      .write();
  }

  databaseUpdater(Username: string, Notes: Note[]) {
    Notes.forEach(note => {
      db.get('Users')
      .find({name: Username})
      .get("notes")
      .push({Title: note.getTitle(), Body: note.getBody(), Color: note.getColor()})
      .write()
    })
  }
}