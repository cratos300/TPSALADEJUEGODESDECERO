import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';

@Component({
  selector: 'app-piedra-papelo-tijera',
  templateUrl: './piedra-papelo-tijera.component.html',
  styleUrls: ['./piedra-papelo-tijera.component.css']
})
export class PiedraPapeloTijeraComponent implements OnInit {

  constructor(private cambiarmensajereal:MensajesRealtimeService)
  {
    this.cambiarmensajereal.dbPath = "/MensajesPiedraPapelTijera";
  }

  ngOnInit(): void {
  }

}
