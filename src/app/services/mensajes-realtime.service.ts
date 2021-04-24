import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MensajeChat } from '../clases/mensaje-chat';

@Injectable({
  providedIn: 'root'
})
export class MensajesRealtimeService {

  public dbPath = '/MensajesGeneral';

  MensajesRef!: AngularFireList<MensajeChat>;

  constructor(private db: AngularFireDatabase) {
    
   }
   getAll(): AngularFireList<MensajeChat> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef;
  }

  create(unMensajes: MensajeChat): any {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.push(unMensajes);
  }

  update(key: string, value: any): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    this.MensajesRef = this.db.list(this.dbPath);
    return this.MensajesRef.remove();
  }
}
