import { Observable, filter, map, tap } from "rxjs";
import { Filme } from "../models/filme";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Artista } from "../models/artista";


@Injectable({
    providedIn: 'root',
})

export class FilmeService {

    chave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjYzMTRmODdjYzAzZWIzOGQ5M2FlNzNhN2EwODVlYSIsInN1YiI6IjY0Zjc3OTFlNGNjYzUwMDEzODhjZjMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KVSgGIzzpgGgi7p12FG2DBh8yT76qWE8_ITI8L6UBdw';


    constructor(private http: HttpClient) {

    }

    PesquisarListaEmAlta(): Observable<Filme[]> {

        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';

        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(
            map(res => res.results),
            map(objetos => this.mapearLista(objetos)),


        );

    }

    pesquisarPorId(id: string): Observable<Filme> {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=pt-BR';

        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(


            map(obj => this.mapearFilme(obj)),


        );
    }

    private obterHeaderAutorizacao() {

        return {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${this.chave}`,
            },
        }
    }


    mapearLista(obj: any[]): Filme[] {

        return obj.map(obj => {
            return {

                id: obj.id,
                nomePt: obj.title,
                nomeOriginal: obj.original_title,
                generos: ['', ''],
                sinopse: obj.overview,
                posterUrl: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
                videoUrl: "https://www.youtube.com/embed/",
                anoLancamento: obj.release_date,
                diretor: "",
                elenco: []

            }

        })

    }

    mapearFilme(obj: any): Filme {

        const nomesDosGeneros = obj.genres.map((genero: any) => genero.name);


        // const elenco =  this.pesquisarElenco(obj.id);

        // const link =  this.pequisarVideo(obj.id);

        // console.log(link);
        // let key = "";
        // if (link == undefined) {
        //     key = "https://www.youtube.com";
        // }
        // else {
        //     key = link.key as string;

        // }

        return {
            id: obj.id,
            nomePt: obj.title,
            nomeOriginal: obj.original_title,
            generos: nomesDosGeneros,
            sinopse: obj.overview,
            posterUrl: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
            videoUrl: "https://www.youtube.com/embed/",
            anoLancamento: obj.release_date,
            diretor: "",
            elenco: []
        }
    }

    pesquisarDiretor(id: any): Observable<Artista> {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`;

        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(
            map(res => res.cast),
            // tap(obj => console.log(obj)),
            // map(obj => this.mapearDiretor(obj)),
            tap(obj => console.log(obj)),
            map(artistas => artistas.sort(this.comparar)),
            tap(obj => console.log(obj))

        );


    }

    comparar(a: Artista, b: Artista) {

        if (a.id < b.id) {
            return -1
        }
        else if (a.id > b.id) {
            return 1
        }
        else {
            return 0
        }

    }

    mapearDiretor(obj: any[]): Artista {
        return obj.find(d => d.department === "Directing") as Artista;

    }








    // async mapearFilme(obj: any): Promise<Filme> {

    //     const nomesDosGeneros = obj.genres.map((genero: any) => genero.name);

    //     const diretor = await this.pesquisarDiretor(obj.id);
    //     const elenco = await this.pesquisarElenco(obj.id);

    //     const link = await this.pequisarVideo(obj.id);
    //     console.log(link);
    //     let key = "";
    //     if (link == undefined) {
    //         key = "https://www.youtube.com";
    //     }
    //     else {
    //         key = link.key as string;

    //     }


    //     return {

    //         id: obj.id,
    //         nomePt: obj.title,
    //         nomeOriginal: obj.original_title,
    //         generos: nomesDosGeneros,
    //         sinopse: obj.overview,
    //         posterUrl: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
    //         videoUrl: "https://www.youtube.com/embed/" + key,
    //         anoLancamento: obj.release_date,
    //         diretor: diretor,
    //         elenco: elenco,

    //     }
    // }
    // async pesquisarDiretor(id: any): Promise<any> {
    //     const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`;

    //     const response = await fetch(url, this.obterHeaderAutorizacao());
    //     const data = await response.json();

    //     let diretor = null;
    //     for (const crewMember of data.crew) {
    //         if (crewMember.department === "Directing") {
    //             diretor = crewMember.name;
    //             break;
    //         }
    //     }

    //     return diretor as string;
    // }

    // async pesquisarElenco(id: any): Promise<any[]> {

    //     const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`;

    //     const response = await fetch(url, this.obterHeaderAutorizacao());
    //     const data = await response.json();

    //     if (data.cast && data.cast.length >= 10) {
    //         return data.cast.slice(0, 10).map((membro: any) => membro.name);
    //     } else {
    //         console.log("Não há informações suficientes no elenco.");
    //         return [];
    //     }
    // }




    // async mapearLista(obj: any): Promise<Filme> {
    //     // console.log(obj)

    //     return {

    //         id: obj.id,
    //         nomePt: obj.title,
    //         nomeOriginal: obj.original_title,
    //         generos: ['', ''],
    //         sinopse: obj.overview,
    //         posterUrl: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
    //         videoUrl: "https://www.youtube.com/embed/",
    //         anoLancamento: obj.release_date,
    //         diretor: "",
    //         elenco: []

    //     }
    // }



    // pequisarVideo(id: any): Promise<any> {
    //     const url = 'https://api.themoviedb.org/3/movie/' + id + '/videos?language=pt-BR';

    //     return fetch(url, this.obterHeaderAutorizacao())
    //         .then(res => res.json())
    //         .then(data => {
    //             return data.results[data.results.length - 1] as string;
    //         });







    // private mapearListaFilme(objetos: any[]): any {
    //     const filmes = objetos.map(obj => this.mapearLista(obj))

    //     return Promise.all(filmes);

    // }






}
