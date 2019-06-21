import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokedash',
  templateUrl: './pokedash.component.html',
  styleUrls: ['./pokedash.component.css']
})
export class PokedashComponent implements OnInit {

  pokemon: Pokemon[];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokeapiService.getPokemon()
      .subscribe(pokemon => this.pokemon = pokemon);
  }

}
