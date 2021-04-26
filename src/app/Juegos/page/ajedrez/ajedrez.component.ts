import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajedrez',
  templateUrl: './ajedrez.component.html',
  styleUrls: ['./ajedrez.component.css']
})
export class AjedrezComponent implements OnInit {

  bop:boolean = false;
  ganaste:boolean = false;
  numero!:number;
  numeroIngresado!:number;
  contador:number = 0;
  mostrar:boolean = true;
  mostrar2:boolean = false;
  mostrar3:boolean = false;
  constructor(private cambiarmensajereal:MensajesRealtimeService,private toastr:ToastrService)
  {
    this.cambiarmensajereal.dbPath = "/MensajesAjedrez";
  }

  ngOnInit(): void {
  }
  GenerarNumero(min = 0,max = 101)
  {
    this.numero = Math.floor(Math.random() * (max - min) + min);
    console.log(this.numero);
    this.bop = true;
  }
  EnviarNumero()
  {
    if(this.numeroIngresado > this.numero)
    {
      this.contador++;
      this.toastr.error('¡Vuelve a intentarlo ese no es el numero.(Si necesitas lee la info del juego abajo.):','VAMOS, TU PUEDES!');
      console.log(this.contador)
    }
    else if(this.numeroIngresado < this.numero)
    {
      this.contador++;
      this.toastr.error('¡Vuelve a intentarlo ese no es el numero.(Si necesitas lee la info del juego abajo.):','VAMOS, TU PUEDES!');
      console.log(this.contador);
    }
    else
    {
      this.bop = false;
      this.ganaste = false;
      this.contador = 0;
      this.mostrar = true;
      this.mostrar2 = false;
      this.mostrar3 = false;
      Swal.fire(
        'BUEN TRABAJO',
        'FELICIDADES GANASTE!!!',
        'success'
      )
    }
  }
  ayuda()
  {
    if(this.numero <= 50)
    {
      this.mostrar = false;
      this.mostrar2 = true;
    }
    else if(this.numero > 50)
    {
      this.mostrar = false;
      this.mostrar3 = true;
    }
  }

}
