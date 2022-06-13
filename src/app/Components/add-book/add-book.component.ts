import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Books } from 'src/app/Models/Books';
import { Category } from 'src/app/Models/Category';
import { CoverType } from 'src/app/Models/CoverType';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() AddBook=new EventEmitter<Books>();
  @ViewChild('closebutton') closebutton;
  BookForm: FormGroup;
  Bookservice: any;
  
  constructor(private formbuilder:FormBuilder) {
   
    this.BookForm=formbuilder.group({
      "id":['',Validators.required],
      "title":['',Validators.required],
      "description": ['',Validators.required],
      "isbn":['',Validators.required],
      "author":['',Validators.required],
      "listPrice":['',Validators.required],
      "price":['',Validators.required],
      "price50":['',Validators.required],
      "price100":['',Validators.required],
      "imageUrl":['',Validators.required],
      "category":['',Validators.required],
      "coverType":['',Validators.required]
    })
    
   }
   get f(){return this.BookForm.controls;}
   bookobj:Books={
    id:0,
    title:'',
    description:'',
    isbn:'',
    author:'',
    listPrice:0,
    price:0,
    price50:0,
    price100:0,
    imageUrl:'',
    categoryID: 0,
    category: {
      id: 0,
      name:'',
      orderOfDisplay:0
    },
    coverTypeId: 0,
    coverType: {
      id: 0,
      name:''
    },

   }
  
  ngOnInit(): void {
  }
 
  submit(){
    
  // this.Bookservice.addBook(this.bookobj).subscribe(res=>{
  //  alert("data added successfully");
  
  
  // })
  this.AddBook.emit(this.BookForm.value)
  this.closebutton.nativeElement.click();
  alert("data added successfully");
    // alert(this.BookForm.value.author)
    // this.AddBook.emit(this.BookForm.value);
    // this.closebutton.nativeElement.click();
  }


}