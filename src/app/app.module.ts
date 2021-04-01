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
import { AuthService } from './services/auth.service';
import { AngularFireModule} from '@angular/fire';
import { firebase } from 'src/environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ErroresComponent,
    RegistrarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
