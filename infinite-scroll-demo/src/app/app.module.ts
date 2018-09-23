import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImagePaginationComponent } from './image-pagination/image-pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { StylishPaginationComponent } from './stylish-pagination/stylish-pagination.component';
import { InfiniteScrollPaginationComponent } from './infinite-scroll-pagination/infinite-scroll-pagination.component';
import { ButtonsStylishPaginationComponent } from './buttons-stylish-pagination/buttons-stylish-pagination.component';
import { InfiniteDeviceDetailComponent } from './infinite-device-detail/infinite-device-detail.component';
import { AppRoutingModule } from './app.routing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    HeaderComponent,
    FooterComponent,
    ImagePaginationComponent,
    StylishPaginationComponent,
    InfiniteScrollPaginationComponent,
    ButtonsStylishPaginationComponent,
    InfiniteDeviceDetailComponent
  ],
  imports: [
    BrowserModule, InfiniteScrollModule, NgxPaginationModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
