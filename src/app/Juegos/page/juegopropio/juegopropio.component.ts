import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http.service";
import Swal from 'sweetalert2';
import { Puntajesss } from "../../../clases/puntajesss";
import { AuthService } from "../../../services/auth.service";
import { MemotestService } from "../../../services/memotest.service";
import { Preguntados } from 'src/app/clases/preguntados';
import { ImagenDifuminada } from 'src/app/clases/imagen-difuminada';




@Component({
  selector: 'app-juegopropio',
  templateUrl: './juegopropio.component.html',
  styleUrls: ['./juegopropio.component.css']
})
export class JuegopropioComponent implements OnInit {
  es!:number;
  final:boolean = true;
  correcto1:boolean = true;
  az:any;
  CuatosNumerosHay:number = 10;
  imagennormal:boolean = false;
  aux:ImagenDifuminada;
  boleano:boolean = true;
  persona1:ImagenDifuminada;
  persona2:ImagenDifuminada;
  persona3:ImagenDifuminada;
  persona4:ImagenDifuminada;
  persona5:ImagenDifuminada;
  persona6:ImagenDifuminada;
  persona7:ImagenDifuminada;
  persona8:ImagenDifuminada;
  persona9:ImagenDifuminada;
  persona10:ImagenDifuminada;
  data:any= new Array();
  constructor() {
    this.persona1 = new ImagenDifuminada();
    this.persona2 = new ImagenDifuminada();
    this.persona3 = new ImagenDifuminada();
    this.persona4 = new ImagenDifuminada();
    this.persona5 = new ImagenDifuminada();
    this.persona6 = new ImagenDifuminada();
    this.persona7 = new ImagenDifuminada();
    this.persona8 = new ImagenDifuminada();
    this.persona9 = new ImagenDifuminada();
    this.persona10 = new ImagenDifuminada();

    this.aux = new ImagenDifuminada();
   }

  ngOnInit(): void {
  }
  Seleccionar(recibido:string)
  {
    this.boleano = false;
    if(recibido == 'espectaculo')
    {
      this.CuatosNumerosHay = 10;
      this.hardcodear('espectaculo');
      this.data.push(this.persona1,this.persona2,this.persona3,this.persona4,this.persona5,this.persona6,this.persona7,this.persona8,this.persona9,this.persona10);
      this.aux = this.data[0];
      this.data.splice(0,1);
      this.CuatosNumerosHay = this.CuatosNumerosHay-1;
    }
    else if(recibido == 'actores')
    {
      this.CuatosNumerosHay = 10;
      this.hardcodear('actores');
      this.data.push(this.persona1,this.persona2,this.persona3,this.persona4,this.persona5,this.persona6,this.persona7,this.persona8,this.persona9,this.persona10);
      this.aux = this.data[0];
      this.data.splice(0,1);
      this.CuatosNumerosHay = this.CuatosNumerosHay-1;
    }
    else
    {
      this.CuatosNumerosHay = 10;
      this.hardcodear('cantantes');
      this.data.push(this.persona1,this.persona2,this.persona3,this.persona4,this.persona5,this.persona6,this.persona7,this.persona8,this.persona9,this.persona10);
      this.aux = this.data[0];
      this.data.splice(0,1);
      this.CuatosNumerosHay = this.CuatosNumerosHay-1;
    }

  }
  apreto()
  {
    this.imagennormal = true;
    
  }
  siguiente()
  {
    this.es = Math.floor(Math.random() * (2 - 0) + 0);
    if(this.es == 0)
    {
      this.correcto1 = true;
    }
    if(this.es == 1)
    {
      this.correcto1 = false;
    }
    console.log(this.es);
    this.imagennormal = false;
    this.az = Math.floor(Math.random() * (this.CuatosNumerosHay - 0) + 0);
    this.aux = this.data[this.az];
    this.data.splice(this.az,1);
    this.CuatosNumerosHay = this.CuatosNumerosHay-1;
    if(this.CuatosNumerosHay == -1)
    {
      this.final = false;
    }
  }
  hardcodear(tipo:string)
  {
    if(tipo == 'espectaculo')
    {

      this.persona1.urlNormal = "https://www.newslinereport.com/online/nota_los-negocios-de-marcelo-tinelli.jpg";
      this.persona1.personacorrecta = "Marcelo Tinelli";
      this.persona1.personaincorrecta = "Jose Maria Listorti";
      this.persona2.urlNormal = "https://i2.wp.com/www.tiempodejujuy.com.ar/wp-content/uploads/2020/06/Noelia-MArzol.jpeg?fit=1280%2C717&ssl=1";
      this.persona2.personacorrecta = "Noelia Marzol";
      this.persona2.personaincorrecta = "Sol Pez";
      this.persona3.urlNormal = "https://www.laplata1.com/adjuntos/800/590057616855.jpg";
      this.persona3.personacorrecta = "Stefy Xipolitakis";
      this.persona3.personaincorrecta = "Vicky Xipolitakis";
      this.persona4.urlNormal = "https://pbs.twimg.com/profile_images/653558348273569792/joxg8DZD_400x400.png";
      this.persona4.personacorrecta = "Mauricio Macri";
      this.persona4.personaincorrecta = "Alberto Fernández";
      this.persona5.urlNormal = "https://resizer.glanacion.com/resizer/lerR_Qw9GCL1S-6J2nJV1Ui3JcA=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MP4XUL46P5HXZF45M4XM3GHQOY.jpg"
      this.persona5.personacorrecta = "Freddy Villarreal";
      this.persona5.personaincorrecta = "Abel Pintos";
      this.persona6.urlNormal = "https://resizer.glanacion.com/resizer/L_4UpXNVT1Zh9YYV3g36QSGy4ro=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/WDTVKGEPQRFBLAIUXX67NVCBQE.jpg"
      this.persona6.personacorrecta = "Bruce Willis";
      this.persona6.personaincorrecta = "Javier Mascherano";
      this.persona7.urlNormal = "https://tntsports.com.ar/__export/1626020215496/sites/tntsports/img/2021/07/11/00021639-02_crop1626020163265.jpg_423682103.jpg"
      this.persona7.personacorrecta = "Ángel Di María";
      this.persona7.personaincorrecta = "Neymar";
      this.persona8.urlNormal = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg";
      this.persona8.personacorrecta = "Messi";
      this.persona8.personaincorrecta = "Sergio Agüero"
      this.persona9.urlNormal = "https://m.media-amazon.com/images/M/MV5BZTczMmZjZmItYmVjMC00ODg5LTk0MjYtYTcwYTM1NTE2YTJiXkEyXkFqcGdeQXVyNjU0ODkwMTU@._V1_UY264_CR146,0,178,264_AL_.jpg"
      this.persona9.personacorrecta = "Sergio Lapegüe";
      this.persona9.personaincorrecta = "Martín Bossi";
      this.persona10.urlNormal = "https://eldiadehoy.net/wp-content/uploads/2018/07/guillermo-pelado-lopez-con-pelo.jpg";
      this.persona10.personacorrecta = "Pelado López";
      this.persona10.personaincorrecta = "Horacio Rodríguez Larreta";
    }
    else if(tipo == "actores")
    {
      this.persona1.urlNormal = "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/chino-darin-entrevista/138000545-2-esl-ES/Las-tribulaciones-de-Chino-Darin.jpg";
      this.persona1.personacorrecta = "Chino Darin";
      this.persona1.personaincorrecta = "Mariano Martínez";
      this.persona2.urlNormal = "https://www.entrelineas.info/media/cache/pub_news_details_large/media/i/b4c378c5289bece80f6ee6fe6af82ad2b04c8ce2.jpg";
      this.persona2.personacorrecta = "Rodrigo de la Serna";
      this.persona2.personaincorrecta = "Nicolás Cabré";
      this.persona3.urlNormal = "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LSM6YD6CQFEPDDE5ZNOX6AQQYA.jpg";
      this.persona3.personacorrecta = "Guillermo Francella";
      this.persona3.personaincorrecta = "Benjamin Vicuña";
      this.persona4.urlNormal = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Diego_Peretti_%28cropped%29.jpg"
      this.persona4.personacorrecta = "Diego Peretti";
      this.persona4.personaincorrecta = "Martín Seefeld";
      this.persona5.urlNormal = "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSmCMyBjsFIHOSGGArFW9gKj1vbrjcCNsq8FtWxtt4nYjAr_5NwrsNZYsQEVAaq";
      this.persona5.personacorrecta = "Juana Viale";
      this.persona5.personaincorrecta = "Ivana Nadal";
      this.persona6.urlNormal = "https://images.lavoz.com.ar/resizer/TVEUuw8iPtwmscGiVqHO4f6f6gI=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/5EXV35IKPREUZGMB6IPRWPSXXI.jpg";
      this.persona6.personacorrecta = "China Suárez";
      this.persona6.personaincorrecta = "Luisana Lopilato";
      this.persona7.urlNormal= "https://www.elciudadanoweb.com/wp-content/uploads/2020/08/sebastian-estevanez.jpg";
      this.persona7.personacorrecta = "Sebastián Estevanez";
      this.persona7.personaincorrecta = "Guido Kaczka";
      this.persona8.urlNormal = "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQwHyr_aSXwNgJ5CdCnI_8IK6UdQBkPOkq1vmtmLS84miTOf_AhsCGetZCWOJPl";
      this.persona8.personacorrecta = "Iván de Pineda";
      this.persona8.personaincorrecta = "Pachu Peña"; 
      this.persona9.urlNormal = "https://www.themoviedb.org/t/p/w235_and_h235_face/aOnHdowp5x8lLxAFVT7wgP7v5bn.jpg";
      this.persona9.personacorrecta = "Darío Lopilato";
      this.persona9.personaincorrecta = "Diego Topa";
      this.persona10.urlNormal = "https://media.urgente24.com/p/8fae0cfdc46a5552ddf89a269a09cc60/adjuntos/319/imagenes/002/470/0002470020/dario-barassiijpg.jpg";
      this.persona10.personacorrecta = "Darío Barassi";
      this.persona10.personaincorrecta = "Jorge Lanata";
    }
    else
    {
      this.persona1.urlNormal = "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQET8L4NPbFwAcsbJDQwd7mUP9ylKcibZgLxTZUH1Y7Wrjwk9k2DUGs25rd0tZO"
      this.persona1.personacorrecta = "Tini Stoessel";
      this.persona1.personaincorrecta = "Lali Espósito";
      this.persona2.urlNormal = "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQw9ZktPiq4cZG6YNDEb_bTD_C7QwmlgSPfpNNiilCVKUszpCsWFXoyrFrgqRZy";
      this.persona2.personacorrecta = "Ricado Arjona";
      this.persona2.personaincorrecta = "Ricardo Montaner";
      this.persona3.urlNormal = "https://www.pudahuel.cl/wp-content/uploads/2020/02/ab71f7b06423a1d50cdc5fa674ecdb8d-e1581951096537.png";
      this.persona3.personacorrecta = "Chayanne";
      this.persona3.personaincorrecta = "Carlos Rivera";
      this.persona4.urlNormal= "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTlm9bgta8n8J8l-mSrwRzeH5MgcWHTLZNnrYvixIL2ytyVRveQNxU9WAk5kvbK";
      this.persona4.personacorrecta = "Alejandro Sanz";
      this.persona4.personaincorrecta = "Luis Miguel";
      this.persona5.urlNormal = "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTeCLUvYOFQ6a54XPnILkumAzzZX7bsq_-UZeA_U838jxOMZjR8-2tGkvtG61m3";
      this.persona5.personacorrecta = "Marc Anthony";
      this.persona5.personaincorrecta = "Julio Iglesia";
      this.persona6.urlNormal = "https://yt3.ggpht.com/ytc/AKedOLQIf-vLkdTviS0dM7_-eV7yXpXfPkS8uyGlSM2F4A=s900-c-k-c0x00ffffff-no-rj";
      this.persona6.personacorrecta = "David Bisval";
      this.persona6.personaincorrecta = "Paulo Londra";
      this.persona7.urlNormal = "https://www.cmtv.com.ar/imagenes_artistas/247.jpg?El%20Puma%20Rodr%EDguez"
      this.persona7.personacorrecta = "Puma Rodriguez"
      this.persona7.personaincorrecta = "Gente de zona"
      this.persona8.urlNormal = "https://indiehoy.com/wp-content/uploads/2021/06/L-Gante.jpg";
      this.persona8.personacorrecta = "L-Gante";
      this.persona8.personaincorrecta = "DJ Memo (wachiturro)";
      this.persona9.urlNormal = "https://resizer.glanacion.com/resizer/TvrqvS12-y_KvqGgBpoiKNW0T6U=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7OBGXGFWQZHN7GCDFNJQTHBM2A.jpg"
      this.persona9.personacorrecta = "Karina La Princesita";
      this.persona9.personaincorrecta = "La bomba tucumana";
      this.persona10.urlNormal = "https://yt3.ggpht.com/ytc/AKedOLTiWVO3jKzbQ25zp9zCYXWdcXpcGPoVgLO0IPcw=s900-c-k-c0x00ffffff-no-rj"
      this.persona10.personacorrecta = "Los pimpinela";
      this.persona10.personaincorrecta = "La Oreja de Van Gogh";
      

      
  
      
      
    }
  }
  restart()
  {
    this.boleano = true;
    this.final = true;
  }
}
