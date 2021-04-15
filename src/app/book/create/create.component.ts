import {Component, OnInit} from '@angular/core';
import {IBook} from '../../ibook';
import {Router} from '@angular/router';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  constructor(private router: Router, private bookService: BookService) {
  }

  createNewBook() {
    this.bookService.create(this.book)
      .subscribe(() => {
        this.router.navigate(['/book']);
      });
  }

  ngOnInit(): void {
  }

}
