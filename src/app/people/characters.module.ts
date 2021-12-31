import { NgModule, OnInit } from "@angular/core";

import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { CharacterListComponent } from "./list/characters-list.component";
import { CharacterItemComponent } from "./item/character-item.component";
import { CharacterDetailComponent } from "./detail/character-detail.component";
import { CharactersRoutingModule } from "./characters-routing.module";

@NgModule({
    declarations:[CharacterListComponent,CharacterItemComponent,CharacterDetailComponent],
    imports: [CharactersRoutingModule,CommonModule],

    exports: []
  })
export class CharactersModule {

}