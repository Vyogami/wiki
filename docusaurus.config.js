// @Shivam Shandilya's suggested themes: palenight, vsDark, dracula(doesn't look good with global theme)
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

// add more languages here for syntax highlighting, refer to prism-react-renderer for more info
const prismLanguages = ["powershell", "groovy", "java", "docker", "yaml", "toml", "matlab"];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ripe",
  tagline: "Secret Vault of Knowledge",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://vyogami.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ripe/",

  // GitHub pages deployment config.
  organizationName: "vyogami", // Usually your GitHub org/user name.
  projectName: "ripe", // Usually your repo name.

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

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: false,
        explicitSearchResultPath: true,
      },
    ],
  ],

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
            "https://github.com/vyogami/ripe/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/vyogami/ripe/tree/main/",
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Ripe",
        logo: {
          alt: "ripe logo",
          src: "img/ripe.png",
        },
        items: [
          {
            to: "/",
            label: "Wiki",
            position: "left"
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left"
          },
          {
            href: "https://twitter.com/vyogami",
            position: "right",
            label: "🐦",
          },
          {
            href: 'https://github.com/vyogami/ripe',
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
