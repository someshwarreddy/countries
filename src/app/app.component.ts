import { Component, OnInit, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { CountriessApiActions } from './state/countries.actions';
import { GoogleBooksService } from './book-list/books.service';
import { Book } from './book-list/books.model';
import { Country } from './countries-list/countires.model';
import { Observable } from 'rxjs';
import { selectCountries } from './state/countries.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$: Observable<readonly Book[]> | null;
  bookCollection$ = this.store.select(selectBookCollection);
  countries: Observable<Country[]> | null;

  iconText: string = "dark_mode";
  iconToggle: boolean;

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(@Inject(DOCUMENT) private document: Document, private booksService: GoogleBooksService,
    private store: Store) {
    this.books$ = this.store.select(selectBooks);
    this.countries = this.store.select(selectCountries)
  }

  toggleTheme() {
    (this.iconToggle = !this.iconToggle) ? this.iconText = "light_mode" : this.iconText = "dark_mode";
    this.iconToggle ? document.body.classList.add('darkmode') : document.body.classList.remove('darkmode'), document.body.classList.add('lightmode');
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}