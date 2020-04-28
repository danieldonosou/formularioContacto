import { Component, OnInit } from '@angular/core';
import { DatadbService } from '../../service/datadb.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'formularioContacto',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])

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
   if (this.formularioContacto.valid)
   {
      console.log('es valido');
      this.servicio.guardarMensaje(this.formularioContacto.value);
      this.onResetForm();
   }
   else
   {
    console.log('No es valido');
   }
    
  }

  get nombre(){
    return this.formularioContacto.get('nombre');
  }
  get email(){
    return this.formularioContacto.get('email');
  }
  get mensaje(){
    return this.formularioContacto.get('mensaje');
  }

}
