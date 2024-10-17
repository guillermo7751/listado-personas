import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

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

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(persona1);
  }
}
