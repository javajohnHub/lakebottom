import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, ButtonsModule, CarouselModule, CollapseModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import {Boot419RoutingModule} from './app-routing.module';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IframesComponent } from './iframes/iframes.component';
import { AlbumsComponent } from './albums/albums.component';

import { FooterComponent } from './footer/footer.component';
import { FacebookComponent } from './facebook/facebook.component';
import { WhyComponent } from './why/why.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    IframesComponent,
    AlbumsComponent,
    FooterComponent,
    FacebookComponent,
    WhyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DropdownModule,
    Boot419RoutingModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
