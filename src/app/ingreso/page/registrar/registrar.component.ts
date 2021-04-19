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
  guardado:any;
  unUsuario: Mensaje = new Mensaje();
  guardar!:string;

  constructor(private router:Router,private authservice:AuthService,private mensajeService:MensajesService) { 
  }

  ngOnInit(): void {
  }
  EnviarMensaje()
  {
    if(this.mensaje.pw == this.repetido)
    {
      this.authservice.crearUsuario(this.mensaje.correo,this.mensaje.pw).then((data:any)=>{
        this.mensaje.pw = data.user.uid;
        this.guardado = this.mensajeService.create(this.mensaje);
        if(this.guardado != "")
        {
          this.unUsuario.correo = data.user.email;
          this.unUsuario.pw = data.user.uid;
          this.guardar =  JSON.stringify(this.unUsuario);
          localStorage.setItem("usuario",this.guardar);
          this.authservice.boolean = true;
          this.router.navigate(['/home']);
        }
      }).catch(err =>{
        alert(err);
      })
    }
    else
    {
      alert("Error las pw no coinciden");
    }
  }


}
