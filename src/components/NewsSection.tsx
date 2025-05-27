"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    date: "23 МАЯ 2025",
    title: "Фестиваль «Лапки» уже в эти выходные!",
    image: "https://ext.same-assets.com/4105113753/3969088336.jpeg",
    isFeatured: true,
  },
  {
    id: 2,
    date: "16 МАЯ 2025",
    title: "Можно ли стерли коты кошек?",
    image: "https://ext.same-assets.com/4105113753/1826665183.jpeg",
  },
  {
    id: 3,
    date: "12 АПРЕЛЯ 2025",
    title: "Как выбрать оптимальный ошейник и поводок для собаки?",
    image: "https://ext.same-assets.com/4105113753/3208762085.jpeg",
  },
  {
    id: 4,
    date: "23 АПРЕЛЯ 2025",
    title: "Вторая жизнь пластика: Triol представляет экологичную линейку аксессуаров для питомцев Love the Planet",
    image: "https://ext.same-assets.com/4105113753/2017187923.jpeg",
  },
];

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-triol-green">Последние новости</h2>
          <Link
            href="/news"
            className="flex items-center gap-2 text-triol-green hover:text-triol-light-green transition-colors"
          >
            <span className="text-sm font-medium">СМОТРЕТЬ ВСЕ</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm opacity-90 mb-2">{newsArticles[0].date}</div>
                  <h3 className="text-2xl font-bold mb-4">{newsArticles[0].title}</h3>
                  <Button
                    variant="outline"
                    className="bg-white/20 border-white text-white hover:bg-white hover:text-triol-green"
                  >
                    ПОДРОБНЕЕ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Articles */}
          <div className="space-y-6">
            {newsArticles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-32 h-24 flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <div className="text-xs text-gray-500 mb-2">{article.date}</div>
                      <h4 className="text-sm font-semibold text-triol-green line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
