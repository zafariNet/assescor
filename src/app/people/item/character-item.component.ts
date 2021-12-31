import { Component, Injector, Input } from "@angular/core";
import { BaseComponent } from "src/app/base.component";
import { Character } from "../character.model";


@Component({
    selector: '[character-item]',
    templateUrl: './character-item.component.html'
})
export class CharacterItemComponent extends BaseComponent {
    @Input('character') character: Character | undefined;
    @Input('imageName') imageName:string |undefined;
    
    constructor(injector : Injector) {
        super(injector);
        
    }
}