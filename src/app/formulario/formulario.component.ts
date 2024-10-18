import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  
  @Output() personaCreada = new EventEmitter<Persona>();
  
  // nombreInput = "";
  // apellidoInput = "";

  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('apellidoInput') apellidoInput:ElementRef;

  constructor(private loggingService:LoggingService){
    
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    this.loggingService.enviaMensajeAConsola("Enviamos persona: "+persona1.nombre + " " + persona1.apellido);
    this.personaCreada.emit(persona1);
  }
}
