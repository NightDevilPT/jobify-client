import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TailwindHelperService {
  
  // Tailwind Size Class Helper
  getSizeClass(size: 'sm' | 'md' | 'lg'): string {
    return {
      sm: 'text-sm py-1 px-3',
      md: 'text-base py-2 px-4',
      lg: 'text-lg py-3 px-5',
    }[size];
  }

  // Tailwind Radius Class Helper
  getRadiusClass(radius: 'none' | 'sm' | 'md' | 'lg' | 'full'): string {
    return {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }[radius];
  }

  // Tailwind Variant and Color Class Helper for Buttons
  getVariantButtonClass(variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost', color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'): string {
    const classMap = {
      solid: {
        primary: 'bg-jobify-primary-500 text-white hover:bg-jobify-primary-600 transition-all duration-300',
        secondary: 'bg-jobify-secondary-500 text-white hover:bg-jobify-secondary-600 transition-all duration-300',
        success: 'bg-jobify-success-500 text-white hover:bg-jobify-success-600 transition-all duration-300',
        warning: 'bg-jobify-warning-500 text-black hover:bg-jobify-warning-600 transition-all duration-300',
        danger: 'bg-jobify-danger-500 text-white hover:bg-jobify-danger-600 transition-all duration-300',
        default: 'bg-jobify-default-500 text-white hover:bg-jobify-default-600 transition-all duration-300',
      },
      bordered: {
        primary: 'border-2 border-jobify-primary-500 text-jobify-primary-500 hover:border-jobify-primary-600 hover:bg-jobify-primary-50 transition-all duration-300',
        secondary: 'border-2 border-jobify-secondary-500 text-jobify-secondary-500 hover:border-jobify-secondary-600 hover:bg-jobify-secondary-50 transition-all duration-300',
        success: 'border-2 border-jobify-success-500 text-jobify-success-500 hover:border-jobify-success-600 hover:bg-jobify-success-50 transition-all duration-300',
        warning: 'border-2 border-jobify-warning-500 text-jobify-warning-500 hover:border-jobify-warning-600 hover:bg-jobify-warning-50 transition-all duration-300',
        danger: 'border-2 border-jobify-danger-500 text-jobify-danger-500 hover:border-jobify-danger-600 hover:bg-jobify-danger-50 transition-all duration-300',
        default: 'border-2 border-jobify-default-500 text-jobify-default-500 hover:border-jobify-default-600 hover:bg-jobify-default-50 transition-all duration-300',
      },
      light: {
        primary: 'bg-jobify-primary-50 text-jobify-primary-500 hover:bg-jobify-primary-100 transition-all duration-300',
        secondary: 'bg-jobify-secondary-50 text-jobify-secondary-500 hover:bg-jobify-secondary-100 transition-all duration-300',
        success: 'bg-jobify-success-50 text-jobify-success-500 hover:bg-jobify-success-100 transition-all duration-300',
        warning: 'bg-jobify-warning-50 text-jobify-warning-500 hover:bg-jobify-warning-100 transition-all duration-300',
        danger: 'bg-jobify-danger-50 text-jobify-danger-500 hover:bg-jobify-danger-100 transition-all duration-300',
        default: 'bg-jobify-default-50 text-jobify-default-500 hover:bg-jobify-default-100 transition-all duration-300',
      },
      flat: {
        primary: 'bg-transparent text-jobify-primary-500 hover:bg-jobify-primary-50 transition-all duration-300',
        secondary: 'bg-transparent text-jobify-secondary-500 hover:bg-jobify-secondary-50 transition-all duration-300',
        success: 'bg-transparent text-jobify-success-500 hover:bg-jobify-success-50 transition-all duration-300',
        warning: 'bg-transparent text-jobify-warning-500 hover:bg-jobify-warning-50 transition-all duration-300',
        danger: 'bg-transparent text-jobify-danger-500 hover:bg-jobify-danger-50 transition-all duration-300',
        default: 'bg-transparent text-jobify-default-500 hover:bg-jobify-default-50 transition-all duration-300',
      },
      faded: {
        primary: 'bg-jobify-primary-100 text-jobify-primary-500 hover:bg-jobify-primary-200 transition-all duration-300',
        secondary: 'bg-jobify-secondary-100 text-jobify-secondary-500 hover:bg-jobify-secondary-200 transition-all duration-300',
        success: 'bg-jobify-success-100 text-jobify-success-500 hover:bg-jobify-success-200 transition-all duration-300',
        warning: 'bg-jobify-warning-100 text-jobify-warning-500 hover:bg-jobify-warning-200 transition-all duration-300',
        danger: 'bg-jobify-danger-100 text-jobify-danger-500 hover:bg-jobify-danger-200 transition-all duration-300',
        default: 'bg-jobify-default-100 text-jobify-default-500 hover:bg-jobify-default-200 transition-all duration-300',
      },
      shadow: {
        primary: 'shadow-lg bg-jobify-primary-500 text-white hover:bg-jobify-primary-600 transition-all duration-300',
        secondary: 'shadow-lg bg-jobify-secondary-500 text-white hover:bg-jobify-secondary-600 transition-all duration-300',
        success: 'shadow-lg bg-jobify-success-500 text-white hover:bg-jobify-success-600 transition-all duration-300',
        warning: 'shadow-lg bg-jobify-warning-500 text-black hover:bg-jobify-warning-600 transition-all duration-300',
        danger: 'shadow-lg bg-jobify-danger-500 text-white hover:bg-jobify-danger-600 transition-all duration-300',
        default: 'shadow-lg bg-jobify-default-500 text-white hover:bg-jobify-default-600 transition-all duration-300',
      },
      ghost: {
        primary: 'bg-transparent text-jobify-primary-500 hover:bg-jobify-primary-50 transition-all duration-300',
        secondary: 'bg-transparent text-jobify-secondary-500 hover:bg-jobify-secondary-50 transition-all duration-300',
        success: 'bg-transparent text-jobify-success-500 hover:bg-jobify-success-50 transition-all duration-300',
        warning: 'bg-transparent text-jobify-warning-500 hover:bg-jobify-warning-50 transition-all duration-300',
        danger: 'bg-transparent text-jobify-danger-500 hover:bg-jobify-danger-50 transition-all duration-300',
        default: 'bg-transparent text-jobify-default-500 hover:bg-jobify-default-50 transition-all duration-300',
      },
    };
  
    return classMap[variant][color];
  }

  // Helper for input styling
  getVariantInputClass(variant:'bordered' | 'flat' | 'faded' , color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'): string {
    const classMap = {

      bordered: {
        primary: 'border-2 border-jobify-primary-100 text-jobify-primary-200 hover:border-jobify-primary-200 hover:bg-jobify-primary-50 transition-all duration-300',
        secondary: 'border-2 border-jobify-secondary-100 text-jobify-secondary-200 hover:border-jobify-secondary-300 hover:bg-jobify-secondary-50 transition-all duration-300',
        success: 'border-2 border-jobify-success-100 text-jobify-success-200 hover:border-jobify-success-300 hover:bg-jobify-success-50 transition-all duration-300',
        warning: 'border-2 border-jobify-warning-100 text-jobify-warning-200 hover:border-jobify-warning-300 hover:bg-jobify-warning-50 transition-all duration-300',
        danger: 'border-2 border-jobify-danger-100 text-jobify-danger-200 hover:border-jobify-danger-300 hover:bg-jobify-danger-50 transition-all duration-300',
        default: 'border-2 border-jobify-default-100 text-jobify-default-200 hover:border-jobify-default-300 hover:bg-jobify-default-50 transition-all duration-300',
      },
      flat: {
        primary: 'bg-transparent border-b-2 border-b-jobify-primary-300 text-jobify-primary-300 hover:bg-jobify-primary-50 transition-all duration-300',
        secondary: 'bg-transparent border-b-2 border-b-jobify-secondary-300 text-jobify-secondary-300 hover:bg-jobify-secondary-50 transition-all duration-300',
        success: 'bg-transparent border-b-2 border-b-jobify-success-300 text-jobify-success-300 hover:bg-jobify-success-50 transition-all duration-300',
        warning: 'bg-transparent border-b-2 border-b-jobify-warning-300 text-jobify-warning-300 hover:bg-jobify-warning-50 transition-all duration-300',
        danger: 'bg-transparent border-b-2 border-b-jobify-danger-300 text-jobify-danger-300 hover:bg-jobify-danger-50 transition-all duration-300',
        default: 'bg-transparent border-b-2 border-b-jobify-default-300 text-jobify-default-300 hover:bg-jobify-default-50 transition-all duration-300',
      },      
      faded: {
        primary: 'bg-jobify-primary-100 placeholder:text-jobify-primary-300 text-jobify-primary-500 hover:bg-jobify-primary-200 transition-all duration-300',
        secondary: 'bg-jobify-secondary-100 text-jobify-secondary-500 hover:bg-jobify-secondary-200 transition-all duration-300',
        success: 'bg-jobify-success-100 text-jobify-success-500 hover:bg-jobify-success-200 transition-all duration-300',
        warning: 'bg-jobify-warning-100 text-jobify-warning-500 hover:bg-jobify-warning-200 transition-all duration-300',
        danger: 'bg-jobify-danger-100 text-jobify-danger-500 hover:bg-jobify-danger-200 transition-all duration-300',
        default: 'bg-jobify-default-100 text-jobify-default-500 hover:bg-jobify-default-200 transition-all duration-300',
      },
    };
  
    return classMap[variant][color];
  }
}
