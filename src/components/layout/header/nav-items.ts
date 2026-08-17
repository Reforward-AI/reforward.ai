export const navItems = [
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
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
