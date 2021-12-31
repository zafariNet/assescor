import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Type } from "@angular/core";
import { map } from "rxjs";
import { Film } from "../filmes/film.model";
import { Character } from "../people/character.model";
import { Planet } from "../planets/planet.model";
@Injectable({
    providedIn: 'root'
})
export class ResourcseService {
    baseUrl: string = ''
    resource: string = ''

    constructor(private http: HttpClient) {
        this.baseUrl = 'https://swapi.dev/api/';

    }

    getFilms() {
        return this.http.get<Film[]>(this.baseUrl + 'films').pipe(map((res: any) => 
        res['results']));
    }
    getFilmById(id: number) {
        return this.http.get<Film>(this.baseUrl + 'films/' + id).pipe(
            map((res: any) => res)
        );
    }

    getPlanets() {
        return this.http.get<Planet[]>(this.baseUrl + 'planets').pipe(map((res: any) => 
        res['results']));
    }
    getPlanetsById(id: number) {
        return this.http.get<Planet>(this.baseUrl + 'planets/' + id).pipe(
            map((res: any) => res)
        );
    }
    getCharacters() {
        return this.http.get<Character[]>(this.baseUrl + 'people').pipe(map((res: any) => 
        res['results']));
    }
    getCharacterById(id: number) {
        return this.http.get<Character>(this.baseUrl + 'people/' + id).pipe(
            map((res: any) => res)
        );
    }

}