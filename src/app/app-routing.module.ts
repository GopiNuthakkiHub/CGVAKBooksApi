import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BooksComponent } from './Components/books/books.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Books',component:BooksComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
