import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/clases/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesRealtimeService } from 'src/app/services/mensajes-realtime.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  email:string = "";
  resultado:any;
  bol : boolean = true;
  data:any;
  boton:boolean = false;
  constructor(private router:Router,private auth:AuthService, private cambiarmensajereal:MensajesRealtimeService) { 
    this.cambiarmensajereal.dbPath = "/MensajesGeneral"
    this.data = localStorage.getItem("usuario");
    


    if(this.data != null)
    {
      this.data = localStorage.getItem("usuario");
      this.data = JSON.parse(this.data);
      this.auth.data = this.data.correo;
    }
  }

  ngOnInit(): void {
  }
  viendo():boolean
  {
    this.resultado = localStorage.getItem("usuario");
    if(this.resultado == null)
    {
      this.router.navigate(['']);
    }
    return this.bol;
  }
  funcc()
  {
    this.boton = (!(this.boton));
  }

}
