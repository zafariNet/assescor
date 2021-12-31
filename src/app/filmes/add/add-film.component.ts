import { Component, EventEmitter, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { ValidateDate } from "src/app/common/validators";
import { Film } from "../film.model";


@Component({
    selector:'add-film',
    templateUrl:'./add-film.component.html'
})
export class AddFilmComponent implements OnInit{
    modalRef: BsModalRef | undefined;
    modavSave:EventEmitter<Film> | undefined;
    config: ModalOptions = { class: 'modal-lg' };
        @ViewChild('addFilmTemplate') addFilmTemplate : any;
        addForm:FormGroup;
    constructor(private modalService: BsModalService) {
       
    }
    ngOnInit(): void {
        this.addForm=new FormGroup({
            title:new FormControl(null, [
                Validators.required,
                Validators.minLength(4),
              ]),
            director:new FormControl([
                Validators.required
              ]),
            propducent:new FormControl([
                Validators.required,
              ]),
            releasDate:new FormControl([
                Validators.required,
                ValidateDate
              ]),
            opening_crawl:new FormControl([
                Validators.required,
              ])
        })
    }
    openModal() {
        this.modalRef = this.modalService.show(this.addFilmTemplate,this.config);
     }
     save()
     {
        
         if(this.addForm.valid)
         {
             this.modavSave?.emit(this.addForm.value);
             this.modalRef?.hide();
         }
     }
}