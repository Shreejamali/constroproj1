import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { PuneComponent } from './pune/pune.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';

//import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MumbaiComponent,
    PuneComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
