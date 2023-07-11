import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GoogleBooksService } from 'src/app/book-list/books.service';
import { selectCountries } from 'src/app/state/countries.selector';
import { Country } from '../countires.model';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  country: Country[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: GoogleBooksService
  ) {

  }
  ngOnInit() {
    // this.country = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.booksService.getCountry(params.get('id')!))
    // );
    const id = this.route.snapshot.paramMap.get('id')
    const newString = id.slice(1, id.length - 1);
    this.booksService.getCountry(newString).subscribe((data: Country[]) => {
      this.country = data;
    })
  }
}
