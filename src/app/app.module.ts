import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ingreso/page/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErroresComponent } from './componentes/errores/errores.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistrarComponent } from './ingreso/page/registrar/registrar.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule} from '@angular/fire';
import { firebase } from 'src/environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {MensajesService} from './services/mensajes.service';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DeslogearComponent } from './componentes/deslogear/deslogear.component';





@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ErroresComponent,
    InicioComponent,
    DeslogearComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    
  ],
  providers: [AuthService,MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
