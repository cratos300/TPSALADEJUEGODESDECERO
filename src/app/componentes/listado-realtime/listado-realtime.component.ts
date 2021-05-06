import { Component, OnInit } from '@angular/core';
import { MensajeChat } from "../../clases/mensaje-chat";
import { MensajesRealtimeService } from '../../services/mensajes-realtime.service';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listado-realtime',
  templateUrl: './listado-realtime.component.html',
  styleUrls: ['./listado-realtime.component.css']
})
export class ListadoRealtimeComponent implements OnInit {

  ver:any;
  listadoMensajes?: any[];
  mensajeActual?: MensajeChat;
  currentIndex = -1;
  title = '';
  dato:any;

  constructor(private servicioRealTime:MensajesRealtimeService,private auth:AuthService) { 
    this.ver = auth.data;
    this.dato = localStorage.getItem("usuario");
    this.dato = JSON.parse(this.dato);
    this.cargarMensajes();
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
      data.forEach(element => {
        if(element.email == this.dato.correo)
        {
          element.email = "yo";
        }
        console.log(element.email);
      });
      
    });
  }

}
