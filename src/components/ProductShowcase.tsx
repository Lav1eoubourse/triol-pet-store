"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "ИГРУШКИ",
    image: "https://ext.same-assets.com/4105113753/2375500313.jpeg",
    description: "С ЗАБОТОЙ О САМЫХ МАЛЕНЬКИХ",
    isNew: true,
  },
  {
    id: 2,
    title: "ИГРУШКИ",
    description: "ШЕРСТЬ И РОГА НАСТОЯЩЕГО БЛАГОРОДНОГО ОЛЕНЯ ДЛЯ МАЛЫХ КЛЫКОВ",
    image: "https://ext.same-assets.com/4105113753/1038261459.jpeg",
    isNew: true,
  },
  {
    id: 3,
    title: "Little Town",
    description: "ИГРУШЕЧНЫЙ ГОРОДОК ДЛЯ МАЛЕНЬКИХ ЛЮБИМЦЕВ",
    image: "https://ext.same-assets.com/4105113753/3800547816.jpeg",
    percentage: "100%",
    isNew: true,
  },
  {
    id: 4,
    title: "ТОВАРЫ ДЛЯ ЖИВОТНЫХ ТОРГОВОЙ МАРКИ TRIOL",
    description: "ДЛЯ МИНИ ХОМЯК",
    image: "https://ext.same-assets.com/4105113753/602966776.jpeg",
    isNew: true,
  },
];

export function ProductShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-triol-green">Новинки</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">01</span>
            <span className="text-sm text-gray-300">/04</span>
            <div className="flex gap-2 ml-4">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
                      НОВИНКА
                    </Badge>
                  )}
                  {product.percentage && (
                    <div className="absolute top-2 right-2 bg-triol-green text-white text-xs px-2 py-1 rounded">
                      {product.percentage}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-triol-green mb-2 text-sm">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-triol-green text-triol-green hover:bg-triol-green hover:text-white"
                  >
                    ПОДРОБНЕЕ
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
