import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../service/toast-service/toast-service.service';

export enum ToastPosition {
  TOPLEFT = 'top-left',
  TOPRIGHT = 'top-right',
  TOPCENTER = 'top-center',
  BOTTOMLEFT = 'bottom-left',
  BOTTOMRIGHT = 'bottom-right',
  BOTTOMCENTER = 'bottom-center'
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export enum ToastTheme {
  LIGHT = 'light',
  DARK = 'dark',
  COLORED = 'colored'
}

@Component({
  selector: 'app-jobify-toast',
  templateUrl: './jobify-toast.component.html',
  styleUrls: ['./jobify-toast.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class JobifyToastComponent implements OnInit {
  toasts: Array<{ 
    message: string, 
    type: ToastType, 
    position: ToastPosition, 
    theme: ToastTheme, 
    duration: number, 
    closable: boolean,
    progress: number 
  }> = [];

  ToastPosition = ToastPosition;
  ToastType = ToastType;
  ToastTheme = ToastTheme;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState$.subscribe((toast) => {
      this.toasts.push(toast);
      this.startToastTimer(toast);
    });
  }

  private toastTimers: Map<any, { intervalId: ReturnType<typeof setInterval> | null, timeoutId: ReturnType<typeof setTimeout> | null, remainingTime: number }> = new Map();

  startToastTimer(toast: any) {
    const toastData = {
      remainingTime: toast.duration,
      intervalId: null as ReturnType<typeof setInterval> | null,
      timeoutId: null as ReturnType<typeof setTimeout> | null
    };
    this.toastTimers.set(toast, toastData);

    const intervalStep = 100;
    const totalSteps = toast.duration / intervalStep;

    toastData.intervalId = setInterval(() => {
      toast.progress -= 100 / totalSteps;
      toastData.remainingTime -= intervalStep;

      if (toast.progress <= 0 || toastData.remainingTime <= 0) {
        this.closeToast(toast);
      }
    }, intervalStep);

    toastData.timeoutId = setTimeout(() => {
      this.closeToast(toast);
    }, toast.duration);
  }

  pauseToast(toast: any) {
    const toastData = this.toastTimers.get(toast);
    if (!toastData) return;

    clearInterval(toastData.intervalId as unknown as number);
    clearTimeout(toastData.timeoutId as unknown as number);
  }

  resumeToast(toast: any) {
    const toastData = this.toastTimers.get(toast);
    if (!toastData) return;

    this.startToastTimer(toast);
  }

  closeToast(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
    const toastData = this.toastTimers.get(toast);
    if (toastData) {
      clearInterval(toastData.intervalId as unknown as number);
      clearTimeout(toastData.timeoutId as unknown as number);
      this.toastTimers.delete(toast);
    }
  }
}
