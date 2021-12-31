import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CharacterDetailComponent } from "./detail/character-detail.component";
import { CharacterListComponent } from "./list/characters-list.component";


const routes: Routes = [
  {
    path:'characters',
    children:[
      {
        path:'',component:CharacterListComponent,     pathMatch: 'full'
      },
      {
        path:':id',
        component:CharacterDetailComponent
      }
    ]
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class CharactersRoutingModule{

}