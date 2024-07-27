"use client";

import React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu";

import Link from "next/link";
import { type MenuItem, menuList } from "./menu-item";
import Logo from "./logo/logo";
import SearchComponent from "./search/search";
import { Button } from "@/app/components/ui/button";
import { Heart, LucideShoppingCart } from "lucide-react";

const TopNav = () => {
  return (
    <header className="border-b-2">
      <div className="container flex items-center justify-between pb-[16px] pt-[40px]">
        <Logo />
        <NavigationMenu className="container">
          <NavigationMenuList>
            {menuList.map((item: MenuItem) => (
              <NavigationMenuItem key={item.id}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center justify-between gap-4">
          <SearchComponent />
          <Button variant="ghost" size="icon" className="h-[24px]">
            <Heart />
          </Button>
          <Button variant="ghost" size="icon" className="h-[24px]">
            <LucideShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
