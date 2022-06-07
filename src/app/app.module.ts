import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/client/header/header.component';
import { FooterComponent } from './layouts/client/footer/footer.component';
import { SliderCarouselComponent } from './layouts/client/slider-carousel/slider-carousel.component';
import { MainClientComponent } from './layouts/client/main-client/main-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderCarouselComponent,
    MainClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
