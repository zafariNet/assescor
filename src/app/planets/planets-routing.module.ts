import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlanetDetailComponent } from "./detail/planet-detail.component";
import { PlanetItemComponent } from "./item/planet-item.component";
import { PlanetsListComponent } from "./list/planets-list.component";


const routes: Routes = [
  {
    path:'planets',
    children:[
      {
        path:'',component:PlanetsListComponent,     pathMatch: 'full'
      },
      {
        path:':id',
        component:PlanetDetailComponent
      }
    ]
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class PlanetsRoutingModule{

}