"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Product Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Dogs Category */}
          <Link href="/dogs">
            <Card className="bg-triol-light-green rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-8 relative min-h-[180px]">
                <div className="flex items-center justify-between h-full">
                  <div>
                    <h2 className="text-white text-3xl font-bold leading-tight">
                      товары<br />
                      для собак
                    </h2>
                  </div>
                  <div className="relative">
                    <Image
                      src="https://ext.same-assets.com/4105113753/1676183807.jpeg"
                      alt="Dog"
                      width={140}
                      height={140}
                      className="rounded-full object-cover border-4 border-white/30"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Cats Category */}
          <Link href="/cats">
            <Card className="bg-triol-light-green rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-8 relative min-h-[180px]">
                <div className="flex items-center justify-between h-full">
                  <div>
                    <h2 className="text-white text-3xl font-bold leading-tight">
                      товары<br />
                      для кошек
                    </h2>
                  </div>
                  <div className="relative">
                    <Image
                      src="https://ext.same-assets.com/4105113753/3887909323.jpeg"
                      alt="Cat"
                      width={140}
                      height={140}
                      className="rounded-full object-cover border-4 border-white/30"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Main Promotional Banner */}
        <Card className="bg-gradient-to-r from-triol-green via-gray-800 to-black rounded-2xl overflow-hidden mb-8">
          <CardContent className="p-0 relative">
            <div className="flex items-center justify-between min-h-[400px]">
              <div className="p-8 text-white flex-1">
                <h1 className="text-5xl font-bold mb-4 leading-tight">
                  ИГРАЙ,<br />
                  как тебе<br />
                  нравится
                </h1>
                <p className="text-xl mb-6 opacity-90 font-medium">
                  ИГРУШКИ ДЛЯ КОШЕК<br />
                  НА ЛЮБОЙ ВКУС И ЦВЕТ
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Image
                      src="https://ext.same-assets.com/4105113753/233719191.svg"
                      alt="Triol Logo"
                      width={50}
                      height={50}
                      className="invert"
                    />
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white text-triol-green rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✓</span>
                      <span className="font-medium">БЕЗОПАСНОЕ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-white text-triol-green rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✓</span>
                      <span className="font-medium">КАЧЕСТВЕННОЕ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  src="https://ext.same-assets.com/4105113753/78172244.jpeg"
                  alt="Cat with toy"
                  width={500}
                  height={400}
                  className="object-cover rounded-l-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 animate-bounce">
                  <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-lg">🎾</span>
                  </div>
                </div>
                <div className="absolute bottom-12 right-16 animate-pulse">
                  <div className="bg-orange-400 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    <span className="text-xl">🥕</span>
                  </div>
                </div>
                <div className="absolute top-16 left-8 animate-bounce" style={{animationDelay: '0.5s'}}>
                  <div className="bg-pink-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    <span className="text-sm">🐭</span>
                  </div>
                </div>
                {/* Floating decorative lines */}
                <div className="absolute top-20 right-20 text-white text-2xl opacity-30">
                  ~~~~~
                </div>
                <div className="absolute bottom-20 left-20 text-white text-xl opacity-20">
                  ~~~
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
