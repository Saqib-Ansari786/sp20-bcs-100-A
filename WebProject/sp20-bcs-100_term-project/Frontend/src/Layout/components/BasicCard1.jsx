import React from "react";

export default function BasicCard1() {
  return (
    <div class="group relative py-5">
      <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          class="h-full w-full object-cover object-center"
        />
      </div>
      <h3 class="mt-6 text-sm text-stone-300">
        <a href="#">
          <span class="absolute inset-0"></span>
          Desk and Office
        </a>
      </h3>
      <p class="text-base font-semibold text-white">
        Work from home accessories
      </p>
    </div>
  );
}
