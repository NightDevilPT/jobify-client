import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { increment, decrement } from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {} // Ensure this is correctly injected

  // Effect for increment
  logIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      map(() => {
        console.log('Increment action was triggered');
        return { type: '[Counter] Increment Logged' }; // Example return action
      })
    )
  );

  // Effect for decrement
  logDecrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(decrement),
      map(() => {
        console.log('Decrement action was triggered');
        return { type: '[Counter] Decrement Logged' }; // Example return action
      })
    )
  );
}
