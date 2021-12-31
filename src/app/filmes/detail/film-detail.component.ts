import { Component, Injector, TemplateRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { BaseComponent } from "src/app/base.component";
import { AddFilmComponent } from "../add/add-film.component";
import { Film } from "../film.model";

@Component({
    selector: 'film-detail',
    templateUrl: './film-detail.component.html'
})
export class FilmDetailComponent extends BaseComponent {
    film: Film | undefined;
    @ViewChild('addFilm') addFilmModal:AddFilmComponent|undefined;
    constructor(injector: Injector, private router: ActivatedRoute) {
        super(injector);

    }
    showAddModal()
    {
        debugger;
        this.addFilmModal?.openModal();
    }


 
  
    ngOnInit(): void {
        let id = this.router.snapshot.params['id'];
    
        this.resourcseService.getFilmById(id).subscribe(response => {
            this.film = response as Film;
            this.dataLoaded = true;
        })
    }
}