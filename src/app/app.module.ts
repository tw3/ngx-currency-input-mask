import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyInputModule } from './currency-input-mask';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
