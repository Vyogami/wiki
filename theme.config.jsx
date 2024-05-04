import { useRouter } from 'next/router';
import { Logo } from './components/Logo.tsx';
import { NavbarWrapper } from './components/NavbarWrapper.tsx';

import { Linkedin, Search } from 'lucide-react';

export default {
  docsRepositoryBase:
    'https://github.com/vyogami/wiki/blob/main/',
  logo: () => <Logo />,
  feedback: { content: null },
  project: {
    link: 'https://github.com/vyogami',
  },
  chat: {
    icon: <Linkedin/>,
    link: 'https://linkedin.com/in/vyogami',
  },
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="48x48" />
        <link rel="apple-touch-icon"  href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="description" content="I'm Shivam Shandilya aka Vyogami, I'm a devloper, designer and an engineer in training!" />
        <meta property="og:title" content="Shivam Shandilya | Vyogami" />
        <meta property="og:description" content="I'm Shivam Shandilya aka Vyogami, I'm a devloper, designer and an engineer in training!" />
        <meta property="og:url" content="https://vyogami.co" />
        <meta property="og:image" content="https://vyogami.co/og-slogan.png" />
        <meta name="twitter:title" content="Shivam Shandilya | Vyogami" />
        <meta name="twitter:description" content="I'm Shivam Shandilya aka Vyogami, I'm a devloper, designer and an engineer in training!" />
        <meta name="twitter:site" content="@vyogami" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vyogami.co/og-slogan.png" />
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: null,
  navbar: {
    component: NavbarWrapper,
  },
  footer: {
    component: <></>
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath !== '/' ? '%s – Vyogami' : 'Vyogami',
    };
  },
  search: {
    placeholder: "Search Personal Wiki",
  },
};
