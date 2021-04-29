import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

   comenzar:boolean = false;
  casilleros = new Array(9);
  ficha :string = "X";

  constructor(private toastr:ToastrService) {
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
        console.log("GANASTE");
        this.toastr.success('GANASTE QUE BIENN!!!!.:','SOS UN GROSO..!',{
          timeOut:2000
        });
        this.reiniciar();
      }else if(this.empate()){

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
}
