import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IBook} from '../../ibook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  sub: Subscription;
  // @ts-ignore
  id: number;

  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: '',
  };

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private bookService: BookService,) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }

  private getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(b => {
      this.book = b;
    });
  }


}
