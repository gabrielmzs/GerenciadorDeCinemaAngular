import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css']
})
export class FilmeDetalhesComponent implements OnInit {

  @Input() filme: any = {
    id: 0,
    nomePt: '',
    nomeOriginal: '',
    generos: [],
    sinopse: '',
    posterUrl: '',
    videoUrl: '',
    anoLancamento: '',
    diretor: '',
    elenco: [],
  };


  constructor(private filmeService: FilmeService, private route: ActivatedRoute) {



  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') as string;

    this.filmeService.pesquisarPorId(id).subscribe((filme) => {
      this.filme = filme;

    });
    this.filmeService.pesquisarDiretor(id).subscribe((diretor) => {
      this.filme.diretor = diretor.nome;

    });

  }

}
