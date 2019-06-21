import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedashComponent } from './pokedash/pokedash.component';
import { FormsModule } from '@angular/forms';
import { PokesearchComponent } from './pokesearch/pokesearch.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { PokespriteComponent } from './pokesprite/pokesprite.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokedashComponent,
    PokesearchComponent,
    PokespriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
