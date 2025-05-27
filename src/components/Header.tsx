"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, Phone } from "lucide-react";

export function Header() {
  return (
    <>
      {/* Top notification bar */}
      <div className="bg-triol-green text-white text-center py-2 text-sm">
        ТОВАРЫ ДЛЯ ЖИВОТНЫХ
      </div>

      {/* Cookie notice bar */}
      <div className="bg-triol-green text-white px-4 py-3 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <span className="flex-1 mr-4">
            Используя данный сайт, вы даете согласие на использование файлов cookie, помогающих нам сделать его удобнее для вас.{" "}
            <Link href="#" className="underline hover:no-underline">Подробнее</Link>
          </span>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-triol-green"
          >
            Принять и продолжить
          </Button>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/4105113753/233719191.svg"
                alt="Triol"
                width={80}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-triol-green hover:text-triol-light-green">
                    О БРЕНДЕ
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-triol-green hover:text-triol-light-green">
                    НОВИНКИ
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-triol-green hover:text-triol-light-green">
                    НОВОСТИ
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-triol-green hover:text-triol-light-green">
                    ГДЕ КУПИТЬ?
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-triol-green hover:text-triol-light-green">
                    КОНТАКТЫ
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search and CTA */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center relative">
                <Input
                  type="search"
                  placeholder="Поиск товаров..."
                  className="w-64 pr-10"
                />
                <Search className="absolute right-3 h-4 w-4 text-gray-400" />
              </div>

              {/* Where to buy button */}
              <Button
                variant="outline"
                className="hidden md:flex border-triol-green text-triol-green hover:bg-triol-green hover:text-white"
              >
                ГДЕ КУПИТЬ
              </Button>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col gap-4 mt-8">
                    <Link href="#" className="text-lg font-medium text-triol-green">О БРЕНДЕ</Link>
                    <Link href="#" className="text-lg font-medium text-triol-green">НОВИНКИ</Link>
                    <Link href="#" className="text-lg font-medium text-triol-green">НОВОСТИ</Link>
                    <Link href="#" className="text-lg font-medium text-triol-green">ГДЕ КУПИТЬ?</Link>
                    <Link href="#" className="text-lg font-medium text-triol-green">КОНТАКТЫ</Link>

                    <div className="mt-4">
                      <Input
                        type="search"
                        placeholder="Поиск товаров..."
                        className="w-full"
                      />
                    </div>

                    <Button className="bg-triol-green hover:bg-triol-green/90 text-white mt-4">
                      ГДЕ КУПИТЬ
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Product categories navigation */}
      <nav className="bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-4">
            <Link href="/dogs" className="flex items-center gap-2 text-triol-green hover:text-triol-light-green transition-colors">
              <Image
                src="https://ext.same-assets.com/4105113753/3728238369.svg"
                alt="Dogs"
                width={20}
                height={20}
              />
              <span className="font-medium">ТОВАРЫ ДЛЯ СОБАК</span>
            </Link>

            <Link href="/cats" className="flex items-center gap-2 text-triol-green hover:text-triol-light-green transition-colors">
              <Image
                src="https://ext.same-assets.com/4105113753/3410518322.svg"
                alt="Cats"
                width={20}
                height={20}
              />
              <span className="font-medium">ТОВАРЫ ДЛЯ КОШЕК</span>
            </Link>

            <Link href="/small-animals" className="flex items-center gap-2 text-triol-green hover:text-triol-light-green transition-colors">
              <Image
                src="https://ext.same-assets.com/4105113753/2349918548.svg"
                alt="Small Animals"
                width={20}
                height={20}
              />
              <span className="font-medium">ТОВАРЫ ДЛЯ МЕЛКИХ ЖИВОТНЫХ</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
