import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = "Listado de personas";
  
  personas:Persona[] = [new Persona('Guillermo','Sánchez'),new Persona('Karla','Monroy'),new Persona('David','Medina')];

  personaAgregada(persona:Persona){
    this.personas.push(persona);
  }

}
