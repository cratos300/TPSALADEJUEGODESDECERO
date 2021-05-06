import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import Swal from 'sweetalert2';
import {Puntajes} from '../../../clases/puntajes';
import {TatetiService} from '../../../services/tateti.service';
import {Puntajesolo} from '../../../clases/puntajesolo'
import { AdivinasoloService } from 'src/app/services/adivinasolo.service';

@Component({
  selector: 'app-adivinanumero',
  templateUrl: './adivinanumero.component.html',
  styleUrls: ['./adivinanumero.component.css']
})
export class AdivinanumeroComponent implements OnInit {

  dieta1!:string;
  dieta2!:string;
  bop:boolean = false;
  ganaste:boolean = false;
  numero!:number;
  numeroIngresado!:number;
  contador:number = 0;
  mostrar1:boolean = true;
  mostrar2:boolean = false;
  mostrar3:boolean = false;
  contadorVitorias:number = 0;
  contadorintentos:number = 0;
    punt1!:Puntajesolo;
    punt2!:Puntajesolo;
    id: string = "";
    ver:any
    tieneDatosCargados: boolean = false;
    email:any;
    global:any;
  constructor(private cambiarmensajereal:MensajesRealtimeService,private toastr:ToastrService,private adivinasolo : AdivinasoloService)
  {
    this.cambiarmensajereal.dbPath = "/MensajesAjedrez";
    this.punt1 = new Puntajesolo();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.punt1.email  = this.ver.correo;
    this.email = this.punt1.email?.toString();
    this.inicializarPuntajes();
    this.getAll();
  }

  ngOnInit(): void {
  }
  GenerarNumero(min = 0,max = 101)
  {
    this.numero = Math.floor(Math.random() * (max - min) + min);
    alert("el numero generado es : " + this.numero);
    this.bop = true;
  }
  EnviarNumero()
  {
    if(this.numeroIngresado != this.numero)
    {
      this.contadorintentos++;
      this.punt1.intentos = this.contadorintentos.toString();
      this.punt1.drintin = this.contadorintentos.toString();
      this.contador++;
      this.toastr.error('¡Vuelve a intentarlo ese no es el numero.(Si necesitas lee la info del juego abajo.):','VAMOS, TU PUEDES!');
      console.log(this.contador)
    }
    else
    {
      
      this.contadorVitorias++;
      this.punt1.victorias = this.contadorVitorias.toString();
      this.bop = false;
      this.ganaste = false;
      this.contador = 0;
      this.mostrar1 = true;
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
      this.mostrar1 = false;
      this.mostrar2 = true;
    }
    else if(this.numero > 50)
    {
      this.mostrar1 = false;
      this.mostrar3 = true;
    }
  }
  inicializarPuntajes(){
    this.punt1.victorias = "0";
    this.punt1.intentos = "0";
  }
  getAll(){
    var lista = this.adivinasolo.getAll().valueChanges({ idField: 'propertyId' })
     lista.subscribe(lista=>{
       for (var puntaje of lista) {
         this.punt1.email = this.email;
         if(puntaje.email == this.punt1.email) {
           this.punt2 = puntaje;
           this.tieneDatosCargados = true;
           this.id = puntaje.propertyId;
           break;
         }
       }
     });       
  }
  guardar(){
    
    
    if(!this.tieneDatosCargados){
    
      this.adivinasolo.create(this.punt1);
      console.log("guardar");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus partidas están guardadas',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      this.punt1.victorias = (+(+this.punt1.victorias) +(+this.punt2.victorias)).toString();
      this.punt1.intentos =  (+(+this.punt1.intentos) +(+this.punt2.intentos)).toString();
      this.adivinasolo.update(this.id,this.punt1);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus partidas están guardadas',
        showConfirmButton: false,
        timer: 1500
      });
      this.contadorVitorias = 0;
    }
    
    this.inicializarPuntajes();
  }
    mostrar(){
     if(!this.tieneDatosCargados)
     {
       this.punt2 = new Puntajesolo();
       this.punt2.intentos = "0"
       this.punt2.email = "";
       this.punt2.victorias  = "";
       this.punt2.intentos = "";
     }
      
      Swal.fire({
        title: '<strong>Partidas</strong>',
        icon: 'info',
        html:
        '<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th></tr></thead><tbody><tr><th scope="row">'+this.punt2.email+'</th><td>'+this.punt2.victorias+'</td></tr>',

      });
       
     }
}
