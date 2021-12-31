import { Component, Injector } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ResourcseService } from "./services/resource.service";

@Component({
    selector: '',
template: ''
})
export class BaseComponent {

    spinnerService: NgxSpinnerService;
    resourcseService: ResourcseService;
    dataLoaded=false;
    constructor(injector: Injector) {
        this.resourcseService = injector.get(ResourcseService);
        this.spinnerService = injector.get(NgxSpinnerService);

    }
    getId(url:string | undefined):string
    {
      let splitedUrl=url?url.split('/'):'   '
      return splitedUrl[splitedUrl.length-2]
    }
    showSpinner(): void {
        this.spinnerService.show('loadingSpinner', {
          type: 'ball-clip-rotate-multiple',
          size: 'large',
          bdColor: 'rgba(0, 0, 0, 1)',
          color: 'white',
          template:
          "<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />",
        });
      }
      hideSpinner(): void {
        this.spinnerService.hide('loadingSpinner');
      }
}