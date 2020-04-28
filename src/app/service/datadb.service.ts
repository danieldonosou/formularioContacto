import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { mensaje } from '../modelo/mensaje';

@Injectable({
  providedIn: 'root'
})
export class DatadbService {

  private coleccionContactos : AngularFirestoreCollection<mensaje>;
  constructor(private afs: AngularFirestore) {
    this.coleccionContactos = afs.collection<mensaje>('contacts');
   }

   guardarMensaje(nuevoContacto: mensaje): void
   {
      this.coleccionContactos.add(nuevoContacto);
   }
}
