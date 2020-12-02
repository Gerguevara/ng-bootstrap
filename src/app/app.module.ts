import { NgbootstrapModule } from './ngb/ngbootstrap/ngbootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// componets
import { JokerComponent } from './components/joker/joker.component';
import { OtherComponent } from './components/other/other.component';


@NgModule({
  declarations: [
    AppComponent,
    JokerComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
