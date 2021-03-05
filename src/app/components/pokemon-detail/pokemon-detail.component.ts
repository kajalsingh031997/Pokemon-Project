import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.less']
})
export class PokemonDetailComponent implements OnInit {

  pokemonName : string = "";
  pokemonImg: string = "";
  pokemonHeight : string = "";
  pokemonWeight : string = "";
  pokemonMoves : Array<any> = [];
  pokemonStats : Array<any> = [];
  pokemonAbilities : Array<any> = [];
  constructor(private pokemonapi : PokemonApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( 
      params => { 
        this.pokemonName = params['name'];
      } 
    ) 
    this.getPokemonItemDetail(this.pokemonName);
  }

  getPokemonItemDetail(name:any){
    this.pokemonapi.getPokemonDetail(name).subscribe((data)=>{
      this.pokemonHeight = data.height;
      this.pokemonWeight = data.weight;
      this.pokemonImg = data.sprites.other.dream_world.front_default;
      this.pokemonMoves = data.moves;
      this.pokemonStats = data.stats;
      this.pokemonAbilities = data.abilities;

    });
  }

}
