import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/clases/mensaje';
import { AuthService } from 'src/app/services/auth.service';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  mensaje:Mensaje = new Mensaje();
  email:string = "";
  repetido:string = "";
  constructor(private router:Router,private authservice:AuthService,private mensajeService:MensajesService) { 
  }

  ngOnInit(): void {
  }
  EnviarMensaje()
  {
    console.log(this.mensaje.pw);
    console.log(this.repetido);
    
    
    if(this.mensaje.pw == this.repetido)
    {
      this.mensajeService.create(this.mensaje).then(()=>{
        console.log("Mensaje enviado");
      })
      this.authservice.crearUsuario(this.mensaje.correo,this.mensaje.pw).then(()=>{
        this.router.navigate(['/home']);
      }).catch(err =>{
        alert(err);
      });
    }
    else
    {
      alert("Error las pw no coinciden");
    }
  }


}
