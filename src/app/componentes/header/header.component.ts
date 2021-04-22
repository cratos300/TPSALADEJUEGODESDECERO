import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cito:string = "hernan";
  resultado:any;
  ver:any;
  constructor(public auth:AuthService,public router:Router,private a:AngularFireAuth) { 
    this.resultado = localStorage.getItem("usuario");
    if(this.resultado != null)
    {
      this.auth.boolean = true;
      this.ver = localStorage.getItem("usuario");
      this.ver = JSON.parse(this.ver);
      this.auth.data = this.ver.correo;
      this.router.navigate(['home']);
    }
   }

  ngOnInit(): void {
  }
  ancla()
  {
    document.getElementById("visit")?.scrollIntoView(); 
  }
  deslogear()
  {
    this.auth.deslogear();
    this.router.navigate(['']);
  }
  }


