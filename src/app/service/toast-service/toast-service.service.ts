import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ToastType,
  ToastPosition,
  ToastTheme,
} from '../../shared/jobify-toast/jobify-toast.component';

@Injectable({
  providedIn: 'root', // Singleton Service
})
export class ToastService {
  private toastSubject = new Subject<any>();
  toastState$ = this.toastSubject.asObservable(); // Observable for the toast state

  // Method to show a toast
  showToast(
    message: string,
    type: ToastType,
    position: ToastPosition = ToastPosition.TOPRIGHT,
    theme: ToastTheme = ToastTheme.DARK,
    duration: number = 5000,
    closable: boolean = true
  ) {
    const toast = {
      message,
      type,
      position,
      theme,
      duration,
      closable,
      progress: 100,
    };
    this.toastSubject.next(toast); // Emit the toast
  }

  // Success toast
  showSuccess(
    message: string,
    position: ToastPosition = ToastPosition.TOPRIGHT,
    theme: ToastTheme = ToastTheme.DARK,
    duration: number = 5000,
    closable: boolean = true
  ) {
    this.showToast(
      message,
      ToastType.SUCCESS,
      position,
      theme,
      duration,
      closable
    );
  }

  // Error toast
  showError(
    message: string,
    position: ToastPosition = ToastPosition.TOPRIGHT,
    theme: ToastTheme = ToastTheme.DARK,
    duration: number = 5000,
    closable: boolean = true
  ) {
    this.showToast(
      message,
      ToastType.ERROR,
      position,
      theme,
      duration,
      closable
    );
  }

  // Info toast
  showInfo(
    message: string,
    position: ToastPosition = ToastPosition.TOPRIGHT,
    theme: ToastTheme = ToastTheme.DARK,
    duration: number = 5000,
    closable: boolean = true
  ) {
    this.showToast(
      message,
      ToastType.INFO,
      position,
      theme,
      duration,
      closable
    );
  }

  // Warning toast
  showWarning(
    message: string,
    position: ToastPosition = ToastPosition.TOPRIGHT,
    theme: ToastTheme = ToastTheme.DARK,
    duration: number = 5000,
    closable: boolean = true
  ) {
    this.showToast(
      message,
      ToastType.WARNING,
      position,
      theme,
      duration,
      closable
    );
  }
}
