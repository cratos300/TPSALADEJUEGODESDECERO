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
import { ChatfirestoreComponent } from './componentes/chatfirestore/chatfirestore.component';
import { ListadoRealtimeComponent } from './componentes/listado-realtime/listado-realtime.component';
import { TatetiComponent } from './Juegos/page/tateti/tateti.component';
import { PiedraPapeloTijeraComponent } from './Juegos/page/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { ChatCompletoComponent } from './componentes/chat-completo/chat-completo.component';
import { Listado2Component } from './componentes/listado2/listado2.component';
import { Chatcompleto2Component } from './componentes/chatcompleto2/chatcompleto2.component';
import  {  ToastrModule  }  from  'ngx-toastr' ;







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
    ChatfirestoreComponent,
    ListadoRealtimeComponent,
    ChatCompletoComponent
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true
    })
    
    
  ],
  providers: [AuthService,MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
