import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { ExemploComponentComponent } from './exemplo-component/exemplo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ExemploComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
