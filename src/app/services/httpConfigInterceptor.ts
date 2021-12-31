import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { catchError, map, Observable, ObservableInput, of, tap } from "rxjs";


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private router: Router, private spinnerService: NgxSpinnerService) {
        debugger;

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showSpinner()
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(map(event => {
            if (event instanceof HttpResponse) {
                this.hideSpinner();
            }
            return event;
        }), catchError((response: any):
            ObservableInput<any> => {
            this.hideSpinner();
            if (response.status == 404) {
                this.router.navigate(['../../../notfound'])
            }
            return of(true)
        }));




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