import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jobify-breadcrumb',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './jobify-breadcrumb.component.html',
  styleUrls: ['./jobify-breadcrumb.component.scss'],
})
export class JobifyBreadcrumbComponent {
  @Input() breadcrumbs: Array<{
    startIcon?: string;
    label: string;
    route?: string;
  }> = [];
  @Input() separator: string = '>';
  @Input() varient: 'solid' | 'bordered' | 'light' = 'solid';
  @Input() radius: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input() color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger' = 'default';

  get variantClass(): string {
    const classMap = {
      solid: {
        primary: 'bg-jobify-primary-500 text-white',
        secondary: 'bg-jobify-secondary-500 text-white',
        success: 'bg-jobify-success-500 text-white',
        warning: 'bg-jobify-warning-500 text-black',
        danger: 'bg-jobify-danger-500 text-white',
        default: 'bg-jobify-default-500 text-white',
      },
      bordered: {
        primary: 'border-2 border-jobify-primary-500 text-jobify-primary-500',
        secondary:
          'border-2 border-jobify-secondary-500 text-jobify-secondary-500',
        success: 'border-2 border-jobify-success-500 text-jobify-success-500',
        warning: 'border-2 border-jobify-warning-500 text-jobify-warning-500',
        danger: 'border-2 border-jobify-danger-500 text-jobify-danger-500',
        default: 'border-2 border-jobify-default-500 text-jobify-default-500',
      },
      light: {
        primary: 'bg-jobify-primary-50 text-jobify-primary-500',
        secondary: 'bg-jobify-secondary-50 text-jobify-secondary-500',
        success: 'bg-jobify-success-50 text-jobify-success-500',
        warning: 'bg-jobify-warning-50 text-jobify-warning-500',
        danger: 'bg-jobify-danger-50 text-jobify-danger-500',
        default: 'bg-jobify-default-50 text-jobify-default-500',
      },
    };

    return classMap[this.varient][this.color];
  }

  get radiusClass(): string {
    return {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }[this.radius];
  }

  get sizeClass(): string {
    return {
      sm: 'text-sm py-1 px-4',
      md: 'text-md py-1 px-4',
      lg: 'text-lg py-1 px-4',
      xs: 'text-xs py-1 px-4',
    }[this.size];
  }
}
