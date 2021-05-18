import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import {Puntajes} from '../../../clases/puntajes';
import {TatetiService} from '../../../services/tateti.service';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  comenzar:boolean = false;
  casilleros = new Array(9);
  ficha :string = "X";
  contadorVitorias:number = 0;
  contadorDerrotas:number = 0;
  contadorEmpates: number = 0;
  puntajes!:Puntajes;
  puntajesVista!:Puntajes;
  id: string = "";
  ver:any
  tieneDatosCargados: boolean = false;
  email:any;


  constructor(private toastr:ToastrService,private tatetiServicio : TatetiService) {
    this.tatetiServicio.dbPath = "/tateti";
    this.puntajes = new Puntajes();
    this.ver = localStorage.getItem("usuario");
    this.ver = JSON.parse(this.ver);
    this.puntajes.email  = this.ver.correo;
    this.email = this.puntajes.email?.toString();
    this.inicializarPuntajes();
    this.getAll();
   }

  ngOnInit(): void {
  }
  
  jugar(numeroCasillero:number){
    
    if(!this.casilleros[numeroCasillero]){
      this.casilleros[numeroCasillero] = this.ficha;
      var celdas = document.getElementsByClassName("celda");
      for (let index = 0; index < celdas.length; index++) {
        if(index == numeroCasillero){
          celdas[index].setAttribute("value",this.ficha.toUpperCase());
          break;
        }
        
      }
      
      if(this.gano(this.ficha)){
        this.contadorVitorias++;
        this.puntajes.victorias = this.contadorVitorias.toString();
        console.log("GANASTE");
        this.toastr.success('GANASTE QUE BIENN!!!!.:','SOS UN GROSO..!',{
          timeOut:2000
        });
        this.reiniciar();
      }else if(this.empate()){
        this.contadorEmpates++;
        this.puntajes.empate = this.contadorEmpates.toString();
        this.toastr.warning('Empantaste!!!!.:','UPSS, QUE PENA..!',{
          timeOut:2000
        });
        this.reiniciar();
      }
      else{
        setTimeout(() => this.juegaMaquina(), 500);
      }
    }
  }

  reiniciar(){
    var celdas = document.getElementsByClassName("celda");
      for (let index = 0; index < celdas.length; index++) {
        
          celdas[index].setAttribute("value",'');
          
        }
    this.casilleros = new Array(9);
    
  }
  
  empate():boolean{
    let retorno = true;
    for (let index = 0; index < this.casilleros.length; index++) {
      if(!this.casilleros[index]){
        retorno = false;
        break;
      }
    }
    return retorno;
  }
  
  juegaMaquina(){
    console.log("JUEGA MAQUINA");
    
    let disponible = false;
    let numCasillero:number = 0;
    while(!disponible){
      numCasillero = Math.floor(Math.random() * 9 + 0);
      if(!this.casilleros[numCasillero]){
        disponible = true;
      }
    }
    var fichaMaquina = "O";
    this.casilleros[numCasillero] = fichaMaquina;
    var celdas = document.getElementsByClassName("celda");
      for (let index = 0; index < celdas.length; index++) {
        if(index == numCasillero){
          celdas[index].setAttribute("value",fichaMaquina.toUpperCase());
          break;
        }
        
      }

      if(this.gano(fichaMaquina)){
        console.log("GANA LA MAQUINA");
        this.contadorDerrotas++;
        this.puntajes.derrotas = this.contadorDerrotas.toString();
        this.toastr.warning('UUUPSSS!!!!.:','UPSS, QUE PENA PERO PERDISTE..!',{
          timeOut: 2000
        });
        this.reiniciar();
      }else if(this.empate()){
        this.reiniciar();
      }
  } 

  gano(letra:string):boolean {
    
    if(this.casilleros[0] == letra && this.casilleros[1] == letra && this.casilleros[2] == letra) {
      return true;
    }
    if(this.casilleros[3] == letra && this.casilleros[4] == letra && this.casilleros[5] == letra) {
      return true;
    }
    if(this.casilleros[6] == letra && this.casilleros[7] == letra && this.casilleros[8] == letra) {
      return true;
    }

    if(this.casilleros[0] == letra && this.casilleros[3] == letra && this.casilleros[6] == letra) {
      return true;
    }
    if(this.casilleros[1] == letra && this.casilleros[4] == letra && this.casilleros[7] == letra) {
      return true;
    }
    if(this.casilleros[2] == letra && this.casilleros[5] == letra && this.casilleros[8] == letra) {
      return true;
    }

    if(this.casilleros[0] == letra && this.casilleros[4] == letra && this.casilleros[8] == letra) {
      return true;
    }
    if(this.casilleros[2] == letra && this.casilleros[4] == letra && this.casilleros[6] == letra) {
      return true;
    }
    return false;
  }

  eligeFicha(ficha:string){
    this.ficha = ficha;
  }
  inicializarPuntajes(){
    this.puntajes.derrotas = "0";
    this.puntajes.victorias = "0";
    this.puntajes.empate = "0";
  }
  getAll(){
    var lista = this.tatetiServicio.getAll().valueChanges({ idField: 'propertyId' })
     lista.subscribe(lista=>{
       for (var puntaje of lista) {
         this.puntajes.email = this.email;
         if(puntaje.email == this.puntajes.email) {
           this.puntajesVista = puntaje;
           this.tieneDatosCargados = true;
           this.id = puntaje.propertyId;
           break;
         }
       }
     });       
  }
  guardar(){
    console.log(this.tieneDatosCargados);
    
    if(!this.tieneDatosCargados){
    
      this.tatetiServicio.create(this.puntajes);
      console.log("guardar");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus partidas están guardadas',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      
      this.puntajes.victorias = (+(+this.puntajes.victorias) +(+this.puntajesVista.victorias)).toString();
      this.puntajes.derrotas = (+(+this.puntajes.derrotas) +(+this.puntajesVista.derrotas)).toString();
      this.puntajes.empate = (+(+this.puntajes.empate) +(+this.puntajesVista.empate)).toString();
      console.log(this.puntajes);
      console.log(this.puntajes);
      console.log(this.puntajes);
      this.tatetiServicio.update(this.id,this.puntajes).then((e)=>{
        console.log("se modifico" + e);
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus partidas están guardadas',
        showConfirmButton: false,
        timer: 1500
      });
    }
    
    this.inicializarPuntajes();
  }
  mostrar(){
   if(!this.tieneDatosCargados)
   {
     this.puntajesVista = new Puntajes();
     this.puntajesVista.derrotas = "";
     this.puntajesVista.email = "";
     this.puntajesVista.empate = "";
     this.puntajesVista.victorias = "";
   }
   
      Swal.fire({
        title: '<strong>Partidas</strong>',
        icon: 'info',
        html:
        '<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th><th scope="col">Derrotas</th><th scope="col">Empates</th></tr></thead><tbody><tr><th scope="row">'+this.puntajesVista.email+'</th><td>'+this.puntajesVista.victorias+'</td><td>'+this.puntajesVista.derrotas+'</td><td>'+this.puntajesVista.empate+'</td></tr>',
      });
    
  }
}
