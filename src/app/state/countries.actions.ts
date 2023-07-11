import { createActionGroup, props } from '@ngrx/store';
import { Country } from '../countries-list/countires.model';
export const CountriessApiActions = createActionGroup({
    source: 'countries API',
    events: {
        'countries List': props<{ countries: ReadonlyArray<Country> }>(),
    },
});