import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  filmes: Filme[] = [];
  valorInput: string = "";
  tipoLista: string = "";
  tipoTexto: string = "";
  page: number = 1;

  constructor(private filmeService: FilmeService, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.CarregarFilmes();
  }

  private CarregarFilmes() {

    this.route.paramMap.subscribe((params) => {
      const tipo = params.get('tipo');

      if (tipo == "emAlta") {
        this.GerarListaEmAlta(this.page.toString());

      } else if (tipo == "melhores") {
        this.GerarListaMelhores(this.page.toString());

      }
      else {
        this.Pesquisar(tipo);

      }

    });
  }

  Pesquisar(tipo: string | null): any {

    this.tipoLista = "Resultados para: " + tipo,

      this.filmeService.Pesquisar(tipo, this.page.toString()).subscribe((filmes) => {

        this.filmes = filmes;

      });
  }

  GerarListaMelhores(pagina: string): any {
    this.tipoLista = "Melhores Filmes"
    this.tipoTexto = "Descubra os filmes mais aclamados pelo público, aqueles que receberam as melhores avaliações e classificações. Prepare-se para uma jornada cinematográfica repleta de histórias emocionantes e performances inesquecíveis."
    this.filmeService.PesquisarListaMelhores(pagina).subscribe((filmes) => {
      this.filmes = filmes;

    });
  }

  GerarListaEmAlta(pagina: string): any {
    this.tipoLista = "Filmes em Alta!"
    this.tipoTexto = "Fique por dentro dos filmes que estão dominando as telas no momento. Explore as produções mais recentes e populares que estão conquistando o coração dos espectadores. Não perca as tendências cinematográficas!"
    this.filmeService.PesquisarListaEmAlta(pagina).subscribe((filmes) => {
      this.filmes = filmes;

    });

  }

  CarregarPagina(paginaAlterada: number) {
    this.page = (paginaAlterada),
      this.CarregarFilmes()
  }


}
