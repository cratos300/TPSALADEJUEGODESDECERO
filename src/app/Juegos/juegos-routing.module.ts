import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjedrezComponent } from './page/ajedrez/ajedrez.component';
import { MemotestComponent } from './page/memotest/memotest.component';
import { PiedraPapeloTijeraComponent } from './page/piedra-papelo-tijera/piedra-papelo-tijera.component';
import { TatetiComponent } from './page/tateti/tateti.component';

const routes: Routes = [
  { path: 'piedrapapeltijera', component: PiedraPapeloTijeraComponent },
  { path: 'tateti', component: TatetiComponent},
  { path: 'memotest', component: MemotestComponent},
  { path: 'ajedrez', component: AjedrezComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
