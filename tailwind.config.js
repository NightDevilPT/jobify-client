module.exports = {
  content: [
    './src/**/*.{html,ts}',  // Include Angular's HTML and TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        jobify: {
          default: 'var(--jobify-default)',
          '50': 'var(--jobify-default-50)',
          '100': 'var(--jobify-default-100)',
          '200': 'var(--jobify-default-200)',
          '300': 'var(--jobify-default-300)',
          '400': 'var(--jobify-default-400)',
          '500': 'var(--jobify-default-500)',
          '600': 'var(--jobify-default-600)',
          '700': 'var(--jobify-default-700)',
          '800': 'var(--jobify-default-800)',
          '900': 'var(--jobify-default-900)',

          primary: {
            DEFAULT: 'var(--jobify-primary)',
            '50': 'var(--jobify-primary-50)',
            '100': 'var(--jobify-primary-100)',
            '200': 'var(--jobify-primary-200)',
            '300': 'var(--jobify-primary-300)',
            '400': 'var(--jobify-primary-400)',
            '500': 'var(--jobify-primary-500)',
            '600': 'var(--jobify-primary-600)',
            '700': 'var(--jobify-primary-700)',
            '800': 'var(--jobify-primary-800)',
            '900': 'var(--jobify-primary-900)',
          },

          secondary: {
            DEFAULT: 'var(--jobify-secondary)',
            '50': 'var(--jobify-secondary-50)',
            '100': 'var(--jobify-secondary-100)',
            '200': 'var(--jobify-secondary-200)',
            '300': 'var(--jobify-secondary-300)',
            '400': 'var(--jobify-secondary-400)',
            '500': 'var(--jobify-secondary-500)',
            '600': 'var(--jobify-secondary-600)',
            '700': 'var(--jobify-secondary-700)',
            '800': 'var(--jobify-secondary-800)',
            '900': 'var(--jobify-secondary-900)',
          },

          success: {
            DEFAULT: 'var(--jobify-success)',
            '50': 'var(--jobify-success-50)',
            '100': 'var(--jobify-success-100)',
            '200': 'var(--jobify-success-200)',
            '300': 'var(--jobify-success-300)',
            '400': 'var(--jobify-success-400)',
            '500': 'var(--jobify-success-500)',
            '600': 'var(--jobify-success-600)',
            '700': 'var(--jobify-success-700)',
            '800': 'var(--jobify-success-800)',
            '900': 'var(--jobify-success-900)',
          },

          warning: {
            DEFAULT: 'var(--jobify-warning)',
            '50': 'var(--jobify-warning-50)',
            '100': 'var(--jobify-warning-100)',
            '200': 'var(--jobify-warning-200)',
            '300': 'var(--jobify-warning-300)',
            '400': 'var(--jobify-warning-400)',
            '500': 'var(--jobify-warning-500)',
            '600': 'var(--jobify-warning-600)',
            '700': 'var(--jobify-warning-700)',
            '800': 'var(--jobify-warning-800)',
            '900': 'var(--jobify-warning-900)',
          },

          danger: {
            DEFAULT: 'var(--jobify-danger)',
            '50': 'var(--jobify-danger-50)',
            '100': 'var(--jobify-danger-100)',
            '200': 'var(--jobify-danger-200)',
            '300': 'var(--jobify-danger-300)',
            '400': 'var(--jobify-danger-400)',
            '500': 'var(--jobify-danger-500)',
            '600': 'var(--jobify-danger-600)',
            '700': 'var(--jobify-danger-700)',
            '800': 'var(--jobify-danger-800)',
            '900': 'var(--jobify-danger-900)',
          },

          background: 'var(--jobify-background)',
          foreground: 'var(--jobify-foreground)',
          divider: 'var(--jobify-divider)',
          content: {
            '1': 'var(--jobify-content-1)',
            '2': 'var(--jobify-content-2)',
            '3': 'var(--jobify-content-3)',
            '4': 'var(--jobify-content-4)',
          },
        },
      },
    },
    container:{
      center:true
    }
  },
  plugins: [],
};
