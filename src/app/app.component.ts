// app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';  // Include routing imports
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './feature/layouts/layouts.component';  // Make sure the path is correct
import { Store } from '@ngrx/store';
import { AppState } from './store/store.interface';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/counters/actions/counter.actions';
import { EffectsModule } from '@ngrx/effects';
import { AllEffects } from './store/store.effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    LayoutsComponent,
    RouterLink, 
    RouterLinkActive, 
    RouterOutlet  // Add Router-related imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'web';
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('counter');  // Make sure 'counter' is correctly defined in AppState
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
