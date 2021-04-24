import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { MemotestComponent } from './page/memotest/memotest.component';
import { AjedrezComponent } from './page/ajedrez/ajedrez.component';
import { ChatCompletoComponent } from '../componentes/chat-completo/chat-completo.component';
import { FormsModule, NgModel } from '@angular/forms';
import { Firestore2Component } from '../componentes/firestore2/firestore2.component';
import { Listado2Component } from '../componentes/listado2/listado2.component';
import { Chatcompleto2Component } from '../componentes/chatcompleto2/chatcompleto2.component';
import { PiedraPapeloTijeraComponent } from './page/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { TatetiComponent } from './page/tateti/tateti.component';






@NgModule({
  declarations: [
    PiedraPapeloTijeraComponent,
    TatetiComponent,
    MemotestComponent,
     AjedrezComponent,
     Firestore2Component,
     Listado2Component,
     Chatcompleto2Component
    ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
    
    
  ]
})
export class JuegosModule { }
