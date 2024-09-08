import { Routes } from '@angular/router';
import { SignupComponent } from './feature/pages/auth/signup/signup.component';
import { LoginComponent } from './feature/pages/auth/login/login.component';
import { ForgetComponent } from './feature/pages/auth/forget/forget.component';
import { UpdateComponent } from './feature/pages/auth/update/update.component';

export const routes: Routes = [
  { path: 'auth/register', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/forget-password', component: ForgetComponent },
  { path: 'auth/update-password/:token', component: UpdateComponent },
];
