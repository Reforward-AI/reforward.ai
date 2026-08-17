type NavItem =
  | {
      type: 'link';
      href: string;
      label: string;
    }
  | {
      type: 'dropdown';
      label: string;
      items: {
        href: string;
        label: string;
      }[];
    };

export const navItems: NavItem[] = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'Features',
    href: '/#features',
  },
  {
    type: 'link',
    label: 'Why Us',
    href: '/#benefits',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
  },
];
