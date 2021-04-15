import {Component, OnInit} from '@angular/core';
import {IBook} from '../../ibook';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: IBook[] = [];

  constructor(private bookService: BookService) {
    this.getAll();
  }

  getAll() {
    this.bookService.getAllProduct().subscribe(book => {
      this.books = book;
    });
  }

  deleteBook(id: number) {
    if (confirm('Bạn có thực sự muốn xóa ?')) {
      this.bookService.delete(id).subscribe(
        next => {
          // @ts-ignore
          this.products = this.getAll();
        },
        error => {
          alert('Error');
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
