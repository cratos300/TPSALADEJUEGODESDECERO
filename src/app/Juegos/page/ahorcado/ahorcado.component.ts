import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {


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

  constructor() {
    this.aux2normal = '';
    this.aux3 = '';
    this.aux2 = '';
    this.contador = 0;
    
    this.data.push("holanda","OTRO");
    this.aux = this.data[0];
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
    this.corroborar = false;
    if(this.flag == false)
    {
      this.flag = true;
      for (let index = 0; index < this.aux.length; index++) 
      {
        if(this.aux[index] == letra)
        {
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
          this.corroborar = true;
          const d = [...this.varnueva];
          d[index] = letra;
          this.varnueva = d.join();
          this.varnueva = this.varnueva.replace(/,/g, "");
          console.log(this.varnueva);
        }
       }
       this.cadenita = '';
       for(let index = 0; index < this.varnueva.length; index++)
       {
         this.cadenita =this.cadenita + this.varnueva[index] + " ";
       }
       if(this.corroborar == false)
       {
         this.contador ++;
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
      for (let index = 0; index < this.data[0].length; index++) {
        this.aux3 = this.aux3 + "_ ";
      }

      resolve(this.aux3);
    });
  }
  click(date:string)
  {
    switch (date) {
        case 'A':
              this.buscarletraymodificarla('a');
              this.aux2 = this.cadenita;
        break;
        case 'B':
          this.buscarletraymodificarla('b');
              this.aux2 = this.cadenita;
        break;
        case 'C':
          this.buscarletraymodificarla('c');
              this.aux2 = this.cadenita;
        break;
        case 'D':
          this.buscarletraymodificarla('d');
              this.aux2 = this.cadenita;
        break;
        case 'E':
          this.buscarletraymodificarla('e');
              this.aux2 = this.cadenita;
        break;
        case 'F':
          this.buscarletraymodificarla('f');
              this.aux2 = this.cadenita;
        break;
        case 'G':
          this.buscarletraymodificarla('g');
              this.aux2 = this.cadenita;
        break;
        case 'H':
          this.buscarletraymodificarla('h');
              this.aux2 = this.cadenita;
        break;
        case 'I':
          this.buscarletraymodificarla('i');
              this.aux2 = this.cadenita;
        break;
        case 'J':
          this.buscarletraymodificarla('j');
              this.aux2 = this.cadenita;
        break;
        case 'K':
          this.buscarletraymodificarla('k');
              this.aux2 = this.cadenita;
        break;
        case 'L':
          this.buscarletraymodificarla('l');
              this.aux2 = this.cadenita;
        break;
        case 'M': 
        this.buscarletraymodificarla('m');
              this.aux2 = this.cadenita;
        break;
        case 'N':
          this.buscarletraymodificarla('n');
              this.aux2 = this.cadenita;
        break;
        case 'Ñ':
          this.buscarletraymodificarla('ñ');
              this.aux2 = this.cadenita;
        break;
        case 'O':
          this.buscarletraymodificarla('o');
              this.aux2 = this.cadenita;
        break;
        case 'P':
          this.buscarletraymodificarla('p');
              this.aux2 = this.cadenita;
        break;
        case 'Q':
          this.buscarletraymodificarla('q');
              this.aux2 = this.cadenita;
        break;
        case 'R':
          this.buscarletraymodificarla('r');
              this.aux2 = this.cadenita;
        break;
        case 'S':
          this.buscarletraymodificarla('s');
              this.aux2 = this.cadenita;
        break;
        case 'T':
          this.buscarletraymodificarla('t');
              this.aux2 = this.cadenita;
        break;
        case 'U':
          this.buscarletraymodificarla('u');
              this.aux2 = this.cadenita;
        break;
        case 'V':
          this.buscarletraymodificarla('v');
              this.aux2 = this.cadenita;
        break;
        case 'W':
          this.buscarletraymodificarla('w');
              this.aux2 = this.cadenita;
        break;
        case 'X':
          this.buscarletraymodificarla('x');
              this.aux2 = this.cadenita;
        break;
        case 'Y':
          this.buscarletraymodificarla('y');
              this.aux2 = this.cadenita;
        break;
        case 'Z':
          this.buscarletraymodificarla('z');
              this.aux2 = this.cadenita;
          break;
      default:
        break;
    }
  }

}
