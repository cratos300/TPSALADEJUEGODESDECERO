import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroresComponent } from './componentes/errores/errores.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import {QuienSoyComponent} from './componentes/quien-soy/quien-soy.component';
import {RegistrarComponent} from './componentes/registrar/registrar.component';
import {InicioComponent} from './componentes/inicio/inicio.component';

const routes: Routes = [
{path:'',component: InicioComponent},
{path:'login',component: LoginComponent},
{path:'quiensoy',component: QuienSoyComponent},
{path:'home',component: HomeComponent},
{path:'registrar',component: RegistrarComponent},
{path:'**',component: ErroresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
