import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { SantiaListingComponent } from './santia-listing/santia-listing.component';
import { SantiCardComponent } from './santi-card/santi-card.component';
import { SantiService } from './services/santi.service';

@NgModule({
  declarations: [
    AppComponent,
    SantiaListingComponent,
    SantiCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [SantiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
