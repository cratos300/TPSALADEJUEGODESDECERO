import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Formm } from '../clases/formm';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private dbPath = '/formularios';

  MensajesRef: AngularFirestoreCollection<Formm>;

  constructor(private db: AngularFirestore) { 
    this.MensajesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Formm> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef;
  }

  create(mensajes: Formm): any {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.add({...mensajes});
  }
 
  update(id: string, data: any): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    this.MensajesRef = this.db.collection(this.dbPath);
    return this.MensajesRef.doc(id).delete();
  }
}
