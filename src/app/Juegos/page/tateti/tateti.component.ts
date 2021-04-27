import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  constructor(private cambiarmensajereal:MensajesRealtimeService)
  {
     this.cambiarmensajereal.dbPath = "/MensajesTateti";
  }

  ngOnInit(): void {
  
}
}
