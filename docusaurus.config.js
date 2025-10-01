// @ts-check
const config = {
  title: 'Visualisierung & Datenaufbereitung',
  tagline: 'VIS3VO Course Materials',
  url: 'https://YOUR_GITHUB_USERNAME.github.io', // Replace with your GitHub username
  baseUrl: '/visdat-course-skeleton/', // Replace with your repository name
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YOUR_GITHUB_USERNAME', // Replace with your GitHub username
  projectName: 'visdat-course-skeleton', // Replace with your repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    ['@docusaurus/preset-classic', {
      docs: { 
        routeBasePath: '/', 
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/YOUR_GITHUB_USERNAME/visdat-course-skeleton/tree/main/',
      },
      blog: false, 
      theme: { 
        customCss: require.resolve('./src/css/custom.css')
      }
    }]
  ],
  themeConfig: {
    navbar: {
      title: 'VIS3VO',
      items: [
        {
          href: 'https://github.com/YOUR_GITHUB_USERNAME/visdat-course-skeleton',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Stefan Oberpeilsteiner. Built with Docusaurus.`,
    },
  },
};
module.exports = config;
