import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Puntajes } from "../clases/puntajes";

@Injectable({
  providedIn: 'root'
})
export class TatetiService {

  public dbPath = '/tateti';

  tatetiRef: AngularFirestoreCollection<Puntajes>;
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

  create(puntajes: Puntajes): any {
    this.tatetiRef = this.db.collection(this.dbPath);
    return this.tatetiRef.add({...puntajes});
  }

  update(id: string, data: any): Promise<void> {
    this.tatetiRef = this.db.collection(this.dbPath);
    return this.tatetiRef.doc(id).update({
      derrotas: data.derrotas,
      victorias: data.victorias,
      email: data.email,
      empate: data.empate
    });
  }

  delete(id: string): Promise<void> {
    this.tatetiRef = this.db.collection(this.dbPath);
    return this.tatetiRef.doc(id).delete();
  }
}
