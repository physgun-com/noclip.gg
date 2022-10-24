const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const variableColor = (variable) => {
    const SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    const colors = {}

    SCALE.forEach(scale => {
        colors[scale] = ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== null) {
                return `rgba(var(--${variable}-${scale}), ${opacityValue ?? '1'})`
            }

            if (opacityVariable !== null) {
                return `rgba(var(--${variable}-${scale}), ${opacityVariable ?? '1'})`
            }

            return `rgb(var(--${variable}-${scale}))`
        }
    })

    return colors
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro,vue,ts}",
    "./public/**/*.{html,js,astro,vue,ts}",
    "./dist/**/*.{html,js,astro,vue,ts}",
  ],
    theme: {
        extend: {
            colors: {
                neutral: variableColor('neutral'),
                primary: variableColor('primary'),
                danger: variableColor('danger'),
                success: variableColor('primary'),
                warning: variableColor('danger'),
                gray: variableColor('neutral'),
            },
            fontSize: {
                base: defaultTheme.fontSize.sm,
                md: defaultTheme.fontSize.base
            },
            boxShadow: {
                inset: '0px 0px 2px 0px rgb(0, 0, 0, 0.40);',
            },
            dropShadow: {
                'colored-drop-shadow': '0 4px 4px rgba(var(--tw-shadow-color), 0.25)',
            },
            transitionDuration: {
                DEFAULT: '250ms'
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addUtilities, matchUtilities, theme }) {
            addUtilities({
                '.bg-overlay': {
                    'background': 'linear-gradient(var(--overlay-angle, 90deg), var(--overlay-colors)), var(--overlay-image)',
                    'background-position': 'center',
                    'background-size': 'cover',
                },
                '.bg-overlay-colors-dark': {
                    '--overlay-colors': 'rgba(var(--neutral-900),0.9) 60%, rgba(var(--neutral-900),0.7)'
                },
                '.bg-gradient-radial': {
                    'background-image': 'radial-gradient(var(--tw-gradient-stops))'
                  },
                  '.mask-gradient': {
                    'mask-image': 'linear-gradient(to top, transparent 5%, black 100%);'
                  }
            });
        }),
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
                },
                { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
            )
        },
    ],
    experimental: {
        optimizeUniversalDefaults: true
    }
};