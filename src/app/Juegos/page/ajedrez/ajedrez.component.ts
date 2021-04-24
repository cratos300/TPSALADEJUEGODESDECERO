import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';

@Component({
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.component.html',
  styleUrls: ['./ajedrez.component.css']
})
export class AjedrezComponent implements OnInit {

  constructor(private cambiarmensajereal:MensajesRealtimeService)
  {
    this.cambiarmensajereal.dbPath = "/MensajesAjedrez";
  }

  ngOnInit(): void {
  }

}
