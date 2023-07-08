import { Restaurant } from "@/types";
import React from "react";
import Dishes from "./dishes";
import Link from "next/link";

interface Props {
  restaurant: Restaurant;
}

const Restaurant: React.FC<Props> = ({ restaurant }) => {
  return (
    <div className="w-full">
      <Link
        href={`/restaurant/${restaurant.id}`}
        className="text-2xl font-bold text-white"
      >
        Dishes by {restaurant.name}
      </Link>
      <div className=" flex flex-row gap-5 mt-5">
        {restaurant.menu.map((dish) => {
          return (
            <Dishes
              key={dish.imgSrc}
              restaurantName={restaurant.name}
              dish={dish}
              restaurantId={restaurant.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurant;
