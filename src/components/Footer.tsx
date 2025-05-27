"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-triol-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://ext.same-assets.com/4105113753/2697742785.svg"
                alt="Triol"
                width={100}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg mb-4">КОНТАКТЫ</h3>
              <p className="text-sm opacity-90">
                8 (499) 709-03-55
              </p>
              <p className="text-sm opacity-90">
                client@triol.pet
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image
                  src="https://ext.same-assets.com/4105113753/2118897315.svg"
                  alt="VK"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image
                  src="https://ext.same-assets.com/4105113753/1823826517.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" className="hover:opacity-75 transition-opacity">
                <Image
                  src="https://ext.same-assets.com/4105113753/2740498670.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">КАТАЛОГ ТОВАРОВ</h3>
            <div className="space-y-3">
              <Link href="/dogs" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                ТОВАРЫ ДЛЯ СОБАК
              </Link>
              <Link href="/cats" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                ТОВАРЫ ДЛЯ КОШЕК
              </Link>
              <Link href="/small-animals" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                ТОВАРЫ ДЛЯ МЕЛКИХ ЖИВОТНЫХ
              </Link>
            </div>
          </div>

          {/* Where to Buy */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ГДЕ КУПИТЬ</h3>
            <div className="space-y-3">
              <Link href="/shops" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                МАГАЗИНЫ
              </Link>
              <Link href="/shops" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                РАЗРАБОТКА САЙТА
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <div className="space-y-3">
              <Link href="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                О БРЕНДЕ
              </Link>
              <Link href="/news" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                НОВОСТИ
              </Link>
              <Link href="/agreement" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>© 2025 Все права защищены.</p>
          <p className="mt-2 md:mt-0">
            Дизайн сайта: <Link href="#" className="hover:opacity-100">Studio Name</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
