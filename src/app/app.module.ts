import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';




@NgModule({
  declarations: [
    AppComponent,
    EditItemComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule



  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
