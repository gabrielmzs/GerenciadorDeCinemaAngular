import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { ListaComponent } from './shared/lista/lista.component';
import { PaginacaoComponent } from './shared/paginacao/paginacao.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmeDetalhesComponent } from './view/filme-detalhes/filme-detalhes.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaComponent,
    PaginacaoComponent,
    CardFilmeComponent,
    FilmeDetalhesComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
