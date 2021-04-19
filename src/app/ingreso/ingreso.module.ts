import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { RegistrarComponent } from './page/registrar/registrar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule
  ]
})
export class IngresoModule { }
