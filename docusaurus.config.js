// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @Shivam Shandilya's suggested themes: palenight, vsDark, dracula(doesn't look good with global theme)
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

// add more languages here for syntax highlighting, refer to prism-react-renderer for more info
const prismLanguages = ["powershell", "groovy", "java", "docker", "yaml", "toml"];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vyogami",
  tagline: "Secret Vault of Knowledge",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://legitshivam.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/vyogami/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "legitShivam", // Usually your GitHub org/user name.
  projectName: "vyogami", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/legitShivam/vyogami/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/legitShivam/vyogami/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Vyogami",
        logo: {
          alt: "vyogami logo",
          src: "img/vyogami.png",
        },
        items: [
          {
            to: "/blog",
            label: "Blog",
            position: "left"
          },
          {
            href: "https://twitter.com/legitShivam",
            position: "right",
            label: "🐦",
          },
          {
            href: 'https://github.com/legitShivam/vyogami',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: prismLanguages,
      },
    }),
};

module.exports = config;
