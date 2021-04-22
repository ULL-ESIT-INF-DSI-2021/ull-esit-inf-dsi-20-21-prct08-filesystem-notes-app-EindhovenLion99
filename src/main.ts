import * as yargs from 'yargs';
import {TypeColor} from './Note';
import {UserNotes} from './UserNotes';

yargs.command({
  command: 'add',
  describe: 'Añade una nueva nota',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body de la nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.body === 'string' 
        && typeof argv.color === 'string' && typeof argv.user === 'string') {
      let User: UserNotes = new UserNotes(argv.user);
      let Color: TypeColor = colorGetter(argv.color);
      if(User.addNewNote(argv.title, argv.body, Color))
        User.updateUser();
    }
  },
});


yargs.command({
  command: 'remove',
  describe: 'Elimina una nota',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      let User: UserNotes = new UserNotes(argv.user);
      if(User.removeNote(argv.title))
        User.updateUser();
    }
  },
});

yargs.command({
  command: 'modify',
  describe: 'Modifica una nota',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Cuerpo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string' && typeof argv.body === 'string') {
      let User: UserNotes = new UserNotes(argv.user);
      if(User.modifyNote(argv.body, argv.title))
        User.updateUser();
    }
  },
});


yargs.command({
  command: 'read',
  describe: 'Lee una nota',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      let User: UserNotes = new UserNotes(argv.user);
      User.readNote(argv.title);
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'Lista las notas',
  builder: {
    user: {
      describe: 'Usuario',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      let User: UserNotes = new UserNotes(argv.user);
      User.listTitles();
    }
  },
});

yargs.parse();


function colorGetter(color: string): TypeColor {
  let color_: TypeColor = "Blue"
  switch (color) {
    case "Blue":
      color_ = "Blue";
      break;
    case "Red":
      color_ = "Red";
      break;
    case "Tellow":
      color_ = "Yellow";
      break;
    case "Green":
      color_ = "Green";
      break;
  }
  return color_;
}