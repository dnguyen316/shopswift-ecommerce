export type MenuItem = {
  id: string;
  title: string;
  href: string;
  description: string;
};

const menuList: MenuItem[] = [
  {
    id: "39rh319tfhqwfhwfaggega",
    title: "Home",
    href: "/",
    description: "Homepage",
  },
  {
    id: "39203tgsogohgh3qogqgqavn2130r",
    title: "Contact",
    href: "/contact",
    description: "Contact Page",
  },
  {
    id: "3qwfhuofhq98fh3qh9f3qhf9qhfoqh",
    title: "About",
    href: "/about",
    description: "About Page",
  },
  {
    id: "r231qr2r3rf3f32_ofthn32ofnh32o",
    title: "Sign Up",
    href: "/sign-up",
    description: "Sign-up Page",
  },
];

export { menuList };
