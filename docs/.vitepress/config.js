export default {
    title: 'Tinybatch Docs',
    description: 'Precision batch tools documentation.',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Main Site', link: 'https://tinybatch.dev' }
        ],
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'What is Tinybatch?', link: '/guide/' },
                    { text: 'Getting Started', link: '/guide/getting-started' }
                ]
            },
            {
                text: 'Tools',
                items: [
                    { text: 'IMG-OPTIMIZER', link: '/tools/img-optimizer' },
                    { text: 'CSV-TO-JSON', link: '/tools/csv-to-json' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/tinybatch' }
        ]
    }
}
