import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
import {Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  grande : any = "";
  
  constructor(private data:AuthService, public router:Router,private mensajeService:MensajesService) { }

  ngOnInit(): void {
  }
  logear()
  {
    this.data.login(this.email,this.password).then( res => {
        this.router.navigate(['/home']);
    }).catch(err => alert("Los datos ingresados son in correctos o no existe el usuario"));

    this.grande = this.mensajeService.getAll();
    console.log(this.grande);
    
    
  }
}
