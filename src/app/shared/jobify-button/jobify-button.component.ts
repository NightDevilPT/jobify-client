import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Size, Radius, Variant, Color, TailwindHelperService } from '../../service/tailwind-helper/tailwind-helper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobify-button',
  templateUrl: './jobify-button.component.html',
  styleUrls: ['./jobify-button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class JobifyButtonComponent {
  @Input() size: Size = Size.Medium;
  @Input() radius: Radius = Radius.Medium;
  @Input() variant: Variant = Variant.Solid;
  @Input() color: Color = Color.Default;
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  // Input for start and end content (Material Icon names)
  @Input() startContent?: string | null = null;
  @Input() endContent?: string | null = null;

  // Output to emit a custom event when the button is clicked
  @Output() buttonClick = new EventEmitter<Event>();

  constructor(private tailwindHelperService: TailwindHelperService, private el: ElementRef) {}

  getButtonClasses(): string {
    const sizeClass = this.tailwindHelperService.getSizeClass(this.size);
    const radiusClass = this.tailwindHelperService.getRadiusClass(this.radius);
    const variantClass = this.tailwindHelperService.getVariantButtonClass(this.variant, this.color);
    return `${sizeClass} ${radiusClass} ${variantClass} relative overflow-hidden flex justify-center items-center ${
      this.disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;
  }

  // Method to handle button clicks, emit event, and create ripple effect
  onClick(event: MouseEvent) {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }  
}
