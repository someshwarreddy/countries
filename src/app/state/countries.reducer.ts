import { createReducer, on } from '@ngrx/store';

import { CountriessApiActions } from './countries.actions';
import { Country } from '../countries-list/countires.model';

export const initialState: ReadonlyArray<Country> = [];

export const countriesReducer = createReducer(
    initialState,
    on(CountriessApiActions.countriesList, (_state, { countries }) => countries)
);