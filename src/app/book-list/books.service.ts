import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';
import { Country } from '../countries-list/countires.model';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
  getCountries(): Observable<Array<Country>> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all')
      .pipe(retry(3),map((countries) => countries || []));
  }
  getCountry(name: string): Observable<Array<Country>> {
    const Querytext = name.replace(/[^\w\s\d]+/gi, '').toLowerCase().trim();
    const api = `https://restcountries.com/v3.1/capital/${Querytext}`;
    return this.http.get<Country[]>(api)
      .pipe(map((country) => country || []));
  }
}