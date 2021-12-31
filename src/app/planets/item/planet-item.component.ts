import { Component, Injector, Input } from "@angular/core";
import { BaseComponent } from "src/app/base.component";
import { Planet } from "../planet.model";

@Component({
    selector:'[planet-item]',
    templateUrl:'./planet-item.component.html'
})
export class PlanetItemComponent extends BaseComponent{
    @Input('planet') planet : Planet | undefined;
    @Input('imageName') imageName:string|undefined;
    
    constructor(injector :Injector) {
        super(injector);
        
    }
}