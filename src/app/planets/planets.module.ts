import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PlanetDetailComponent } from "./detail/planet-detail.component";
import { PlanetItemComponent } from "./item/planet-item.component";
import { PlanetsListComponent } from "./list/planets-list.component";
import { PlanetsRoutingModule } from "./planets-routing.module";

@NgModule({
    declarations:[PlanetsListComponent,PlanetDetailComponent,PlanetItemComponent],
    imports:[CommonModule,PlanetsRoutingModule],
    exports:[PlanetsRoutingModule],
    providers:[],
})
export class PlanetsModule{

}