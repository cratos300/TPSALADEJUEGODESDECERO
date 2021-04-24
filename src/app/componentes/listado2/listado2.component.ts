import { Component, OnInit } from '@angular/core';
import { MensajeChat } from "../../clases/mensaje-chat";
import { MensajesRealtimeService } from '../../services/mensajes-realtime.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado2',
  templateUrl: './listado2.component.html',
  styleUrls: ['./listado2.component.css']
})
export class Listado2Component implements OnInit {

  
  listadoMensajes?: any[];
  mensajeActual?: MensajeChat;
  currentIndex = -1;
  title = '';
  data:any;

  constructor(private servicioRealTime:MensajesRealtimeService)
  {
    this.data = localStorage.getItem("usuario");
    this.data = JSON.parse(this.data);
    this.cargarMensajes();
  }

  ngOnInit(): void {
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
      data.forEach(element => {
        if(element.email == this.data.correo)
        {
          element.email = "yo";
        }
        console.log(element.email);
      });
      
  
      
    });
  }

}
