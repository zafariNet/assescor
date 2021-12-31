import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "src/app/base.component";
import { Planet } from "../planet.model";

@Component({
    selector:'planet-detail',
    templateUrl:'./planet-detail.component.html'
})
export class PlanetDetailComponent extends BaseComponent implements OnInit{
    
    planet:Planet | undefined;
    constructor(injector :Injector,private router:ActivatedRoute) {
        super(injector);
        
    }
    ngOnInit(): void {
        let id=this.router.snapshot.params['id'];
        this.resourcseService.getPlanetsById(id).subscribe(response=>{
            this.planet=response;
            this.dataLoaded = true;
        })
    }
}