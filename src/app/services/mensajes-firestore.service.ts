import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MensajeChat } from '../clases/mensaje-chat';

@Injectable({
  providedIn: 'root'
})
export class MensajesFirestoreService {

  private dbPath = '/mensajesFire';

  MensajesRef: AngularFirestoreCollection<MensajeChat>;

  constructor(private db: AngularFirestore) { 
    this.MensajesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<MensajeChat> {
    return this.MensajesRef;
  }

  create(mensajes: MensajeChat): any {
    return this.MensajesRef.add({...mensajes});
  }
 
  update(id: string, data: any): Promise<void> {
    return this.MensajesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.MensajesRef.doc(id).delete();
  }
}
