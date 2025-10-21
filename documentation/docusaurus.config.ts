import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VS Code Documentation',
  tagline: 'VS Code documentation for ENGL 3085',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://natewashburn.is-a.dev',
  baseUrl: '/SoftwareDocumentationProject/',

  organizationName: 'ENGL 3085 Project',
  projectName: 'VS Code Documentation',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home Page',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/NateTheGreat1230/SoftwareDocumentationProject',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Installation Instructions',
              to: '/docs/category/installation-instructions',
            },
            {
              label: 'Customization - Layout & Themes',
              to: '/docs/category/layout-themes',
            },
            {
              label: 'Keyboard Shortcuts',
              to: '/docs/category/keyboard-shortcuts',
            },
          ],
        },
        {},
        {
          title: 'Other Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NateTheGreat1230/SoftwareDocumentationProject',
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 Nate Washburn.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
