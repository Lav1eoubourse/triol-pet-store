"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <Image
              src="https://ext.same-assets.com/4105113753/2568617712.jpeg"
              alt="Dog with Triol products"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl font-bold text-triol-green mb-6">
              Товары для животных<br />
              торговой марки<br />
              TRIOL
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Triol заботится о разнообразном досуге, комфорте,
              настроении и здоровье питомцев уже 21 год. За это
              время наша команда создала более 1 000 товаров
              для собак, кошек, грызунов и птиц, чтобы хозяева
              животных могли выбрать именно то, что лучше
              подходит каждому питомцу. Инновационные идеи
              способствуют расширению и улучшению коллекций, а
              любовь к животным вдохновляет нас создавать
              товары. Приглашаем тебя и твоего питомца стать частью
              нашего дружного сообщества.
            </p>

            <Button
              className="bg-triol-green hover:bg-triol-green/90 text-white px-8 py-3 rounded-full"
            >
              О БРЕНДЕ
            </Button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-5xl font-bold text-triol-green mb-2">4000</div>
            <div className="text-gray-500 uppercase tracking-wide">ТОВАРОВ</div>
          </div>

          <div>
            <div className="text-5xl font-bold text-triol-light-green mb-2">21 год</div>
            <div className="text-gray-500 uppercase tracking-wide">НА РЫНКЕ</div>
          </div>

          <div>
            <div className="text-5xl font-bold text-triol-light-green mb-2">4 вида</div>
            <div className="text-gray-500 uppercase tracking-wide">ЖИВОТНЫХ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
