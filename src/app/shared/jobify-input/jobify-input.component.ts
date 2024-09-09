import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobify-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jobify-input.component.html',
  styleUrls: ['./jobify-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JobifyInputComponent),
      multi: true,
    },
  ],
})
export class JobifyInputComponent implements ControlValueAccessor {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() startIcon: string = ''; // Material Icon name
  @Input() endIcon: string = '';   // Material Icon name
  @Input() formControl!: FormControl;  // The form control passed from parent
  @Input() placeholder:string = ''

  // New Inputs for size and radius
  @Input() size: 'sm' | 'md' | 'lg' = 'md';  // Size input
  @Input() radius: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md'; // Radius input

  value: any = '';  // form control value
  disabled = false; // whether the input is disabled
  isPasswordVisible: boolean = false; // for password toggle

  // Toggle visibility for password type
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get inputType() {
    return this.type === 'password' && !this.isPasswordVisible ? 'password' : 'text';
  }

  // ControlValueAccessor methods
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Handle input change
  handleInputChange(event: any): void {
    const inputValue = event.target.value;
    this.value = inputValue;
    this.onChange(inputValue);
    this.onTouched();
  }

  // Get CSS classes for size
  getSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'text-sm py-1 px-2';
      case 'lg':
        return 'text-lg py-3 px-4';
      case 'md':
      default:
        return 'text-md py-2 px-3';
    }
  }

  // Get CSS classes for radius
  getRadiusClasses(): string {
    switch (this.radius) {
      case 'none':
        return 'rounded-none';
      case 'sm':
        return 'rounded-sm';
      case 'lg':
        return 'rounded-lg';
      case 'full':
        return 'rounded-full';
      case 'md':
      default:
        return 'rounded-md';
    }
  }

  // Method to get the highest priority error message
  getErrorMessage(): string | null {
    if (this.formControl?.errors) {
      if (this.formControl.errors['required']) {
        return 'This field is required.';
      } else if (this.formControl.errors['email']) {
        return 'Please enter a valid email.';
      } else if (this.formControl.errors['minlength']) {
        return `Minimum length is ${this.formControl.errors['minlength'].requiredLength}.`;
      }
    }
    return null;
  }
}
