import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../../services/mensajes.service';
import {Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/clases/mensaje';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  grande : any = "";
  unUsuario: Mensaje = new Mensaje();
  unUsuario2: Mensaje = new Mensaje();
  guardar!:string;

  
  constructor(private data:AuthService, public router:Router,private mensajeService:MensajesService) { }

  ngOnInit(): void {
  }
  logear()
  {
    this.data.login(this.email,this.password).then((res:any) => {
      this.unUsuario.correo = res.user.email;
      this.unUsuario.pw = res.user.uid;
      this.guardar =  JSON.stringify(this.unUsuario);
      localStorage.setItem("usuario",this.guardar);
        this.data.boolean = true;
        this.router.navigate(['/home']);
    }).catch(err => alert("Los datos ingresados son in correctos o no existe el usuario"));

    this.grande = this.mensajeService.getAll();
    console.log(this.grande);
  }
  Hardcodear()
  {
    this.email = "hernan@test.com";
    this.password = "123456";
  }

}
