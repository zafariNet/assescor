import { Component, Injector, Input } from "@angular/core";
import { BaseComponent } from "src/app/base.component";
import { Film } from "../film.model";

@Component({
    selector: '[film-item]',
    templateUrl: './film-item.component.html'
})
export class FilmItemComponent extends BaseComponent {
    @Input('film') film: Film | undefined;
    @Input('imageName') imageName:string |undefined;
    
    constructor(injector : Injector) {
        super(injector);
        
    }
}