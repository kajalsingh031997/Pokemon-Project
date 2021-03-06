import { PokemonApiService } from '../../services/pokemon-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<any>();
  offset : number = 0;
  limit : number = 10;

  constructor(private pokemonapi: PokemonApiService) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getParams(){
    var param = {
      offset : this.offset,
      limit : this.limit
    }
    return param;
  }

  getPokemonList() {
    this.pokemonapi.getPokemonList(this.getParams()).subscribe((res: any) => {
      this.dataSource = res.results;
    });
  }

  nextPagination(){
    this.offset = this.offset + 1;
    this.getPokemonList();
  }

  previousPagination(){
    this.offset = this.offset - 1;
    this.getPokemonList();
  }

}
