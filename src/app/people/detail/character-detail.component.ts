import { Component, Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "src/app/base.component";
import { Character } from "../character.model";


@Component({
    selector:'film-detail',
    templateUrl:'./character-detail.component.html'
})
export class CharacterDetailComponent extends BaseComponent{
    character:Character | undefined;
    
    constructor(injector:Injector,private router:ActivatedRoute,) {
        super(injector);
        
    }
    ngOnInit(): void {
        let id=this.router.snapshot.params['id'];
        this.resourcseService.getCharacterById(id).subscribe(response=>{
          this.character=response as Character;
          this.dataLoaded = true;
        })
      }
}