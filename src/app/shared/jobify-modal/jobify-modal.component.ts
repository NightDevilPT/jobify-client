import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngStyle and ngClass

@Component({
  selector: 'app-jobify-modal',
  standalone: true,
  imports: [CommonModule], // Import CommonModule
  templateUrl: './jobify-modal.component.html',
})
export class JobifyModalComponent {
  // Inputs for modal configuration
  @Input() isOpen: boolean = false; // Modal visibility control
  @Input() size:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full' = 'md'; // Modal size
  @Input() radius: 'none' | 'sm' | 'md' | 'lg' = 'lg'; // Border radius
  @Input() shadow: 'none' | 'sm' | 'md' | 'lg' = 'lg'; // Box shadow
  @Input() backdrop: 'transparent' | 'opaque' | 'blur' = 'opaque'; // Backdrop type
  @Input() scrollBehavior: 'normal' | 'inside' | 'outside' = 'normal'; // Scroll behavior
  @Input() placement: 'auto' | 'top' | 'center' | 'bottom' = 'center'; // Placement of the modal

  @Output() closeModal = new EventEmitter<void>(); // Output event to close the modal

  getModalClasses(): string {
    const sizeClasses = {
      xs: 'min-w-[320px]',
      sm: 'min-w-[480px]',
      md: 'min-w-[640px]',
      lg: 'min-w-[800px]',
      xl: 'min-w-[960px]',
      '2xl': 'min-w-[1120px]',
      '3xl': 'min-w-[1280px]',
      '4xl': 'min-w-[1440px]',
      '5xl': 'min-w-[1600px]',
      full: 'w-full h-full',
    };

    const radiusClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    };

    const shadowClasses = {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    };

    const scrollClasses = {
      normal: '',
      inside: 'overflow-y-auto',
      outside: 'overflow-hidden',
    };

    return `${sizeClasses[this.size]} ${radiusClasses[this.radius]} ${
      shadowClasses[this.shadow]
    } ${scrollClasses[this.scrollBehavior]}`;
  }

  // Method to emit close event
  handleClose() {
    this.closeModal.emit();
  }
}
