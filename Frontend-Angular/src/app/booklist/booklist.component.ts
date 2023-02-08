import { Component, OnInit } from '@angular/core';
import { BooklistService } from './booklist.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  constructor(private booklistService: BooklistService) { }
  data: any;
  ngOnInit(): void {
    this.booklistService.getBooks().subscribe(
      (response: any) => {
        console.log(response)
        this.data = response;
      })}
// DELETE BOOK 
  deleteBook(isbn: string) {
    alert(`Are you sure you want to delete ISBN: ${isbn}`);
    this.booklistService.deletebook(isbn).subscribe(
      (response: any) => {
        console.log(response);
        this.data = response;
        window.location.reload();  });}
}

