import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BooksComponent } from './Components/books/books.component';
import { HomeComponent } from './Components/home/home.component';
import {  HttpClientModule } from '@angular/common/http';

import { BooksService } from './Services/books.service';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    HomeComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
