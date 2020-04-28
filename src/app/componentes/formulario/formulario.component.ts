import { Component, OnInit } from '@angular/core';
import { DatadbService } from '../../service/datadb.service'
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'formularioContacto',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      email: new FormControl(''),
      nombre: new FormControl(''),
      mensaje: new FormControl('')

    })
  }
  formularioContacto: FormGroup;
  constructor(private servicio: DatadbService) { 
    this.formularioContacto= this.createFormGroup();
  }

  ngOnInit() {
  }

  onResetForm(){
    this.formularioContacto.reset();
  }

  onSaveForm(){
   /*
    console.log('guardado', );
    const nuevoContacto = {
      nombre: 'Dantheman',
      email: 'danthe@gmail.com',
      mensaje: 'Hola que tal'
    }
    */
    this.servicio.guardarMensaje(this.formularioContacto.value);
  }

}
