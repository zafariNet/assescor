import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmDetailComponent } from "./detail/film-detail.component";
import { FilmsListComponent } from "./list/films-list.component";


const routes: Routes = [
  {
    path:'films',
    children:[
      {
        path:'',component:FilmsListComponent,     pathMatch: 'full'
      },
      {
        path:':id',
        component:FilmDetailComponent
      }
    ]
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class FilmsRoutingModule{

}