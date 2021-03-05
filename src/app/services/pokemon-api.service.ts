import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http:HttpClient) { }

  // ?offset=20&limit=20
  getPokemonList():Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonDetail(name:string):Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }

}
