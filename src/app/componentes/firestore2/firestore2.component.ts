import { Component, OnInit } from '@angular/core';
import { MensajesFirestoreService } from '../../services/mensajes-firestore.service';
import { MensajeChat } from "../../clases/mensaje-chat";
import { MensajesRealtimeService } from '../../services/mensajes-realtime.service';

@Component({
  selector: 'app-firestore2',
  templateUrl: './firestore2.component.html',
  styleUrls: ['./firestore2.component.css']
})
export class Firestore2Component implements OnInit {

  nuevoMensaje: MensajeChat;
  ver:any; 
  
  constructor(private servicioFirestore:MensajesFirestoreService,private servicioRealTime:MensajesRealtimeService)
  {
    this.nuevoMensaje = new MensajeChat();
  }

  ngOnInit(): void {
  }
  EnviarMensaje() {
    this.nuevoMensaje.fecha = new Date().toLocaleString();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.nuevoMensaje.email =  this.ver.correo;
    console.log(this.nuevoMensaje);
    this.servicioFirestore.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje Fire");
      this.nuevoMensaje.mensaje = "";
    });

    this.servicioRealTime.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje RealTime");
    });

  }

}
