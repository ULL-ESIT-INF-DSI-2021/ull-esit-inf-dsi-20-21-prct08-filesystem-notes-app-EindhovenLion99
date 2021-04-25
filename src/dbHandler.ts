const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./src/database/users.json');
const db = low(adapter);

import {Note} from './Note'

/**
 * # Class DBHandler
 * 
 * Esta clase se encarga de leer y actualizar la base de datos en la cual se 
 * encunetran los usuarios con sus respectivas notas. Ademas, tambien se 
 * encarga de añadir un nuevo usuario si no lo encuentra en la base de datos.
 * 
 * Cuando se llamaba al constructor de UserNotes, este llamaba al constructor de
 * este, para que asi comprobase las notas que ya estuvieran en la base de datos, de
 * ese mismo usuario. En caso de que ese usuario no exista, el constructor llama a
 * ```addNewUser()```, que añade al usuario nuevo. En caso de que ya exista el usuario
 * cramos una variable sz, que almacenara la cantidad de notas que ya hay en la base de datos
 * y las carga en el vector de notas.
 * 
 * @param sz sz -> Guarda la cantidad de notas que tiene un usuario ya creado
 * 
 * ```ts
 * constructor(UserName: string, Notes: Note[] = []) {
 *   if (!db.get('Users').find({ name: UserName}).value()) {
 *     this.addNewUser(UserName);
 *   } else {
 *     let sz: number = db.get('Users').find({name: UserName}).get("notes").size().value();
 *     for (let i = 0; i < sz; i++) {
 *       Notes.push(new Note(db.get('Users').find({name: UserName}).get(`notes[${i}].Title`).value(),
 *                           db.get('Users').find({name: UserName}).get(`notes[${i}].Body`).value(),
 *                           db.get('Users').find({name: UserName}).get(`notes[${i}].Color`).value()));
 *     }
 *   }
 * }
 * ```
 * 
 * ## Funcion addNewUser(UserName: string)
 * 
 * Esta funcion se encarga de añadir un nuevo usuario a la basa de datos, que se hace con 
 * la funcion push de lowdb.
 * 
 * ```ts
 * addNewUser(UserName: string) {
 *   db.defaults({Users: []}).write();
 *   db.get('Users').push({ name: UserName, notes: [], 
 *                           id: Math.floor(Math.random() * (10000 - 1) + 1)})
 *     .write();
 * }
 * ```
 * 
 * ## Funcion updateUser(UserName: string)
 * 
 * Cuando se llama a esta funcion, se encarga de actualizar la base de datos, para eso borra los datos que
 * estaban antes, e introduce los actuales. De esta forma evitamos que se dupliquen.
 * 
 * ```ts
 * databaseUpdater(Username: string, Notes: Note[]) {
 *    db.get('Users').find({name: Username}).get("notes").remove().write();
 *    Notes.forEach(note => {
 *      db.get('Users')
 *      .find({name: Username})
 *      .get("notes")
 *      .push({Title: note.getTitle(), Body: note.getBody(), Color: note.getColor()})
 *      .write()
 *    })
 *  }
 */

export class DBHandler {
  constructor(UserName: string, Notes: Note[] = []) {
    if (!db.get('Users').find({ name: UserName}).value()) {
      this.addNewUser(UserName);
    } else {
      let sz: number = db.get('Users').find({name: UserName}).get("notes").size().value();
      for (let i = 0; i < sz; i++) {
        Notes.push(new Note(db.get('Users').find({name: UserName}).get(`notes[${i}].Title`).value(),
                            db.get('Users').find({name: UserName}).get(`notes[${i}].Body`).value(),
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
    db.get('Users').find({name: Username}).get("notes").remove().write();
    Notes.forEach(note => {
      db.get('Users')
      .find({name: Username})
      .get("notes")
      .push({Title: note.getTitle(), Body: note.getBody(), Color: note.getColor()})
      .write()
    })
  }
}