import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import { ToastrService } from 'ngx-toastr';
import { Puntajes } from '../../../clases/puntajes';
import Swal from 'sweetalert2';
import {TatetiService} from '../../../services/tateti.service';
@Component({
  selector: 'app-piedra-papelo-tijera',
  templateUrl: './piedra-papelo-tijera.component.html',
  styleUrls: ['./piedra-papelo-tijera.component.css']
})
export class PiedraPapeloTijeraComponent implements OnInit {
    contadorVitorias:number = 0;
    contadorDerrotas:number = 0;
    contadorEmpates: number = 0;
    puntajes!:Puntajes;
    puntajesVista!:Puntajes;
    id: string = "";
    ver:any
    tieneDatosCargados: boolean = false;
    email:any;
  
  
  constructor(private cambiarmensajereal:MensajesRealtimeService,private toastr:ToastrService,private tatetiServicio : TatetiService)
  {
    this.tatetiServicio.dbPath = "/piedrapapeltijera";
    this.cambiarmensajereal.dbPath = "/MensajesPiedraPapelTijera";
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
   ROCK = "rock";
   PAPER = "paper";
   SCISSORS = "scissors";
   variante:any;
  resultText:any;
  aca:any;
  aca2:any;
  
   TIE:number = 0;
   WIN:number = 1;
   LOST:number = 2;
  
  isPlaying:boolean = false;
  
  clickpiedra()
  {
    this.play(this.ROCK);
  }
clickpapel()
{
    this.play(this.PAPER);
}
clicktijera()
{
    this.play(this.SCISSORS);
}


 play(userOption:string) {
    if(this.isPlaying) return;

    this.isPlaying = true;

    this.aca = "../../../../assets/imagenes/" + userOption + ".svg";

    this.resultText = "Chossing!";

    const interval = setInterval(()=>{
        const machineOption = this.calcMachineOption();
        this.aca2 = "../../../../assets/imagenes/" + machineOption + ".svg";
    }, 200);

    setTimeout( () => {

        clearInterval(interval);

        const machineOption = this.calcMachineOption();
        const result = this.calcResult(userOption, machineOption);

        this.aca2= "../../../../assets/imagenes/" + machineOption + ".svg";

        switch (result) {
            case this.TIE:
                this.contadorEmpates++;
                this.puntajes.empate = this.contadorEmpates.toString();
                this.variante =  "EMPATASTE!!";
                this.toastr.warning('CASIIIIIII AHI NOMAS....):','VAMOS, TU PUEDES CASI LE GANASSSS!',{
                    timeOut:3000
                });
                break;
            case this.WIN:
                this.contadorVitorias++;
                this.puntajes.victorias = this.contadorVitorias.toString();
                this.variante= "GANASTE!!";
                this.toastr.success('GANASTE SOS UN CRACK!!.:)','VAMOS, GENIOOOOOOOOOO!!!!!!!!!!!',{
                    timeOut:3000
                });
                break;
            case this.LOST:
                this.contadorDerrotas++;
                this.puntajes.derrotas = this.contadorDerrotas.toString();
                this.variante = "PERDISTE!!"
                this.toastr.error('UPSSSSSSSSS! QUE LASTIMA PERO PERDISTE.):','SEGUI PRACTICANDO MASS',{
                    timeOut:3000
                });
                break;
        }
        this.isPlaying = false;
    }, 2000);
}

 calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return this.ROCK;
        case 1:
            return this.PAPER;
        case 2:
            return this.SCISSORS;
    }
    return "";
}

 calcResult(userOption:any, machineOption:any) {
    if (userOption === machineOption) {
        return this.TIE;

    } else if (userOption === this.ROCK) {

        if (machineOption === this.PAPER) return this.LOST;
        if (machineOption === this.SCISSORS) return this.WIN;

    } else if (userOption === this.PAPER) {

        if (machineOption === this.SCISSORS) return this.LOST;
        if (machineOption === this.ROCK) return this.WIN;

    } else if (userOption === this.SCISSORS) {

        if (machineOption === this.ROCK) return this.LOST;
        if (machineOption === this.PAPER) return this.WIN;

    }
    return "";
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
      this.tatetiServicio.update(this.id,this.puntajes);
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
      this.puntajesVista.derrotas = "0";
      this.puntajesVista.email = "0";
      this.puntajesVista.empate = "0";
      this.puntajesVista.victorias = "0";
    }
    
   
    if(this.puntajesVista.email != undefined)
    {
        Swal.fire({
            title: '<strong>Partidas</strong>',
            icon: 'info',
            html:
            '<table class="table"><thead><tr><th scope="col">Jugador</th><th scope="col">Victorias</th><th scope="col">Derrotas</th><th scope="col">Empates</th></tr></thead><tbody><tr><th scope="row">'+this.puntajesVista.email+'</th><td>'+this.puntajesVista.victorias+'</td><td>'+this.puntajesVista.derrotas+'</td><td>'+this.puntajesVista.empate+'</td></tr>',
          });
    }
     
    
  }

}
