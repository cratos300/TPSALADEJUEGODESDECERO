import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { ChatCompletoComponent } from '../componentes/chat-completo/chat-completo.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Firestore2Component } from '../componentes/firestore2/firestore2.component';
import { Listado2Component } from '../componentes/listado2/listado2.component';
import { Chatcompleto2Component } from '../componentes/chatcompleto2/chatcompleto2.component';
import { PiedraPapeloTijeraComponent } from './page/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { JuegopropioComponent } from './page/juegopropio/juegopropio.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { MayorMenorComponent } from './page/mayor-menor/mayor-menor.component';







@NgModule({
  declarations: [
    PiedraPapeloTijeraComponent,
    TatetiComponent,
     Firestore2Component,
     Listado2Component,
     Chatcompleto2Component,
     JuegopropioComponent,
     PreguntadosComponent,
     MayorMenorComponent
    ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
    
    
  ]
})
export class JuegosModule { }
