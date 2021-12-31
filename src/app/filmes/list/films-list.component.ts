import { Component, Inject, Injectable, Injector, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { BaseComponent } from "src/app/base.component";
import { Film } from "../film.model";

@Component({
    selector: 'filmes-list',
    templateUrl: './films-list.component.html'
})
export class FilmsListComponent extends BaseComponent implements OnInit {

    filmes: Film[] = [];
    constructor(injector: Injector) {
        super(injector);
        
    }
    ngOnInit(): void {
        this.resourcseService.getFilms().subscribe(response => {
            this.dataLoaded = true;
            this.filmes = response;
        })
    }
}