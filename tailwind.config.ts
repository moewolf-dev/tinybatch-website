import type { Config } from 'tailwindcss'

export default <Config>{
    theme: {
        extend: {
            colors: {
                retro: {
                    bg: '#f4ecd8', // Warm parchment beige
                    fg: '#2c2c2c', // Soft charcoal black
                    accent: '#c84b31', // Deep burnt orange/rust
                    border: '#3c3c3c', // Sharp border color
                }
            },
            fontFamily: {
                retro: ['"Courier Prime"', 'monospace'],
                serif: ['"Crimson Text"', 'serif'],
            },
            boxShadow: {
                retro: '4px 4px 0px 0px #3c3c3c',
                'retro-lg': '8px 8px 0px 0px #3c3c3c',
            }
        }
    }
}
