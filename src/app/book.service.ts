import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';

const API_URL = `${environment.apiUrl}`;
const URL_SHOW = API_URL + '/books';

const URL_CREATE = API_URL + '/books/create';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(URL_SHOW);
  }

  getBookById(id: number): Observable<IBook> {
    const URL_FIND_ID = API_URL + `/books/${id}`;
    return this.httpClient.get<IBook>(URL_FIND_ID);
  }

  create(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(URL_CREATE, book);

  }

  update(id: number, book: IBook): Observable<IBook> {
    const URL_UPDATE = API_URL + `/books/edit/${id}`;
    return this.httpClient.put<IBook>(URL_UPDATE, book);
  }

  delete(id: number): Observable<IBook> {
    const URL_DELETE = API_URL + `/books/delete/${id}`;
    return this.httpClient.delete<IBook>(URL_DELETE);
  }
}
