import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './shared/lista/lista.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { HomeComponent } from './view/home/home.component';
import { FilmeDetalhesComponent } from './view/filme-detalhes/filme-detalhes.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'view/home',
    pathMatch: 'full',
  },
  {
    path: 'view/home',
    component: HomeComponent,
  },
  {
    path: 'view/filme-detalhes/:id',
    component: FilmeDetalhesComponent,
  },

  {
    path: 'shared/lista',
    component: ListaComponent,
  },

  {
    path: 'shared/card-filme',
    component: CardFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
