import React from "react";
import { Restaurant } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  dish: Restaurant["menu"][0];
  restaurantId: number;
  restaurantName: string;
}

// Card Component for Dish
const Dishes: React.FC<Props> = ({ dish, restaurantId, restaurantName }) => {
  return (
    <Link
      href={`/restaurant/${restaurantId}`}
      className="flex flex-col bg-slate-700 rounded-lg  w-80"
    >
      <img
        src={dish.imgSrc}
        alt={dish.name}
        width={300}
        height={300}
        loading="lazy"
        className="rounded-lgrounded-b-none w-full object-cover aspect-square"
      />
      <div className="p-5">
        <p className=" text-white text-xl font-semibold">{dish.name}</p>
        <p className="text-sm text-gray-400 mt-2">
          {dish.price} for {dish.qty}
        </p>
        <p className="text-sm italic text-gray-300">{restaurantName}</p>
      </div>
    </Link>
  );
};

export default Dishes;
