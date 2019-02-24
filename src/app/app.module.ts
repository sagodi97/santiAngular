import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SantiaListingComponent } from './santia-listing/santia-listing.component';
import { SantiCardComponent } from './santi-card/santi-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SantiaListingComponent,
    SantiCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
