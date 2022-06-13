import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Books } from 'src/app/Models/Books';
import { BooksService } from 'src/app/Services/books.service';



export class Book {
  constructor(


    public Title: string,
    public description: string,
    public isbn: number,
    public author: string,
    public listPrice?: number,
    public price?: number,
    public price50?: number,
    public price100?: number,
    public imageUrl?: "\\images\\product\\493f0a34-2044-4791-8cc8-c7a49c8b69b5.jpg",
    public categoryID?: number,
    public category?: null,
    public coverTypeId?: number,
    public coverType?: null

  ) { }
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  Books: any=[];
  constructor(private http: HttpClient, private bookservice: BooksService) { }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe(books => {
      this.Books = books as Books[];
      console.log(this.Books)
    })
    
  }
  //  bookonj:Books={
  //   id:0 ,
  //   title:"",
  //   description:"",
  //   isbn:"",
  //   author:"",
  //   listPrice:0,
  //   price: 0,
  //   price50:0,
  //   price100:0,
  //   imageUrl:"",
  //   categoryId:0,
  //   category: "",
  //   coverTypeId:0,
  //   coverType:"",
  //  }
   addBook(e:any){
   
      // alert($event.title)
    //  this. bookonj.title=$event.title;
    //  this.bookonj.description=$event.description;
    //  this.bookonj.author = $event.author;
    //  this.bookonj.listPrice=$event.listPrice;
    //  this.bookonj.price=$event.price;
    //  this.bookonj.price50=$event.price50;
    //  this.bookonj.price100=$event.price100;
    //  this.bookonj.imageUrl=$event.imageUrl;
    //  this.bookonj.categoryId=$event.categoryId;
    //  this.bookonj.category=$event.category;
    //  this.bookonj.coverTypeId=$event.coverTypeId;
    //  this.bookonj.coverType=$event.coverType;
    //  alert(this.bookonj.author)
      // this.bookservice.addBook(this.bookonj).subscribe(res=>{
      //   alert("data added successfully");
       
      this.Books.push(e);
      }
      deleteBook(bookId){
     
              let index = this.Books.findIndex(x => x.id == bookId);
              if (index != -1) {
                this.Books.splice(index, 1);
              }
           alert("Data deleted Successfully.");
      }
  
   }
  // addBook(book: any) {
  //   var bookonj:Books = new Books();
  //   bookonj.id=book.id;
  //   bookonj.title=book.title;
  //   bookonj.description=book.description;
  //   bookonj.author = book.author;
  //   bookonj.listPrice=book.listPrice;
  //   bookonj.price=book.price;
  //   bookonj.price50=book.price50;
  //   bookonj.price100=book.price100;
  //   bookonj.imageUrl=book.imageUrl;
  //   bookonj.categoryID=book.categoryID;
  //   bookonj.category=book.category;
  //   bookonj.coverTypeId=book.coverTypeId;
  //   bookonj.coverType=book.coverType

    
    
  //   this.bookservice.addBook(bookonj).subscribe(x => {
  //     //have to check if it is success then only do the below statement
  //     this.Books.push(book);
  //   })
  // }


  // deleteBook(bookId) {
  //   this.bookservice.deleteBook(bookId).subscribe(x => {
  //     //have to check if it is success then only do the below statement
  //     var index = this.Books.findIndex(x => x.id == bookId);
  //     if (index != -1) {
  //       this.Books.splice(index, 1);
  //     }
  //   })
  // }
  
