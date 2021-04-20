import * as chalk from 'chalk';

/**
 * # Class Note
 * Esta clase se encargara de la estructura y componentes de cada nota.
 * 
 * ## Atributos
 * Los atributos de la clase Note son los siguientes:
 * @param Title
 * @param Body
 * @param Color
 * 
 * ## Metodos
 * Son los setters y getters basicos de la clase, para poder modificar y obtener los valores de la clase
 * @method setTitle() Modifica el titulo de la nota
 * @method setBody() Modifica el cuerpo de la nota
 * @method setColor() Modifica el color de la nota
 * 
 * @method getTitle() Retorna el titulo de la nota
 * @method getBody() Retorna el cuerpo de la nota
 * @method getColor() Retorna el color de la nota
 */

export type TypeColor = "Red" | "Green" | "Blue" | "Yellow";

export class Note {
  constructor(private Title: string,
              private Body: string,
              private Color: TypeColor) {}

  setTitle(newTitle: string): void {
    this.Title = newTitle;
  }

  setBody(newBody: string): void {
    this.Body = newBody;
  }

  setColor(newColor: TypeColor): void {
    this.Color = newColor;
  }

  getTitle(): string {
    return this.Title;
  }

  getBody(): string {
    return this.Body;
  }

  getColor(): TypeColor {
    return this.Color;
  }
}