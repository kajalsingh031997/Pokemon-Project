import { PokemonApiService } from '../../services/pokemon-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


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

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

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

  pagination(num:number){
    this.offset = num;
    this.getPokemonList();
  }

}
