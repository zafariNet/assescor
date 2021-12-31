import { NgModule, OnInit } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FilmsListComponent } from "./list/films-list.component";
import { FilmsRoutingModule } from "./films-routing.module";
import { FilmItemComponent } from "./item/film-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { FilmDetailComponent } from "./detail/film-detail.component";
import { AddFilmComponent } from "./add/add-film.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[FilmsListComponent,FilmItemComponent,FilmDetailComponent,AddFilmComponent],
    imports: [FilmsRoutingModule,CommonModule,ReactiveFormsModule],

    exports: []
  })
export class FilmsModule {

}