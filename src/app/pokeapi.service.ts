import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private _baseUrl: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  private _spriteUrl: string = "https://pokeapi.co/api/v2/pokemon/";
  
  constructor(private http: HttpClient) { }

    getPokemon(): Observable<Pokemon[]>{
      return this.http.get<Pokemon[]>(this._baseUrl); 
    }

    getSprite(name: String): Observable<Pokemon>{
      return this.http.get<Pokemon>(this._spriteUrl + name)
    }
}
