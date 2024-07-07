import type { NavItems } from './types';

export const NAV_ITEMS: NavItems = {
  home: {
    path: '/',
    title: 'Alex Suevalov',
  },
  blog: {
    path: '/blog',
    title: 'Blog',
  },
  talks: {
    path: '/talks',
    title: 'Talks',
  },
};

export const SITE = {
  title: 'Alex Suevalov | Senior Product Engineer',
  description: "Alex Suevalov's personal website and blog",
  url: 'https://suevalov.com/',
  listDrafts: true,
  author: 'Alex Suevalov',
  themeColor: '#89bcfe', // Used for setting manifest
  userLinks: {
    gmail: {
      label: 'suevalov.me@gmail.com',
      href: 'mailto:suevalov.me@gmail.com',
      type: 'gmail',
    },
    twitter: {
      label: 'Twitter',
      href: 'https://twitter.com/suevalov',
      type: 'twitter',
    },
    github: {
      label: 'GitHub',
      href: 'https://github.com/suevalov',
      type: 'github',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/suevalov/',
      type: 'linkedin',
    },
  },
};

export const PAGE_SIZE = 20;
