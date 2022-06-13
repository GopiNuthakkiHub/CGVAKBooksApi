import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../Models/Books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get<Books[]>("https://localhost:7170/api/Products");
  }

  // addBook(product: any): Observable<any> {
  //   var testingobj = JSON.stringify(product);
  //   return this.http.post("https://localhost:7170/api/Products", JSON.stringify(product), {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     }
  //   });
  // }

  addBook(val:any){
    return this.http.post('https://localhost:44351/api/Products',val)
    
  }

  deleteBook(productId){
    return this.http.delete("https://localhost:7170/api/Products", productId);
  }
}
