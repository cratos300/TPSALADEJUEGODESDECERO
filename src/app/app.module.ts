import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErroresComponent } from './componentes/errores/errores.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ErroresComponent,
    RegistrarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
