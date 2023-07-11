import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './countries-list/country-details/country-details.component';
import { PageNotFoundComponent } from './countries-list/page-not-found/page-not-found.component';
import { CountriesListComponent } from './countries-list/countries-list/countries-list.component';
const routes: Routes = [
  { path: 'countries', component: CountriesListComponent },
  { path: 'countrydetails/:id', component: CountryDetailsComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
