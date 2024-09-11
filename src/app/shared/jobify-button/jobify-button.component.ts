import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-jobify-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobify-button.component.html',
  styleUrls: ['./jobify-button.component.scss'],
})
export class JobifyButtonComponent {
  @Input() variant: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost' = 'solid';
  @Input() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() radius: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md';
  @Input() startContent?: string | null;
  @Input() endContent?: string | null;
  @Input() fullWidth: boolean = false;
  @Input() isIconOnly: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() spinner: string = 'Loading...';
  @Input() spinnerPlacement: 'start' | 'end' = 'start';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<void>();

  constructor(private renderer: Renderer2, private el: ElementRef){}

  // Getter for variant and color classes dynamically
  get variantClass(): string {
    const classMap = {
      solid: {
        primary: 'bg-jobify-primary-500 text-white hover:bg-jobify-primary-600',
        secondary: 'bg-jobify-secondary-500 text-white hover:bg-jobify-secondary-600',
        success: 'bg-jobify-success-500 text-white hover:bg-jobify-success-600',
        warning: 'bg-jobify-warning-500 text-black hover:bg-jobify-warning-600',
        danger: 'bg-jobify-danger-500 text-white hover:bg-jobify-danger-600',
        default: 'bg-jobify-default-500 text-white hover:bg-jobify-default-600',
      },
      bordered: {
        primary: 'border-2 border-jobify-primary-500 text-jobify-primary-500 hover:border-jobify-primary-600 hover:bg-jobify-primary-50',
        secondary: 'border-2 border-jobify-secondary-500 text-jobify-secondary-500 hover:border-jobify-secondary-600 hover:bg-jobify-secondary-50',
        success: 'border-2 border-jobify-success-500 text-jobify-success-500 hover:border-jobify-success-600 hover:bg-jobify-success-50',
        warning: 'border-2 border-jobify-warning-500 text-jobify-warning-500 hover:border-jobify-warning-600 hover:bg-jobify-warning-50',
        danger: 'border-2 border-jobify-danger-500 text-jobify-danger-500 hover:border-jobify-danger-600 hover:bg-jobify-danger-50',
        default: 'border-2 border-jobify-default-500 text-jobify-default-500 hover:border-jobify-default-600 hover:bg-jobify-default-50',
      },
      light: {
        primary: 'bg-jobify-primary-50 text-jobify-primary-500 hover:bg-jobify-primary-100',
        secondary: 'bg-jobify-secondary-50 text-jobify-secondary-500 hover:bg-jobify-secondary-100',
        success: 'bg-jobify-success-50 text-jobify-success-500 hover:bg-jobify-success-100',
        warning: 'bg-jobify-warning-50 text-jobify-warning-500 hover:bg-jobify-warning-100',
        danger: 'bg-jobify-danger-50 text-jobify-danger-500 hover:bg-jobify-danger-100',
        default: 'bg-jobify-default-50 text-jobify-default-500 hover:bg-jobify-default-100',
      },
      flat: {
        primary: 'bg-transparent text-jobify-primary-500 hover:bg-jobify-primary-50',
        secondary: 'bg-transparent text-jobify-secondary-500 hover:bg-jobify-secondary-50',
        success: 'bg-transparent text-jobify-success-500 hover:bg-jobify-success-50',
        warning: 'bg-transparent text-jobify-warning-500 hover:bg-jobify-warning-50',
        danger: 'bg-transparent text-jobify-danger-500 hover:bg-jobify-danger-50',
        default: 'bg-transparent text-jobify-default-500 hover:bg-jobify-default-50',
      },
      faded: {
        primary: 'bg-jobify-primary-100 text-jobify-primary-500 hover:bg-jobify-primary-200',
        secondary: 'bg-jobify-secondary-100 text-jobify-secondary-500 hover:bg-jobify-secondary-200',
        success: 'bg-jobify-success-100 text-jobify-success-500 hover:bg-jobify-success-200',
        warning: 'bg-jobify-warning-100 text-jobify-warning-500 hover:bg-jobify-warning-200',
        danger: 'bg-jobify-danger-100 text-jobify-danger-500 hover:bg-jobify-danger-200',
        default: 'bg-jobify-default-100 text-jobify-default-500 hover:bg-jobify-default-200',
      },
      shadow: {
        primary: 'shadow-lg bg-jobify-primary-500 text-white hover:bg-jobify-primary-600',
        secondary: 'shadow-lg bg-jobify-secondary-500 text-white hover:bg-jobify-secondary-600',
        success: 'shadow-lg bg-jobify-success-500 text-white hover:bg-jobify-success-600',
        warning: 'shadow-lg bg-jobify-warning-500 text-black hover:bg-jobify-warning-600',
        danger: 'shadow-lg bg-jobify-danger-500 text-white hover:bg-jobify-danger-600',
        default: 'shadow-lg bg-jobify-default-500 text-white hover:bg-jobify-default-600',
      },
      ghost: {
        primary: 'bg-transparent text-jobify-primary-500 hover:bg-jobify-primary-50',
        secondary: 'bg-transparent text-jobify-secondary-500 hover:bg-jobify-secondary-50',
        success: 'bg-transparent text-jobify-success-500 hover:bg-jobify-success-50',
        warning: 'bg-transparent text-jobify-warning-500 hover:bg-jobify-warning-50',
        danger: 'bg-transparent text-jobify-danger-500 hover:bg-jobify-danger-50',
        default: 'bg-transparent text-jobify-default-500 hover:bg-jobify-default-50',
      },
    };
  
    return classMap[this.variant][this.color];
  }  

  // Getter for size classes
  get sizeClass(): string {
    return {
      sm: 'text-sm py-1 px-3',
      md: 'text-md py-2 px-4',
      lg: 'text-lg py-3 px-5',
    }[this.size];
  }

  // Getter for radius classes
  get radiusClass(): string {
    return {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    }[this.radius];
  }

  handleClick(event: MouseEvent): void {
    if (!this.isLoading && !this.isDisabled) {
      this.createRipple(event);
      this.clicked.emit(); // Emit the click event to parent component
    }
  }

  createRipple(event: MouseEvent) {
    const button = this.el.nativeElement.querySelector('button');
    const rect = button.getBoundingClientRect(); // Get the button's dimensions and position
    const ripple = this.renderer.createElement('span'); // Create a span element for the ripple
  
    // Define the color map for different ripple backgrounds
    const rippleColorMap = {
      primary: this.variant === 'solid' ? '#edf6ff3b' : 'rgba(0, 123, 255, 0.3)', // Darker ripple for solid
      secondary: this.variant === 'solid' ? '#edf6ff3b' : 'rgba(108, 117, 125, 0.3)',
      success: this.variant === 'solid' ? '#edf6ff3b' : 'rgba(40, 167, 69, 0.3)',
      warning: this.variant === 'solid' ? '#edf6ff3b' : 'rgba(255, 193, 7, 0.3)',
      danger: this.variant === 'solid' ? '#edf6ff3b' : 'rgba(220, 53, 69, 0.3)',
      default: this.variant === 'solid' ? '#edf6ff3b' : 'rgba(108, 117, 125, 0.3)',
    };
  
    // Get the appropriate ripple color based on the button color input
    const rippleColor = rippleColorMap[this.color] || rippleColorMap.default;
  
    // Calculate the diameter of the ripple (largest side of the button)
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    // Calculate the ripple's position relative to the button
    const left = event.clientX - rect.left - radius;
    const top = event.clientY - rect.top - radius;
  
    // Apply styles for the ripple
    this.renderer.setStyle(ripple, 'width', `${diameter}px`);
    this.renderer.setStyle(ripple, 'height', `${diameter}px`);
    this.renderer.setStyle(ripple, 'left', `${left}px`);
    this.renderer.setStyle(ripple, 'top', `${top}px`);
    this.renderer.setStyle(ripple, 'background', rippleColor); // Set dynamic ripple color
    this.renderer.addClass(ripple, 'ripple'); // Add the ripple class for animation
  
    // Append the ripple element to the button
    this.renderer.appendChild(button, ripple);
  
    // Remove the ripple after the animation completes (600ms)
    setTimeout(() => {
      this.renderer.removeChild(button, ripple);
    }, 600);
  }  
}
