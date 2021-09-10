import { Component, OnInit } from '@angular/core';
import { MensajesFirestoreService } from '../../services/mensajes-firestore.service';
import { MensajeChat } from "../../clases/mensaje-chat";
import { MensajesRealtimeService } from '../../services/mensajes-realtime.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-chatfirestore',
  templateUrl: './chatfirestore.component.html',
  styleUrls: ['./chatfirestore.component.css']
})
export class ChatfirestoreComponent implements OnInit {
  
  nuevoMensaje: MensajeChat;
  ver:any; 
  data:any;
  
  constructor(private servicioFirestore:MensajesFirestoreService,private servicioRealTime:MensajesRealtimeService) {
    this.nuevoMensaje = new MensajeChat();
   
   }

  ngOnInit(): void {
  }

  EnviarMensaje() {
   
    this.data = "";
    this.nuevoMensaje.fecha = new Date().toLocaleString();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.nuevoMensaje.email =  this.ver.correo;
    console.log(this.nuevoMensaje);
    console.log(this.nuevoMensaje);
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
