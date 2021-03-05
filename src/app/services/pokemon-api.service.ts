import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http:HttpClient) { }

  getPokemonList(param:any):Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=' + param.offset + '&limit='+ param.limit);
  }

  getPokemonDetail(name:string):Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }

}
