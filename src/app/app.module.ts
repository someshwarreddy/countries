import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
// import { booksReducer } from './state/books.reducer';
// import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { BookCollectionComponent } from './books-collection/book-collection.component';
import { CountriesListComponent } from './countries-list/countries-list/countries-list.component';
import { countriesReducer } from './state/countries.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchCountriesPipe } from './countries-list/search-countries.pipe';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './countries-list/country-details/country-details.component';
import { PageNotFoundComponent } from './countries-list/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    CountriesListComponent,
    SearchCountriesPipe,
    CountryDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ countries:countriesReducer }),
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'DevTools & Debugging in NgRx',
      maxAge: 25, // Retains last 25 states,
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
