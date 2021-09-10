import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  l:boolean = false;
  statea:boolean = false;
  stateb:boolean = false;
  statec:boolean = false;
  stated:boolean = false;
  statee:boolean = false;
  statef:boolean = false;
  stateg:boolean = false;
  stateh:boolean = false;
  statei:boolean = false;
  statej:boolean = false;
  statek:boolean = false;
  statel:boolean = false;
  statem:boolean = false;
  staten:boolean = false;
  stateo:boolean = false;
  statep:boolean = false;
  stateq:boolean = false;
  stater:boolean = false;
  states:boolean = false;
  statet:boolean = false;
  stateu:boolean = false;
  statev:boolean = false;
  statew:boolean = false;
  statex:boolean = false;
  statey:boolean = false;
  statez:boolean = false;

  contadorLetras:number = 0;
  notermino:boolean = true;
  data:any= new Array();
  corroborar:boolean = false;
  aux:string = '';
  aux2!:string;
  aux3:string;;
  i:any;
  contador:number;
  guardad:string = '';
  aux2normal:string;
  varnueva:string = '';
  flag:boolean = false;
  cadenita:string = '';
  vectorterminado:any = new Array();
  az:any;
  CuantasPalabrasHay:number;

  constructor() {
    this.CuantasPalabrasHay = 10;
    this.harcodear();
    console.log(this.data);
    this.aux2normal = '';
    this.aux3 = '';
    this.aux2 = '';
    this.contador = 0;
    this.az = Math.floor(Math.random() * (this.CuantasPalabrasHay - 0) + 0);
    this.aux = this.data[this.az];
    console.log(this.data);
    
    console.log(this.aux);
     this.sinc().then((e:any)=>
     {
       this.aux2 = this.aux.replace(this.aux,this.aux3);
       console.log(this.aux2);
     })
   }

  ngOnInit(): void {
  }
  buscarletraymodificarla(letra:any)
  {
    this.cadenita = '';
    this.corroborar = false;
    if(this.flag == false)
    {
      this.flag = true;
      for (let index = 0; index < this.aux.length; index++) 
      {
        if(this.aux[index] == letra)
        {
          this.contadorLetras++;
          this.varnueva = this.varnueva + letra;
          this.corroborar  = true;
        }
        else
        {
          this.varnueva = this.varnueva + "_";
        }
       }
       for(let index = 0; index < this.varnueva.length; index++)
       {
         this.cadenita =this.cadenita + this.varnueva[index] + " ";
       }
       if(this.corroborar == false)
       {
         this.contador ++;
       }
     }
     else
     {
      for (let index = 0; index < this.aux.length; index++) 
      {
        if(this.aux[index] == letra)
        {
          this.contadorLetras++;
          this.corroborar = true;
          const d = [...this.varnueva];
          d[index] = letra;
          this.varnueva = d.join();
          this.varnueva = this.varnueva.replace(/,/g, "");
          console.log(this.varnueva);
        }
       }

       for(let index = 0; index < this.varnueva.length; index++)
       {
         this.cadenita =this.cadenita + this.varnueva[index] + " ";
       }
       console.log(this.contadorLetras);
       if(this.contadorLetras == this.aux.length)
       {
        this.habilitarLetras();
        this.data.splice(this.az,1);
        this.CuantasPalabrasHay = this.CuantasPalabrasHay -1;
        this.contadorLetras = 0;
        this.contador = 0;
        this.flag = false;
        this.varnueva = '';
        this.aux = '';
        this.aux2normal = '';
        this.aux3 = '';
        this.aux2 = '';
        this.contador = 0;
        if(this.CuantasPalabrasHay == 0)
        {
          Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'se terminó el juego',
          })
          this.notermino = false;
        }
        else
        {
          this.az = Math.floor(Math.random() * (this.CuantasPalabrasHay - 0) + 0);
          this.aux = this.data[this.az];
          this.sinc().then((e:any)=>
           {
            console.log(this.aux);
            this.aux2 = this.aux.replace(this.aux,this.aux3);
            console.log(this.aux2);
           });

        }
       
       }
       else if(this.corroborar == false)
       {
         this.contador ++;   
         if(this.contador == 6)
         {
          this.habilitarLetras();
          this.data.splice(this.az,1);
          this.CuantasPalabrasHay = this.CuantasPalabrasHay -1;
          console.log(this.CuantasPalabrasHay);
          if(this.CuantasPalabrasHay == 0)
          {
            this.notermino = false;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'se terminaron las oportunidades',
            })
          }   
          else 
          {
            this.contador  = 0;
            this.flag = false;
            this.varnueva = '';
            this.aux = '';
            this.aux2normal = '';
            this.aux3 = '';
            this.aux2 = '';
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'PERDISTE!!!',
            })
            this.az = Math.floor(Math.random() * (this.CuantasPalabrasHay - 0) + 0);
            this.aux = this.data[this.az];
            this.sinc().then((e:any)=>
             {
              console.log(this.aux);
              this.aux2 = this.aux.replace(this.aux,this.aux3);
              console.log(this.aux2);
             });
           }
          }
         
       }
     }
    // if(this.flag == false)
    // {
    //   for (let index = 0; index < this.data[0].length; index++) {
    //     if(this.aux[index] == letra)
    //     {
    //       this.varnueva = this.varnueva + ' ' + letra;
    //     }
    //     else
    //     {
    //       this.varnueva = this.varnueva + ' _'
    //     }
    //   }
    //   this.flag = true;
    // }
  }
  sinc()
  {
   
    return new Promise((resolve,reject)=>
    {
      for (let index = 0; index < this.data[this.az].length; index++) {
        this.aux3 = this.aux3 + "_ ";
      }

      resolve(this.aux3);
    });
  }
  click(date:string)
  {
    switch (date) {
        case 'A':
              this.statea = true;
              this.buscarletraymodificarla('A');
              this.aux2 = this.cadenita;
        break;
        case 'B':
              this.stateb = true;
              this.buscarletraymodificarla('B');
              this.aux2 = this.cadenita;
        break;
        case 'C':
              this.statec = true;
              this.buscarletraymodificarla('C');
              this.aux2 = this.cadenita;
        break;
        case 'D':
              this.stated = true;
              this.buscarletraymodificarla('D');
              this.aux2 = this.cadenita;
        break;
        case 'E':
              this.statee = true;
              this.buscarletraymodificarla('E');
              this.aux2 = this.cadenita;
        break;
        case 'F':
              this.statef= true;
              this.buscarletraymodificarla('F');
              this.aux2 = this.cadenita;
        break;
        case 'G':
              this.stateg = true;
              this.buscarletraymodificarla('G');
              this.aux2 = this.cadenita;
        break;
        case 'H':
              this.stateh = true; 
              this.buscarletraymodificarla('H');
              this.aux2 = this.cadenita;
        break;
        case 'I':
              this.statei = true;
              this.buscarletraymodificarla('I');
              this.aux2 = this.cadenita;
        break;
        case 'J':
              this.statej = true;
              this.buscarletraymodificarla('J');
              this.aux2 = this.cadenita;
        break;
        case 'K':
              this.statek = true;
              this.buscarletraymodificarla('K');
              this.aux2 = this.cadenita;
        break;
        case 'L':
              this.statel = true;
              this.buscarletraymodificarla('L');
              this.aux2 = this.cadenita;
        break;
        case 'M': 
              this.statem = true;
              this.buscarletraymodificarla('M');
              this.aux2 = this.cadenita;
        break;
        case 'N':
              this.staten = true;
              this.buscarletraymodificarla('N');
              this.aux2 = this.cadenita;
        break;
        case 'Ñ':
              this.l = true;
              this.buscarletraymodificarla('Ñ');
              this.aux2 = this.cadenita;
        break;
        case 'O':
              this.stateo = true;
              this.buscarletraymodificarla('O');
              this.aux2 = this.cadenita;
        break;
        case 'P':
              this.statep = true;
              this.buscarletraymodificarla('P');
              this.aux2 = this.cadenita;
        break;
        case 'Q':
              this.stateq= true;
              this.buscarletraymodificarla('Q');
              this.aux2 = this.cadenita;
        break;
        case 'R':
              this.stater = true;
              this.buscarletraymodificarla('R');
              this.aux2 = this.cadenita;
        break;
        case 'S':
              this.states = true;
              this.buscarletraymodificarla('S');
              this.aux2 = this.cadenita;
        break;
        case 'T':
              this.statet = true;
              this.buscarletraymodificarla('T');
              this.aux2 = this.cadenita;
        break;
        case 'U':
              this.stateu = true;
              this.buscarletraymodificarla('U');
              this.aux2 = this.cadenita;
        break;
        case 'V':
              this.statev = true;
              this.buscarletraymodificarla('V');
              this.aux2 = this.cadenita;
        break;
        case 'W':
              this.statew = true;
              this.buscarletraymodificarla('W');
              this.aux2 = this.cadenita;
        break;
        case 'X':
              this.statex = true;
              this.buscarletraymodificarla('X');
              this.aux2 = this.cadenita;
        break;
        case 'Y':
              this.statey = true;
              this.buscarletraymodificarla('Y');
              this.aux2 = this.cadenita;
        break;
        case 'Z':
              this.statez = true;
              this.buscarletraymodificarla('Z');
              this.aux2 = this.cadenita;
          break;
      default:
        break;
    }
  }
  harcodear()
  {
    this.data.push('HELADO','SISTEMA','CELULAR','COMPUTADORA','TABLERO','PERRO','TECHO','PLATO','LLUVIA','FERRARI');
  }
  habilitarLetras()
  {
    this.statea = false;
    this.stateb = false;
    this.statec = false;
    this.stated = false;
    this.statee = false;
    this.statef = false;
    this.stateg = false;
    this.stateh = false;
    this.statei = false;
    this.statej = false;
    this.statek = false;
    this.statel = false;
    this.statem = false;
    this.staten = false;
    this.l = false;
    this.stateo = false;
    this.statep = false;
    this.stateq = false;
    this.stater = false;
    this.states = false;
    this.statet = false;
    this.stateu = false;
    this.statev = false;
    this.statew = false;
    this.statex = false;
    this.statey = false;
    this.statez = false;
}
}
