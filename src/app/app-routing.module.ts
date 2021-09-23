import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroresComponent } from './componentes/errores/errores.component';
import { HomeComponent } from './componentes/home/home.component';
import {QuienSoyComponent} from './componentes/quien-soy/quien-soy.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import { DeslogearComponent } from './componentes/deslogear/deslogear.component';

const routes: Routes = [
{path:'',component: InicioComponent},
{path:'deslogear',component:DeslogearComponent},
{path:'quiensoy',component: QuienSoyComponent},
{path:'home',component: HomeComponent},
{path: 'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
{path: 'Juegos', loadChildren: () => import('./Juegos/juegos.module').then(m => m.JuegosModule) },
{path: 'encuesta', loadChildren: () => import('./encuesta/encuesta.module').then(m => m.EncuestaModule) },
{path:'**',component: ErroresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
