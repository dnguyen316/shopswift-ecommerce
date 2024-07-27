"use client";

import React from "react";
import crypto from "crypto";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";

type SubMenuItemLink = {
  id: string;
  text: string;
  href: string;
};

type SubMenuItem = {
  id: string;
  heading: string;
  children: SubMenuItemLink[];
};

type MenuItem = {
  id: string;
  title: string;
  href: string;
  description: string;
  subMenuItems?: SubMenuItem[];
};

const menuData: MenuItem[] = [
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Woman's Fashion",
    href: "/categories/woman",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    subMenuItems: [
      {
        id: crypto.randomBytes(64).toString("hex"),
        heading: "Brand",
        children: [
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Samsung",
            href: "/categories/electronics/samsung",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "IPhone",
            href: "/categories/electronics/iphone",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Xiaomi",
            href: "/categories/electronics/Xiaomi",
          },
        ],
      },
    ],
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Men's Fashion",
    href: "/categories/woman",
    description:
      "For sighted users to preview content available behind a link.",
    subMenuItems: [
      {
        id: crypto.randomBytes(64).toString("hex"),
        heading: "Brand",
        children: [
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Samsung",
            href: "/categories/electronics/samsung",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "IPhone",
            href: "/categories/electronics/iphone",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Xiaomi",
            href: "/categories/electronics/Xiaomi",
          },
        ],
      },
    ],
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Electronics",
    href: "/categories/electronics",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    subMenuItems: [
      {
        id: crypto.randomBytes(64).toString("hex"),
        heading: "Brand",
        children: [
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Samsung",
            href: "/categories/electronics/samsung",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "IPhone",
            href: "/categories/electronics/iphone",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Xiaomi",
            href: "/categories/electronics/Xiaomi",
          },
        ],
      },
    ],
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    title: "Home & LifeStyle",
    href: "/categories/home-lifestyle",
    description: "Visually or semantically separates content.",
    subMenuItems: [
      {
        id: crypto.randomBytes(64).toString("hex"),
        heading: "Brand",
        children: [
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Samsung",
            href: "/categories/electronics/samsung",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "IPhone",
            href: "/categories/electronics/iphone",
          },
          {
            id: crypto.randomBytes(64).toString("hex"),
            text: "Xiaomi",
            href: "/categories/electronics/Xiaomi",
          },
        ],
      },
    ],
  },
];

const CategoriesMenu: React.FC = () => {
  return (
    <aside className="w-fit border-r-2 pt-8">
      <NavigationMenu className="mr-4 w-[217px]">
        <NavigationMenuList className="flex-col items-start space-x-0">
          {menuData.map((menuItem: MenuItem) => (
            <NavigationMenuItem
              key={menuItem.id}
              className="mx-0 my-2 w-full space-x-0"
            >
              <a
                className="flex w-full max-w-[217px] justify-between leading-6"
                href={menuItem.href}
              >
                <NavigationMenuTrigger className="flex w-full items-center justify-between">
                  {menuItem.title}
                </NavigationMenuTrigger>
                {menuItem.subMenuItems && menuItem.subMenuItems.length > 0 && (
                  <NavigationMenuContent>
                    <div className="">
                      {menuItem.subMenuItems.map((item) => (
                        <div key={item.id} className="m-4 min-w-[300px]">
                          <h3 className="mb-2 text-base font-bold">
                            {item.heading}
                          </h3>
                          <ul className="space-y-1">
                            {item.children.length > 0 &&
                              item.children.map((subMenuLink) => (
                                <li key={subMenuLink.id}>
                                  <a
                                    href={subMenuLink.href}
                                    className="text-sm text-gray-700 hover:underline"
                                  >
                                    {subMenuLink.text}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                )}
              </a>
              {/* <NavigationMenuIndicator /> */}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </aside>
  );
};

export default CategoriesMenu;
