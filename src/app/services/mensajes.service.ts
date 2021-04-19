import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../clases/mensaje';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private dtbase = '/usuarios';
  mensajesRef : AngularFirestoreCollection<Mensaje>;
  users : Observable<Mensaje[]>;
  
  
  constructor(private db:AngularFirestore) { 
    this.mensajesRef = db.collection(this.dtbase);
    this.users = this.mensajesRef.valueChanges();
  }
  getAll():AngularFirestoreCollection<Mensaje>{
    
    return this.mensajesRef;
  }
  create(mensaje:Mensaje):any
  { 
    return this.mensajesRef.add({...mensaje});
  }
  
}
