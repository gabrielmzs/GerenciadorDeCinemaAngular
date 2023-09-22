import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  filmes: Filme[] = [];


  constructor(private filmeService: FilmeService) {

  }


  ngOnInit(): void {
    this.GerarListaEmAlta()
  }

  GerarListaEmAlta(): any {
    this.filmeService.PesquisarListaEmAlta().subscribe((filmes) => {
      this.filmes = filmes;
      console.log(this.filmes);
    });

  }

}
