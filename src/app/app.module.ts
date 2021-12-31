import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ResourcseService } from './services/resource.service';
import { FilmsModule } from './filmes/films.module';
import { CommonModule } from '@angular/common';
import { PlanetsModule } from './planets/planets.module';
import { CharactersModule } from './people/characters.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpConfigInterceptor } from './services/httpConfigInterceptor';
import { NotFoundComponent } from './errors/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FilmsModule,
    PlanetsModule,
    CharactersModule,
    HttpClientModule,
    NgxSpinnerModule,
    ModalModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  exports:[ModalModule],
  providers: [
    {
      provide:ResourcseService,deps:[
        HttpClient
      ]
    },
    BsModalService,
    {
      provide:'BASE_URL', useValue:'https://swapi.dev/api/'
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
