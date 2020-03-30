module.exports = {
    title: 'API 4programmers.net',
    tagline: 'Documentation for REST API of 4programmers.net',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/api-4p/',
    favicon: 'img/favicon.png',
    organizationName: 'Danon',
    projectName: 'api-4p',
    themeConfig: {
        sidebarCollapsible: false,
        navbar: {
            logo: {
                alt: '4programmers.net',
                src: 'img/logo.png',
            },
            links: [
                {
                    to: 'docs/login',
                    activeBasePath: 'docs',
                    label: 'API Docs',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/adam-boduch/coyote',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/style',
                        },
                        {
                            label: 'Getting started',
                            to: 'docs/login',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: '4programmers.net',
                            href: 'https://4programmers.net/',
                        },
                        {
                            label: "Swagger API",
                            href: "https://api.4programmers.net/"
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/adam-boduch/coyote',
                        },
                    ],
                },
            ]
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Danon/api-4p/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
    plugins: ['docusaurus-plugin-sass']
};
