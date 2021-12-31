import { Component, Injector, OnInit } from "@angular/core";
import { inject } from "@angular/core/testing";
import { BaseComponent } from "src/app/base.component";
import { Planet } from "../planet.model";

@Component({
    selector:'planets-list',
    templateUrl:'./planets-list.component.html'
})
export class PlanetsListComponent extends BaseComponent implements OnInit{
    planets:Planet[]=[];
    
    constructor(injector :Injector) {
        super(injector);
        
    }
    ngOnInit(): void {
        this.resourcseService.getPlanets().subscribe(response=>{
            this.planets=response;
            this.dataLoaded = true;
        })
    }
}