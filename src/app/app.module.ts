import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
...
  ...
  imports: [
    ...
    routing
  ],





@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
