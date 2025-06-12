import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Projects", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <header className="w-full bg-dark py-8 px-[100px]">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto">
        {/* Logo */}
        <div className="h-8 w-[46px] relative">
          <div className="absolute w-[9px] h-8 top-0 left-0 bg-white" />
          <div className="absolute w-[9px] h-8 top-0 left-6 bg-white" />
          <div className="absolute w-3 h-3 top-px left-[11px] bg-white rounded-[5.93px]" />
          <div className="absolute w-3 h-3 top-[19px] left-[34px] bg-white rounded-[5.93px]" />
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex space-x-0">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={`inline-flex items-center justify-center px-6 py-2 rounded-3xl ${
                    item.active
                      ? "bg-white text-dark"
                      : "text-white hover:bg-white/10"
                  } font-['Syne',Helvetica] text-base leading-5`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hire Me Button */}
        <Button
          variant="outline"
          className="rounded-[100px] border-white text-white font-['Syne',Helvetica] font-medium text-sm leading-6"
        >
          HIRE ME
        </Button>
      </div>
    </header>
  );
};
