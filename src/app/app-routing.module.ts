import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent } from '../app/components/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from '../app/components/pokemon-detail/pokemon-detail.component';
const routes: Routes = [
  {path:'', component:PokemonListComponent},
  {path:'pokemon/detail', component:PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
