import { Injectable } from '@angular/core';

// Enum for Sizes
export enum Size {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

// Enum for Radius
export enum Radius {
  None = 'none',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  Full = 'full',
}

// Enum for Button and Input Variants
export enum Variant {
  Solid = 'solid',
  Bordered = 'bordered',
  Light = 'light',
  Flat = 'flat',
  Faded = 'faded',
  Shadow = 'shadow',
  Ghost = 'ghost',
}

// Enum for Color Types
export enum Color {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Default = 'default',
}

@Injectable({
  providedIn: 'root',
})
export class TailwindHelperService {
  // Tailwind Size Class Helper
  getSizeClass(size: Size): string {
    return {
      [Size.Small]: 'text-sm py-1 px-3',
      [Size.Medium]: 'text-base py-2 px-4',
      [Size.Large]: 'text-lg py-3 px-5',
    }[size];
  }

  // Tailwind Radius Class Helper
  getRadiusClass(radius: Radius): string {
    return {
      [Radius.None]: 'rounded-none',
      [Radius.Small]: 'rounded-sm',
      [Radius.Medium]: 'rounded-md',
      [Radius.Large]: 'rounded-lg',
      [Radius.Full]: 'rounded-full',
    }[radius];
  }

  // Tailwind Variant and Color Class Helper for Buttons
  getVariantButtonClass(variant: Variant, color: Color): string {
    const classMap = {
      [Variant.Solid]: {
        [Color.Primary]:
          'bg-jobify-primary-500 text-white hover:bg-jobify-primary-600 ',
        [Color.Secondary]:
          'bg-jobify-secondary-500 text-white hover:bg-jobify-secondary-600 ',
        [Color.Success]:
          'bg-jobify-success-300 text-white hover:bg-jobify-success-500 ',
        [Color.Warning]:
          'bg-jobify-warning-500 text-black hover:bg-jobify-warning-600 ',
        [Color.Danger]:
          'bg-jobify-danger-500 text-white hover:bg-jobify-danger-600 ',
        [Color.Default]:
          'bg-jobify-default-500 text-white hover:bg-jobify-default-600 ',
      },
      [Variant.Bordered]: {
        [Color.Primary]:
          'border-2 border-jobify-primary-500 text-jobify-primary-500 hover:border-jobify-primary-600 hover:bg-jobify-primary-50',
        [Color.Secondary]:
          'border-2 border-jobify-secondary-500 text-jobify-secondary-500 hover:border-jobify-secondary-600 hover:bg-jobify-secondary-50',
        [Color.Success]:
          'border-2 border-jobify-success-500 text-jobify-success-500 hover:border-jobify-success-600 hover:bg-jobify-success-50',
        [Color.Warning]:
          'border-2 border-jobify-warning-500 text-jobify-warning-500 hover:border-jobify-warning-600 hover:bg-jobify-warning-50',
        [Color.Danger]:
          'border-2 border-jobify-danger-500 text-jobify-danger-500 hover:border-jobify-danger-600 hover:bg-jobify-danger-50',
        [Color.Default]:
          'border-2 border-jobify-default-500 text-jobify-default-500 hover:border-jobify-default-600 hover:bg-jobify-default-50',
      },
      [Variant.Light]: {
        [Color.Primary]:
          'bg-jobify-primary-50 text-jobify-primary-500 hover:bg-jobify-primary-100 ',
        [Color.Secondary]:
          'bg-jobify-secondary-50 text-jobify-secondary-500 hover:bg-jobify-secondary-100 ',
        [Color.Success]:
          'bg-jobify-success-50 text-jobify-success-500 hover:bg-jobify-success-100 ',
        [Color.Warning]:
          'bg-jobify-warning-50 text-jobify-warning-500 hover:bg-jobify-warning-100 ',
        [Color.Danger]:
          'bg-jobify-danger-50 text-jobify-danger-500 hover:bg-jobify-danger-100 ',
        [Color.Default]:
          'bg-jobify-default-50 text-jobify-default-500 hover:bg-jobify-default-100 ',
      },
      [Variant.Flat]: {
        [Color.Primary]:
          'bg-transparent text-jobify-primary-500 hover:bg-jobify-primary-50 ',
        [Color.Secondary]:
          'bg-transparent text-jobify-secondary-500 hover:bg-jobify-secondary-50 ',
        [Color.Success]:
          'bg-transparent text-jobify-success-500 hover:bg-jobify-success-50 ',
        [Color.Warning]:
          'bg-transparent text-jobify-warning-500 hover:bg-jobify-warning-50 ',
        [Color.Danger]:
          'bg-transparent text-jobify-danger-500 hover:bg-jobify-danger-50 ',
        [Color.Default]:
          'bg-transparent text-jobify-default-500 hover:bg-jobify-default-50 ',
      },
      [Variant.Faded]: {
        [Color.Primary]:
          'bg-jobify-primary-100 text-jobify-primary-500 hover:bg-jobify-primary-200 ',
        [Color.Secondary]:
          'bg-jobify-secondary-100 text-jobify-secondary-500 hover:bg-jobify-secondary-200 ',
        [Color.Success]:
          'bg-jobify-success-100 text-jobify-success-500 hover:bg-jobify-success-200 ',
        [Color.Warning]:
          'bg-jobify-warning-100 text-jobify-warning-500 hover:bg-jobify-warning-200 ',
        [Color.Danger]:
          'bg-jobify-danger-100 text-jobify-danger-500 hover:bg-jobify-danger-200 ',
        [Color.Default]:
          'bg-jobify-default-100 text-jobify-default-500 hover:bg-jobify-default-200 ',
      },
      [Variant.Shadow]: {
        [Color.Primary]:
          'shadow-lg shadow-jobify-primary-200 bg-jobify-primary-500 text-white hover:bg-jobify-primary-600',
        [Color.Secondary]:
          'shadow-lg shadow-jobify-secondary-200 bg-jobify-secondary-500 text-white hover:bg-jobify-secondary-600',
        [Color.Success]:
          'shadow-lg shadow-jobify-success-200 bg-jobify-success-300 text-white hover:bg-jobify-success-500',
        [Color.Warning]:
          'shadow-lg shadow-jobify-warning-200 bg-jobify-warning-500 text-black hover:bg-jobify-warning-600',
        [Color.Danger]:
          'shadow-lg shadow-jobify-danger-200 bg-jobify-danger-500 text-white hover:bg-jobify-danger-600',
        [Color.Default]:
          'shadow-lg shadow-jobify-default-200 bg-jobify-default-500 text-white hover:bg-jobify-default-600',
      },      
      [Variant.Ghost]: {
        [Color.Primary]:
          'bg-transparent text-jobify-primary-500 hover:bg-jobify-primary-50 ',
        [Color.Secondary]:
          'bg-transparent text-jobify-secondary-500 hover:bg-jobify-secondary-50 ',
        [Color.Success]:
          'bg-transparent text-jobify-success-500 hover:bg-jobify-success-50 ',
        [Color.Warning]:
          'bg-transparent text-jobify-warning-500 hover:bg-jobify-warning-50 ',
        [Color.Danger]:
          'bg-transparent text-jobify-danger-500 hover:bg-jobify-danger-50 ',
        [Color.Default]:
          'bg-transparent text-jobify-default-500 hover:bg-jobify-default-50 ',
      },
    };

    return `${classMap[variant][color]} transition-all duration-300`;
  }

  // Helper for input styling
  getVariantInputClass(variant: Variant, color: Color): string {
    const classMap: Partial<Record<Variant, Record<Color, string>>> = {
      [Variant.Bordered]: {
        [Color.Primary]:
          'border-2 border-jobify-primary-100 text-jobify-primary-200 hover:border-jobify-primary-200 hover:bg-jobify-primary-50 ',
        [Color.Secondary]:
          'border-2 border-jobify-secondary-100 text-jobify-secondary-200 hover:border-jobify-secondary-300 hover:bg-jobify-secondary-50 ',
        [Color.Success]:
          'border-2 border-jobify-success-100 text-jobify-success-200 hover:border-jobify-success-300 hover:bg-jobify-success-50 ',
        [Color.Warning]:
          'border-2 border-jobify-warning-100 text-jobify-warning-200 hover:border-jobify-warning-300 hover:bg-jobify-warning-50 ',
        [Color.Danger]:
          'border-2 border-jobify-danger-100 text-jobify-danger-200 hover:border-jobify-danger-300 hover:bg-jobify-danger-50 ',
        [Color.Default]:
          'border-2 border-jobify-default-100 text-jobify-default-200 hover:border-jobify-default-300 hover:bg-jobify-default-50 ',
      },
      [Variant.Flat]: {
        [Color.Primary]:
          'bg-transparent border-b-2 border-b-jobify-primary-300 text-jobify-primary-300 hover:bg-jobify-primary-50 ',
        [Color.Secondary]:
          'bg-transparent border-b-2 border-b-jobify-secondary-300 text-jobify-secondary-300 hover:bg-jobify-secondary-50 ',
        [Color.Success]:
          'bg-transparent border-b-2 border-b-jobify-success-300 text-jobify-success-300 hover:bg-jobify-success-50 ',
        [Color.Warning]:
          'bg-transparent border-b-2 border-b-jobify-warning-300 text-jobify-warning-300 hover:bg-jobify-warning-50 ',
        [Color.Danger]:
          'bg-transparent border-b-2 border-b-jobify-danger-300 text-jobify-danger-300 hover:bg-jobify-danger-50 ',
        [Color.Default]:
          'bg-transparent border-b-2 border-b-jobify-default-300 text-jobify-default-300 hover:bg-jobify-default-50 ',
      },
      [Variant.Faded]: {
        [Color.Primary]:
          'bg-jobify-primary-100 placeholder:text-jobify-primary-300 text-jobify-primary-500 hover:bg-jobify-primary-200 ',
        [Color.Secondary]:
          'bg-jobify-secondary-100 text-jobify-secondary-500 hover:bg-jobify-secondary-200 ',
        [Color.Success]:
          'bg-jobify-success-100 text-jobify-success-500 hover:bg-jobify-success-200 ',
        [Color.Warning]:
          'bg-jobify-warning-100 text-jobify-warning-500 hover:bg-jobify-warning-200 ',
        [Color.Danger]:
          'bg-jobify-danger-100 text-jobify-danger-500 hover:bg-jobify-danger-200 ',
        [Color.Default]:
          'bg-jobify-default-100 text-jobify-default-500 hover:bg-jobify-default-200 ',
      },
    };

    return `${classMap[variant]?.[color]} transition-all duration-300`;
  }
}
