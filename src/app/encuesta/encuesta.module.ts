import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestaRoutingModule } from './encuesta-routing.module';
import {EncuestaComponent} from '../encuesta/encuesta/encuesta.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [EncuestaComponent],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    
  ]
})
export class EncuestaModule { }
