import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counters';
import { AppState } from './store.interface';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};
