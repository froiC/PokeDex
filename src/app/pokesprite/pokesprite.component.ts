import { Component, OnInit, Input } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Sprite } from '../pokemon';

@Component({
  selector: 'app-pokesprite',
  templateUrl: './pokesprite.component.html',
  styleUrls: ['./pokesprite.component.css']
})
export class PokespriteComponent implements OnInit {

  @Input ('pokenameUrl') concatName : string;
  
  constructor(private pokeapiService: PokeapiService) { }
    
    pokeSprite: Sprite;

  ngOnInit() {
    this.getSprite();
  }

  getSprite(): void {
    this.pokeapiService.getSprite(this.concatName)
      .subscribe(pokemon => this.pokeSprite = pokemon.sprites);
  }

}
