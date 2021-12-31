import { Component, Inject, Injectable, Injector, OnInit } from "@angular/core";
import { BaseComponent } from "src/app/base.component";
import { Character } from "../character.model";


@Component({
    selector: 'character-list',
    templateUrl: './characters-list.component.html'
})
export class CharacterListComponent extends BaseComponent implements OnInit {

    characters: Character[] = [];
    constructor(injector: Injector) {
        super(injector);

    }
    ngOnInit(): void {
        this.resourcseService.getCharacters().subscribe(response => {
            this.characters=response;
            this.dataLoaded = true;
        })
    }
}