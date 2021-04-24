import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  constructor(private cambiarmensajereal:MensajesRealtimeService)
  {
    this.cambiarmensajereal.dbPath = "/MensajesMemotest"
  }

  ngOnInit(): void {
  }

}
