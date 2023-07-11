import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleBooksService } from 'src/app/book-list/books.service';
import { BooksApiActions } from 'src/app/state/books.actions';
import { CountriessApiActions } from 'src/app/state/countries.actions';
import { selectCountries } from 'src/app/state/countries.selector';
import { Country } from '../countires.model';
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  // @Input() countries: Array<Country>;
  noSearchresults: boolean = false;
  dropDownisopen: boolean = false;
  selectedRegion: string = '';
  searchTerm: string;
  countries: Observable<Country[]> | null;
  regionArray = ['Asia', 'Africa', 'Americas', 'Europe', 'Antarctic', 'Oceania'];

  constructor(private elementRef: ElementRef, private booksService: GoogleBooksService, private store: Store,) {
    this.countries = this.store.select(selectCountries);
  }

  ngOnInit() {
    this.booksService.getCountries().subscribe((countries) => {
      this.store.dispatch(CountriessApiActions.countriesList({ countries }))
    })
  }

  dropdownToggle() {
    this.dropDownisopen = !this.dropDownisopen;

  }
  selectRegion(selectedRegion: string) {
    this.selectedRegion = selectedRegion;
    this.dropDownisopen = false;
    this.searchTerm = selectedRegion;
  }

  // clickoutside dropdown close 

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const isDropdownclicked = target.querySelector('.dropdown');
    if (isDropdownclicked) {
      this.dropDownisopen = false;
    }
  }
}