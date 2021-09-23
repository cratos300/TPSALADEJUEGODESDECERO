import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http.service";
import Swal from 'sweetalert2';
import { Puntajesss } from "../../../clases/puntajesss";
import { AuthService } from "../../../services/auth.service";
import { MemotestService } from "../../../services/memotest.service";
import { Preguntados } from 'src/app/clases/preguntados';


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  espaniol:any;
  ingles :any;
  frances :any;
  cambiarIdioma:boolean = false;
  esp:boolean = false;
  ing:boolean = false;
  fra:boolean = false;
  var2:string = 'blanchedalmond';
  victorias:number = 0;
  empatadas:number = 0;
  perdidas:number = 0;
  errores:number = 0;
  contador:number = 0;
  tira:boolean = true;
  bandera : boolean = false;
  boleano:boolean = false;
  respuestacorrecta:any = "";
  boton1:string = "";
  boton2:string = "";
  boton3:string = "";
  boton4:string = "";
  boton5:string = "";
  boton6:string = "";
  pregunta:string = "";
  click:number = 0;
  data:any= new Array();
  pregunta1!:Preguntados;
  pregunta2!:Preguntados;
  pregunta3!:Preguntados;
  pregunta4!:Preguntados;
  pregunta5!:Preguntados;
  pregunta6!:Preguntados;
  pregunta7!:Preguntados;
  pregunta8!:Preguntados;
  pregunta9!:Preguntados;
  pregunta10!:Preguntados;
  azar!:number;
  az!:number;
  objeto:any;
  CuatosNumerosHay!:number;
  arr :any[] = []
  array : any;
  constructor(private apiExterna:HttpService) {
  
    this.esp = true;
    this.harcodeardatos();
    this.array = apiExterna.obtenerImagenes().subscribe((e:any)=>{
      console.log(e);
      e.forEach((element:any) => {
        if(element.name == 'Spain')
        {
          this.espaniol = element.flag;
          console.log(element.flag);
        }
        else if(element.name == 'Canada')
        {
          this.ingles = element.flag;
        }
        else if(element.name == 'France')
        {
          this.frances = element.flag;
        }
      });
      this.var2 = this.espaniol;
    })
    alert("PARA UN MEJOR USO DE LA APLICACIÓN LAS RESPUESTAS LAS DEJE EN ESPAÑOL SIEMPRE. SOLO CAMBIE LAS PREGUNTAS EN LOS DISTINTOS IDIOMAS");
   }

  ngOnInit(): void {
  }
  enter( data:any )
  {
    this.boleano = true;
    if(data == "1")
    {
      if(this.boton1 == this.respuestacorrecta)
      {
        this.contador++;
      }
      else
      {
        this.errores++;
      }
    }
    if(data == "2")
    {
      if(this.boton2 == this.respuestacorrecta)
      {
        this.contador++;
      }
      else
      {
        this.errores++;
      }
    }
    if(data == "3")
    {
      if(this.boton3 == this.respuestacorrecta)
      {
        this.contador++;
      }
      else
      {
        this.errores++;
      }
    }
    if(data == "4")
    {
      if(this.boton4 == this.respuestacorrecta)
      {
        this.contador++;
      }
      else
      {
        this.errores++;
      }
    }
    if(data == "5")
    {
      if(this.boton5 == this.respuestacorrecta)
      {
        this.contador++;
      }
      else
      {
        this.errores++;
      }
    }
    if(data == "6")
    {
      if(this.boton6 == this.respuestacorrecta)
      {
        this.contador++;
      }
      else
      {
        this.errores++;
      }
    }
    
    this.Recorreryeliminar(this.pregunta);
    this.func();
  }
  dos()
  {
    this.errores = 0;
    this.contador = 0;
    this.harcodeardatos();
    this.boleano = true;
  }
  botonIdioma()
  {
    this.cambiarIdioma = true;
  }
  func()
  {
    console.log(this.fra);
    this.tira = false;
    if(this.data.length == 0)
    {
      this.boleano = false;
      if(this.contador  == 5)
      {
        this.empatadas++;
      }
      else if(this.contador < 5)
      {
        this.perdidas++;
      }
      else
      {
        this.victorias++;
      }
      
    }
    else
    {
      this.boleano = true;
    }
    
    this.azar = Math.floor(Math.random() * (this.CuatosNumerosHay - 0) + 0);
    this.az = Math.floor(Math.random() * (this.CuatosNumerosHay - 0) + 0);
    if(this.esp)
    {
      this.pregunta = this.data[this.azar].pregunta;
    }
    else if(this.fra)
    {
      this.pregunta = this.data[this.azar].preguntaFrances;
    }
    else if(this.ing)
    {
      this.pregunta = this.data[this.azar].preguntaIngles;
    }
    
    this.respuestacorrecta = this.data[this.azar].RespuestaVerdadera;
    if(this.az == 1)
    {
      if(this.esp)
      {
        this.boton1 = this.data[this.azar].RespuestaVerdadera;
        this.boton2 = this.data[this.azar].RespuestaFalsa1;
        this.boton3 = this.data[this.azar].RespuestaFalsa2;
        this.boton4 = this.data[this.azar].RespuestaFalsa3;
        this.boton5 = this.data[this.azar].Respuestafalsa4;
        this.boton6 = this.data[this.azar].Respuestafalsa5;
      }
    }
    else if(this.az == 2)
    {
      this.boton1 = this.data[this.azar].RespuestaFalsa1;
      this.boton2 =  this.data[this.azar].RespuestaVerdadera;
      this.boton3 = this.data[this.azar].RespuestaFalsa2;
      this.boton4 = this.data[this.azar].RespuestaFalsa3;
      this.boton5 = this.data[this.azar].Respuestafalsa4;
      this.boton6 = this.data[this.azar].Respuestafalsa5;
    }
    else if(this.az== 3)
    {
      this.boton1 = this.data[this.azar].RespuestaFalsa1;
      this.boton2 =  this.data[this.azar].RespuestaFalsa2;
      this.boton3 = this.data[this.azar].RespuestaVerdadera;
      this.boton4 = this.data[this.azar].RespuestaFalsa3;
      this.boton5 = this.data[this.azar].Respuestafalsa4;
      this.boton6 = this.data[this.azar].Respuestafalsa5;
    }
    else if(this.az == 4)
    {
      this.boton1 = this.data[this.azar].RespuestaFalsa1;
      this.boton2 =  this.data[this.azar].RespuestaFalsa2;
      this.boton3 = this.data[this.azar].RespuestaFalsa3;
      this.boton4 =  this.data[this.azar].RespuestaVerdadera;
      this.boton5 = this.data[this.azar].Respuestafalsa4;
      this.boton6 = this.data[this.azar].Respuestafalsa5;
    }
    else if(this.az == 5)
    {
      this.boton1 = this.data[this.azar].RespuestaFalsa1;
      this.boton2 =  this.data[this.azar].RespuestaFalsa2;
      this.boton3 = this.data[this.azar].RespuestaFalsa3;
      this.boton4 =  this.data[this.azar].Respuestafalsa4;
      this.boton5 = this.data[this.azar].RespuestaVerdadera;
      this.boton6 = this.data[this.azar].Respuestafalsa5;
    }
    else if(this.az == 6)
    {
      this.boton1 = this.data[this.azar].RespuestaFalsa1;
      this.boton2 =  this.data[this.azar].RespuestaFalsa2;
      this.boton3 = this.data[this.azar].RespuestaFalsa3;
      this.boton4 =  this.data[this.azar].Respuestafalsa4;
      this.boton5 = this.data[this.azar].Respuestafalsa5;
      this.boton6 =  this.data[this.azar].RespuestaVerdadera;
    }
    else 
    {
      this.boton1 = this.data[this.azar].RespuestaFalsa1;
      this.boton2 =  this.data[this.azar].RespuestaFalsa2;
      this.boton3 = this.data[this.azar].RespuestaFalsa3;
      this.boton4 =  this.data[this.azar].Respuestafalsa4;
      this.boton5 = this.data[this.azar].Respuestafalsa5;
      this.boton6 =  this.data[this.azar].RespuestaVerdadera;
    }


    
  }
  clickIdioma(data:string)
  {
    if(data == 'espaniol')
    {
      this.var2 = this.espaniol;
      if(this.fra)
      {
        console.log("si");
        this.data.forEach((es:any) => {
          if(es.preguntaFrances == this.pregunta)
          {
            this.pregunta = es.pregunta;
          }
        });
      }
      if(this.ing)
      {
        this.data.forEach((es:any) => {
          if(es.preguntaIngles == this.pregunta)
          {
            this.pregunta = es.pregunta;
          }
        });
      }
      this.esp = true;
      this.fra = false;
      this.ing = false;
    }
    if(data == 'ingles')
    {
      this.var2 = this.ingles;
      if(this.fra)
      {
        console.log("si");
        this.data.forEach((es:any) => {
          if(es.preguntaFrances == this.pregunta)
          {
            this.pregunta = es.preguntaIngles;
          }
        });
      }
      if(this.esp)
      {
        this.data.forEach((es:any) => {
          if(es.pregunta == this.pregunta)
          {
            this.pregunta = es.preguntaIngles;
          }
        });
      }
      this.esp = false;
      this.fra = false;
      this.ing = true;
    }
    if(data == 'frances')
    {
      this.var2 = this.frances;
      if(this.ing)
      {
        console.log("si");
        this.data.forEach((es:any) => {
          if(es.preguntaIngles == this.pregunta)
          {
            this.pregunta = es.preguntaFrances;
          }
        });
      }
      if(this.esp)
      {
        this.data.forEach((es:any) => {
          if(es.pregunta == this.pregunta)
          {
            this.pregunta = es.preguntaFrances;
          }
        });
      }
        this.esp = false;
        this.fra = true;
        this.ing = false;
    }
    console.log(this.fra);
  }
  Recorreryeliminar(pregunta:any)
  {
    if(this.frances)
    {
      for(let i = 0; i< this.data.length; i++)
     {
      if(this.data[i].preguntaFrances == pregunta)
      {
        this.data.splice(i,1);
        this.CuatosNumerosHay = this.CuatosNumerosHay-1;
      }
    }
    }
    if(this.ingles)
    {
      for(let i = 0; i< this.data.length; i++)
     {
      if(this.data[i].preguntaIngles == pregunta)
      {
        this.data.splice(i,1);
        this.CuatosNumerosHay = this.CuatosNumerosHay-1;
      }
    }
    }
    if(this.espaniol)
    {
      for(let i = 0; i< this.data.length; i++)
     {
      if(this.data[i].pregunta == pregunta)
      {
        this.data.splice(i,1);
        this.CuatosNumerosHay = this.CuatosNumerosHay-1;
      }
    }
    }
  }
  harcodeardatos()
  {

    this.CuatosNumerosHay = 10;
    this.pregunta1 = new Preguntados();
    this.pregunta2 = new Preguntados();
    this.pregunta3 = new Preguntados();
    this.pregunta4 = new Preguntados();
    this.pregunta5 = new Preguntados();
    this.pregunta6 = new Preguntados();
    this.pregunta7 = new Preguntados();
    this.pregunta8 = new Preguntados();
    this.pregunta9 = new Preguntados();
    this.pregunta10 = new Preguntados();
    
    this.pregunta1.pregunta = "¿Qué es un callback?";
    this.pregunta1.preguntaIngles = "What is a callback?";
    this.pregunta1.preguntaFrances = "qu'est-ce qu'un rappel";
    this.pregunta1.RespuestaFalsa1 = "Es una variable que es llamada dentro de un enumerado.";
    this.pregunta1.RespuestaVerdadera = "Es una referencia a una función que se ejecuta dentro de otra.";
    this.pregunta1.RespuestaFalsa2 = "Es un tipo de dato parecido al enum que se ejecuta dentro de una función.";
    this.pregunta1.RespuestaFalsa3 = "Es un lenguaje de programación";
    this.pregunta1.Respuestafalsa4 = "Es un lenguaje de programación compilado";
    this.pregunta1.Respuestafalsa5 = "Es un lenguaje de programacion interpretado";
    this.pregunta2.pregunta = "¿Qué es Angular en programación?";
    this.pregunta2.preguntaIngles = "what is a angular in programming";
    this.pregunta2.preguntaFrances = "Qu'est-ce qui est angulaire dans la programmation?";
    this.pregunta2.RespuestaFalsa1 = "Es una comida."
    this.pregunta2.RespuestaFalsa2 = "Es una libreria de javascript.";
    this.pregunta2.RespuestaFalsa3 = "Es un tipo de dato nulo";
    this.pregunta2.Respuestafalsa4 = "Es parecido al tipo de dato  DataTime";
    this.pregunta2.Respuestafalsa5 = "Es un color";
    this.pregunta2.RespuestaVerdadera = "Es un framework de javascript.";
    this.pregunta3.pregunta = "¿Qué es react en programación?";
    this.pregunta3.preguntaIngles = "What is React in programming?";
    this.pregunta3.preguntaFrances = "Qu'est-ce que React en programmation ?";
    this.pregunta3.RespuestaFalsa1 = "Es un framework de javascript.";
    this.pregunta3.RespuestaFalsa2 = "Es un enumerado en javascript.";
    this.pregunta3.RespuestaFalsa3 = "Es un boolean";
    this.pregunta3.Respuestafalsa4 = "Es una herramienta de css";
    this.pregunta3.Respuestafalsa5 = "Es una herramienta de bootstrap";
    this.pregunta3.RespuestaVerdadera = "Es una libreria de javascript.";
    this.pregunta4.pregunta = "¿Qué es MongoDB en programación?";
    this.pregunta4.preguntaIngles = "What is MongoDB in programming?";
    this.pregunta4.preguntaFrances = "Qu'est-ce que MongoDB en programmation ?";
    this.pregunta4.RespuestaFalsa1 = "Es una base de datos SQL."
    this.pregunta4.RespuestaFalsa2 = "No es una base de datos.";
    this.pregunta4.RespuestaFalsa3 = "Es una herramienta el lenguaje c";
    this.pregunta4.Respuestafalsa4 = "Es parecido a un entero";
    this.pregunta4.Respuestafalsa5 = "Es igual al string";
    this.pregunta4.RespuestaVerdadera = "Es una base de datos no SQL."
    this.pregunta5.pregunta = '¿Qué es VisualStudioCode en programación?';
    this.pregunta5.preguntaIngles = "What is VisualStudioCode in programming?";
    this.pregunta5.preguntaFrances = "Qu'est-ce que visualstudiocode en programmation ?"
    this.pregunta5.RespuestaVerdadera = 'Es un editor de codigos.';
    this.pregunta5.RespuestaFalsa1 = "Es una lenguaje de programación."
    this.pregunta5.RespuestaFalsa2 = "Es un tipo de mandarina.";
    this.pregunta5.RespuestaFalsa3 = "Se utiliza para editar imagenes";
    this.pregunta5.Respuestafalsa4 = "Se usa para editar videos";
    this.pregunta5.Respuestafalsa5 = "Es un bucle";
    this.pregunta6.pregunta = "¿Qué es un desarrollador Full Stack?";
    this.pregunta6.preguntaIngles = "What is a developer Full stack?"
    this.pregunta6.preguntaFrances = "Qu'est-ce qu'un développeur full stack";
    this.pregunta6.RespuestaVerdadera = "Se encarga tanto del backend como el frontend."
    this.pregunta6.RespuestaFalsa1 = "Se encarga exclusivamente del backend."
    this.pregunta6.RespuestaFalsa2 = "Se encarga exclusivamente del frontend.";
    this.pregunta6.RespuestaFalsa3 = "Es igual al  FOR";
    this.pregunta6.Respuestafalsa4 = "Es igual al  While";
    this.pregunta6.Respuestafalsa5 = "Es igual al Do while";
    this.pregunta7.pregunta = "La funcion conocida como 'sort'.";
    this.pregunta7.preguntaIngles = "The function known as sort";
    this.pregunta7.preguntaFrances = "la fonction dite de tri";
    this.pregunta7.RespuestaVerdadera = "Recibe un callback que determina el criterio de ordenamiento."
    this.pregunta7.RespuestaFalsa1 = "Transforma un entero a flotante.";
    this.pregunta7.RespuestaFalsa2 = "Transforma un flotante a entero.";
    this.pregunta7.RespuestaFalsa3 = "Es un lenguaje de programción"
    this.pregunta7.Respuestafalsa4 = "Es CSS3";
    this.pregunta7.Respuestafalsa5 = "Es para declarar espacio en memoria";
    this.pregunta8.pregunta = "¿Qué es Case Sensitive?";
    this.pregunta8.preguntaIngles = "What is a Case Sensitive?";
    this.pregunta8.preguntaFrances = "Qu'est-ce qui est sensible à la casse ?";
    this.pregunta8.RespuestaVerdadera = "Distingue mayuscula de miniscula.";
    this.pregunta8.RespuestaFalsa1 = "No distingue mayuscula de minuscula.";
    this.pregunta8.RespuestaFalsa2 = "Es todo mayuscula."
    this.pregunta8.RespuestaFalsa3 = "Es un char de tamaño fijo";
    this.pregunta8.Respuestafalsa4 = "Es entero de tamaño fijo";
    this.pregunta8.Respuestafalsa5 = "Es un tipo de dato double";
    this.pregunta9.pregunta = "El lenguaje de programación C";
    this.pregunta9.preguntaIngles = "the c programming language"
    this.pregunta9.preguntaFrances = "le langage de programmation c";
    this.pregunta9.RespuestaVerdadera = "Es un lenguaje de programación compilado"
    this.pregunta9.RespuestaFalsa1= "No es un lenguaje de programación";
    this.pregunta9.RespuestaFalsa2 = "Es un lenguaje de programacíon orientado a objectos";
    this.pregunta9.RespuestaFalsa3 = "Es un framework";
    this.pregunta9.Respuestafalsa4 = "Es una libreria de javascript";
    this.pregunta9.Respuestafalsa5 = "Es un tipo de dato";
    this.pregunta10.pregunta = "El lenguaje de programación c#";
    this.pregunta10.preguntaIngles = "the c programming language";
    this.pregunta10.preguntaFrances = "le langage de programmation c";
    this.pregunta10.RespuestaVerdadera = "Es un lenguaje de programacíon orientado a objectos";
    this.pregunta10.RespuestaFalsa1 = "Es solo para  el diseño web como bootstrap";
    this.pregunta10.RespuestaFalsa2 = "Es para mejorar el rendimiento del ide";
    this.pregunta10.RespuestaFalsa3 = "Es bootstrap mejorado";
    this.pregunta10.Respuestafalsa4 = "Es como Angular Material";
    this.pregunta10.Respuestafalsa5 = "Es un tipo de componente en Angular";
      this.data.push(this.pregunta1,this.pregunta2,this.pregunta3,this.pregunta4,this.pregunta5,this.pregunta6,this.pregunta7,this.pregunta8,this.pregunta9,this.pregunta10);
  }
}
