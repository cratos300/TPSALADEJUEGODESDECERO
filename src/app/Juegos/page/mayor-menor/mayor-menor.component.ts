import { Component, OnInit } from '@angular/core';
import { Medir } from 'src/app/clases/medir';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {
  az : number;
  foto1:Medir;
  foto2:Medir;
  foto3:Medir;
  foto4:Medir;
  foto5:Medir;
  foto6:Medir;
  foto7:Medir;
  foto8:Medir;
  foto9:Medir;
  foto10:Medir;
  data:any= new Array();
  CuantosNumerosHay:number = 10;
  aux:Medir;
  constructor() 
  {
    this.az = 0;
    this.aux = new Medir();
    this.foto1 = new Medir();
    this.foto2 = new Medir();
    this.foto3 = new Medir();
    this.foto4 = new Medir();
    this.foto5 = new Medir();
    this.foto6 = new Medir();
    this.foto7 = new Medir();
    this.foto8 = new Medir();
    this.foto9 = new Medir();
    this.foto10 = new Medir();
    this.harcodear();
    this.data.push(this.foto1,this.foto2,this.foto3,this.foto4,this.foto5,this.foto6,this.foto7,this.foto8,this.foto9,this.foto10);
    this.aux = this.data[0];
    this.data.splice(0,1);
    this.CuantosNumerosHay = this.CuantosNumerosHay-1;
  }
  ngOnInit(): void {
  }
  click(recibido:any)
  {
    console.log(recibido,this.aux.respuestaCorrecta);

    if(recibido == this.aux.respuestaCorrecta)
    {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Correcto',
        showConfirmButton: false,
        timer: 700
      })
    }
    else
    {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Incorrecto',
        showConfirmButton: false,
        timer: 700
      })
    }
    this.az = Math.floor(Math.random() * (this.CuantosNumerosHay - 0) + 0);
    this.aux = this.data[this.az];
    this.data.splice(this.az,1);
    this.CuantosNumerosHay = this.CuantosNumerosHay-1;
    console.log(this.aux);
  }

  harcodear()
  {
    this.foto1.foto1 = "https://www.terra.cl/u/fotografias/m/2021/4/27/f768x1-10421_10548_5050.jpg";
    this.foto1.foto2 = "https://telocuentoyque.com.ar/wp-content/uploads/2020/08/NICOLE-NEUMAN-PASO-A-PASO-IG-01-834x1024-1.jpg";
    this.foto1.nombrefoto1 = "Pampita";
    this.foto1.nombrefoto2 = "Nicole Neuman";
    this.foto1.respuestaCorrecta = "foto2";
    this.foto2.foto1 = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g";
    this.foto2.foto2 = "https://as01.epimg.net/argentina/imagenes/2021/06/30/futbol/1625020543_519251_1625020631_noticia_normal_recorte1.jpg";
    this.foto2.nombrefoto1 = "Leonel Messi";
    this.foto2.nombrefoto2 = "Papu Gomez";
    this.foto2.respuestaCorrecta = "foto1";
    this.foto3.foto1 = "https://images.clarin.com/2021/07/10/dibu-martinez-uno-de-los___iw_SNzKZP_340x340__1.jpg";
    this.foto3.foto2 = "https://www.diarioshow.com/__export/1602369886891/sites/cronica/img/2020/10/10/la_mole_moli_denunciado_una_vez_mxs_por_violencia_de_gxnero_crop1602368526492.jpeg_792575817.jpeg";
    this.foto3.nombrefoto1 = "Divu Martinez";
    this.foto3.nombrefoto2 = "Mole Moli";
    this.foto3.respuestaCorrecta = "foto2";
    this.foto4.foto1 = "https://yt3.ggpht.com/ytc/AKedOLTZu8vzhgn177k8e3nouYEfOegYH7D6C2gndqDGmg=s900-c-k-c0x00ffffff-no-rj";
    this.foto4.foto2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHbqhLJQe3WncVYJhdP4bySTuy55OpSyP3w&usqp=CAU";
    this.foto4.nombrefoto1 = "Paulo Londra";
    this.foto4.nombrefoto2 = "Bad Bunny";
    this.foto4.respuestaCorrecta = "foto1";
    this.foto5.foto1 = "https://s.hs-data.com/bilder/spieler/gross/168136.jpg";
    this.foto5.foto2 = "https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GRTGIMRQMYYTINBYMI2DCYLFGY.jpg";
    this.foto5.nombrefoto1 = "Franco Armani";
    this.foto5.nombrefoto2 = "Esteban Andrada";
    this.foto5.respuestaCorrecta = "foto2";
    this.foto6.foto1 = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Marley_Evento_HBO_2015.jpg";
    this.foto6.foto2 = "https://media.ambito.com/p/44cb982b4493633947fd78c5dd93c150/adjuntos/239/imagenes/037/142/0037142920/1200x900/smart/tinelli-conductorjpg.jpg";
    this.foto6.nombrefoto1 = "Marley";
    this.foto6.nombrefoto2 = "Marcelo Tinelli";
    this.foto6.respuestaCorrecta = "foto1";
    this.foto7.foto1 = "https://resizer.glanacion.com/resizer/Pg_avCYcVxiPw7V5oWpEpNxRBEg=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QJYGJHZ2XJF7LHNLO3FZIQV7SU.jpg";
    this.foto7.foto2 = "https://bodysize.org/wp-content/uploads/2018/06/Florencia-Pena-480x640.jpg";
    this.foto7.nombrefoto1 = "Julieta Prandi";
    this.foto7.nombrefoto2 = "Florencia Peña";
    this.foto7.respuestaCorrecta = "foto1";
    this.foto8.foto1 = "https://bodysize.org/wp-content/uploads/2020/12/Ezequiel-Lavezzi-300x400.jpg";
    this.foto8.foto2 = "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSLcDRY3FsR4s_3MPJrA0R4uZKMg20TW_6Z6kLF9GICxdrtAly-PR7SvYXIG6EM";
    this.foto8.nombrefoto1 = "Pocho Lavezzi";
    this.foto8.nombrefoto2 = "Higuain";
    this.foto8.respuestaCorrecta = "foto2";
    this.foto9.foto1 = "https://upload.wikimedia.org/wikipedia/commons/1/1d/Shakira_for_VOGUE_in_2021_2.png";
    this.foto9.foto2 = "https://spoiler.bolavip.com/__export/1616939141277/sites/bolavip/img/2021/03/28/lady_gaga_crop1616939140193.jpg_423682103.jpg";
    this.foto9.nombrefoto1  = "Shakira";
    this.foto9.nombrefoto2 = "Lady Gaga";
    this.foto9.respuestaCorrecta = "foto1";
    this.foto10.foto1= "https://cdn-pro.elsalvador.com/wp-content/uploads/2018/07/Angelina-Jolie.jpg";
    this.foto10.foto2 = "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTdRnn0zstKMT7Jp5OmYl2mqND-Be86kUjbEQup-BhQ5iaYO5xr7MsvhbLBWdrI";
    this.foto10.nombrefoto1 = "Angelina Jolie";
    this.foto10.nombrefoto2 = "Jennifer Aniston";
    this.foto10.respuestaCorrecta = "foto1";
  }
}
