import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {

  pokemonItems : Array<any> = [];
  
  constructor(private pokemonapi: PokemonApiService) {}

  ngOnInit() {
    this.pokemonapi.getPokemonList().subscribe((res: any) => {
      this.pokemonItems = res.results;
    });
  }

}
