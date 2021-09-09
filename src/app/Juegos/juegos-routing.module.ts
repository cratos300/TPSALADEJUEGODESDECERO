import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Preguntados } from '../clases/preguntados';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { JuegopropioComponent } from './page/juegopropio/juegopropio.component';
import { MayorMenorComponent } from './page/mayor-menor/mayor-menor.component';
import { PiedraPapeloTijeraComponent } from './page/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  { path: 'piedrapapeltijera', component: PiedraPapeloTijeraComponent },
  { path: 'tateti', component: TatetiComponent},
  { path: 'preguntados', component:PreguntadosComponent},
  { path: 'adivina', component:JuegopropioComponent},
  { path: 'mayorymenor', component:MayorMenorComponent},
  { path: 'ahorcado', component:AhorcadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
