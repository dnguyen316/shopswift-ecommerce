import crypto from "crypto";

export type MenuItem = {
  id: string;
  title: string;
  href: string;
  description: string;
};

const menuList: MenuItem[] = [
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Home",
    href: "/",
    description: "Homepage",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Contact",
    href: "/contact",
    description: "Contact Page",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "About",
    href: "/about",
    description: "About Page",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Sign Up",
    href: "/sign-up",
    description: "Sign-up Page",
  },
];

export { menuList };
