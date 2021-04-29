import { Component, OnInit } from '@angular/core';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-piedra-papelo-tijera',
  templateUrl: './piedra-papelo-tijera.component.html',
  styleUrls: ['./piedra-papelo-tijera.component.css']
})
export class PiedraPapeloTijeraComponent implements OnInit {

  constructor(private cambiarmensajereal:MensajesRealtimeService,private toastr:ToastrService)
  {
    this.cambiarmensajereal.dbPath = "/MensajesPiedraPapelTijera";
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
                this.variante =  "EMPATASTE!!";
                this.toastr.warning('CASIIIIIII AHI NOMAS....):','VAMOS, TU PUEDES CASI LE GANASSSS!',{
                    timeOut:3000
                });
                break;
            case this.WIN:
                this.variante= "GANASTE!!";
                this.toastr.success('GANASTE SOS UN CRACK!!.:)','VAMOS, GENIOOOOOOOOOO!!!!!!!!!!!',{
                    timeOut:3000
                });
                break;
            case this.LOST:
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

}
