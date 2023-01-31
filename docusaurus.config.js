// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HMDA Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_ukraine',
        content:
          '<div class="banner"><header class="banner-header"><div class="banner-inner"><img src="../img/favicon-57.png" alt="U.S. flag" /><p>An official website of the United States government</p></div></header></div>',
        isCloseable: false,
      },
      navbar: {
        logo: {
          alt: 'hmda-logo',
          src: 'img/ffiec-logo.svg',
        },
        items: [
          {
            to: 'https://ffiec.cfpb.gov/',
            label: 'Home Mortgate Disclousure Act',
            position: 'left',
            target: '_self',
            className: 'hmda-name',
          },
          {
            to: 'https://ffiec.cfpb.gov/',
            label: 'HOME',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/filing/2022/',
            label: 'FILING',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/data-browser/',
            label: 'DATA BROWSER',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/data-publication/',
            label: 'DATA PUBLICATION',
            position: 'right',
            target: '_self',
          },
          {
            to: 'https://ffiec.cfpb.gov/tools/',
            label: 'TOOLS',
            position: 'right',
            target: '_self',
          },
          {
            type: 'doc',
<<<<<<< HEAD
            docId: 'hmda-intro',
            position: 'right',
            label: 'DOCUMENTATION'
          },
          {
            to: 'https://ffiec.cfpb.gov/updates-notes',
            label: 'UPDATES',
            position: 'right',
            target: '_self',
          },
          // {
          //   type: 'doc',
          //   docId: 'graphs/index',
          //   position: 'left',
          //   label: 'HMDA APIs'
          // }
=======
            docId: 'api/graphs/index',
            position: 'left',
            label: 'HMDA APIs'
          }
>>>>>>> b7be07df6aa2ccac1a0edc6509f7cb8939971e02
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
