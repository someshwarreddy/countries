import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Country } from '../countries-list/countires.model';

export const selectCountries = createFeatureSelector<Country[]>('countries');