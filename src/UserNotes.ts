import {Note, TypeColor} from './Note'
import {DBHandler} from './dbHandler'
const chalk = require('chalk');

export class UserNotes {
  constructor(private UserName: string, private Notes: Note[] = [], private DB: DBHandler = new DBHandler(UserName, Notes)) {
  }

  updateUser() {
    this.DB.databaseUpdater(this.UserName, this.Notes);
  }

  addNewNote(Title: string, Body: string, Color: TypeColor): void {
    let check: [boolean, Note] = this.existNote(Title);
    if(!check[0]) {
      this.Notes.push(new Note(Title, Body, Color));
      console.log(chalk.green.bold("Nueva nota creada!"));
    } else {
      console.log(chalk.red.bold("Ya existe una nota con el mismo titulo"));
    }
  }

  modifyNote(newBody: string, Title: string) {
    let check: [boolean, Note] = this.existNote(Title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1]);
      this.Notes[index].setBody(newBody);
      console.log(chalk.green.bold("Nota modificada!"));
    } else {
      console.log(chalk.red.bold("No existe ninguna nota con ese titulo"));
    }
  }

  removeNote(Title: string): void {
    let check: [boolean, Note] = this.existNote(Title);
    if (check[0]) {
      const index = this.Notes.indexOf(check[1])
      if (index > -1) this.Notes.splice(index, 1);
      console.log(chalk.green("Nota Eliminada!"));
    } else {
      console.log(chalk.red.bold("No existe ninguna nota con ese titulo"));
    }
  }

  existNote(Title: string): [boolean, Note] {
    let found: boolean = false;
    let foundNote: Note = new Note("-", "-", "Red");
    this.Notes.forEach(note => {
      if (note.getTitle() === Title) {
        found = true;
        foundNote = note;
      }
    })
    return [found, foundNote];
  }

  listTitles() {
    console.log("Notas de " + this.UserName + ":");
    this.Notes.forEach(note => {
      note.printTitle();
    })
  }

  readNote(Title: string) {
    let check: [boolean, Note] = this.existNote(Title);
    if (check[0]) {
      console.log("------------------------")
      check[1].printTitle();
      check[1].printBody();
      console.log("------------------------")
    } else {
      console.log(chalk.red.bold("No existe ninguna nota con ese titulo"));
    }
  }
}