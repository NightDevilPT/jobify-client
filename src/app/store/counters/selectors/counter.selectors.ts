import { createSelector } from '@ngrx/store';
import { AppState } from '../../store.interface';

export const selectCounter = (state: AppState) => state.counter;

export const getCounterValue = createSelector(
  selectCounter,
  (counter) => counter
);
