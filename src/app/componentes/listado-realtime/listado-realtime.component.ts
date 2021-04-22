import { Component, OnInit } from '@angular/core';
import { MensajeChat } from "../../clases/mensaje-chat";
import { MensajesRealtimeService } from '../../services/mensajes-realtime.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-realtime',
  templateUrl: './listado-realtime.component.html',
  styleUrls: ['./listado-realtime.component.css']
})
export class ListadoRealtimeComponent implements OnInit {

  listadoMensajes?: any[];
  mensajeActual?: MensajeChat;
  currentIndex = -1;
  title = '';

  constructor(private servicioRealTime:MensajesRealtimeService) { 

  }

  ngOnInit(): void {
    this.cargarMensajes();
  }

  cargarMensajes(): void {
    this.servicioRealTime.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.listadoMensajes = data;
      console.log(this.listadoMensajes);
    });
  }

}
