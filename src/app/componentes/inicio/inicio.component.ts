import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private cambiarmensajereal:MensajesRealtimeService)
   {
      
   }

  ngOnInit(): void {
  }

}
