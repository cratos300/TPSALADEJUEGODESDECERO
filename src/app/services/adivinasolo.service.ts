import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Puntajesolo } from '../clases/puntajesolo';

@Injectable({
  providedIn: 'root'
})
export class AdivinasoloService {

  public dbPath = '/adivinasolo';

  tatetiRef: AngularFirestoreCollection<Puntajesolo>;
  lista = new Array();
  
  constructor(private db: AngularFirestore) { 
    this.tatetiRef = db.collection(this.dbPath);
  }

  // getAll(): AngularFirestoreCollection<Puntajes> {
  //   return this.tatetiRef;
  // }

  getAll(){
    this.tatetiRef = this.db.collection(this.dbPath);
     return this.tatetiRef;
  }

  create(puntajes: Puntajesolo): any {
    this.tatetiRef = this.db.collection(this.dbPath);
    return this.tatetiRef.add({...puntajes});
  }

  update(id: string, data: any): Promise<void> {
    this.tatetiRef = this.db.collection(this.dbPath);
    return this.tatetiRef.doc(id).update({
      victorias: data.victorias,
      email: data.email,
      intentos: data.intentos
    });
  }

  delete(id: string): Promise<void> {
    this.tatetiRef = this.db.collection(this.dbPath);
    return this.tatetiRef.doc(id).delete();
  }
}
