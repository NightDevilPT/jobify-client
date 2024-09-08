import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/store.state';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { AllEffects } from './store/store.effects';
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers),
    // provideEffects([...AllEffects]),
  ]
};
