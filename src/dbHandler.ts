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
}