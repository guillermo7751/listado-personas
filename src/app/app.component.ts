import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = "Listado de personas";
  nombreInput = "";
  apellidoInput = "";

  personas:Persona[] = [new Persona('Guillermo','Sánchez'),new Persona('Karla','Monroy'),new Persona('David','Medina'),new Persona('Javier','Obregón'),new Persona('Edgar','Aguirre'), new Persona('Adam','López')];

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1);
  }

}
