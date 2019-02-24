import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SantiaListingComponent } from './santia-listing/santia-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    SantiaListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
