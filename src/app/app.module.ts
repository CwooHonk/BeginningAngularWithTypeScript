import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';

import { JumboTronComponent } from './bs-jumbotron';

import { TruncatePipe } from './truncation.pipe';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, ProductComponent, RatingComponent, TruncatePipe, JumboTronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
