import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Puntajesss } from "../clases/puntajesss";

@Injectable({
  providedIn: 'root'
})
export class MemotestService {

  private dbPath = '/memotest';
  memotestRef: AngularFirestoreCollection<Puntajesss>;
  lista = new Array();

  constructor(private db: AngularFirestore) { 
    this.memotestRef = db.collection(this.dbPath);
  }

  getAll(){
    return this.memotestRef;
 }
 create(puntajes: Puntajesss): any {
  return this.memotestRef.add({...puntajes});
}

update(id: string, data: any): Promise<void> {
  return this.memotestRef.doc(id).update({
    derrotas: data.derrotas,
    victorias: data.victorias,
    email: data.email,
    empate: data.empate
  });
}

delete(id: string): Promise<void> {
  return this.memotestRef.doc(id).delete();
}
}
