import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private a:AngularFireAuth) { 
  }
  login(email:string,password:string)
  {
    return new Promise((resolve,rejected)=>{
      this.a.signInWithEmailAndPassword(email,password).then(user =>{
        resolve(user);
    }).catch(err => rejected(err));
   })
  }
  crearUsuario(email:string,password:string)
  {
    return new Promise((resolve,rejected)=>{
      this.a.createUserWithEmailAndPassword(email,password).then(user=>{
        resolve(user);
      }).catch(err => rejected(err));
    })
  }
}
