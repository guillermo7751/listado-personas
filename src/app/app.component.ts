import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = "Listado de personas";
  
  personas:Persona[] = [new Persona('Guillermo','Sánchez'),new Persona('Karla','Monroy'),new Persona('David','Medina')];

  constructor(private loggingService:LoggingService){
  
  }

  personaAgregada(persona:Persona){
    this.personas.push(persona);
    this.loggingService.enviaMensajeAConsola("Agregamos a la persona "+persona.nombre + " "+ persona.apellido+" al arreglo.");
  }

}
