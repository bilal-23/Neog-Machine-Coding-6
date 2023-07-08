import AddReview from "@/components/add-review";
import Reviews from "@/components/reviews";
import { useDataContext } from "@/context/data-context";
import { Restaurant } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const RestaurantId = () => {
  const { restaurants } = useDataContext();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [showAddReview, setShowAddReview] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id as string;
    const restaurant = restaurants.find((r) => r.id === parseInt(id));
    setRestaurant(restaurant);
  }, [restaurants, router.query.id]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center  px-24 py-12 bg-slate-500`}
    >
      {showAddReview && restaurant && (
        <AddReview setShowAddReview={setShowAddReview} id={restaurant?.id} />
      )}
      <button
        onClick={() => router.back()}
        className={`text-2xl font-bold text-white fixed top-5 left-5 w-10 h-10 cursor-pointertransition-all opacity-80 hover:opacity hover:scale-105  duration-300 ease-in-out  rounded-full flex items-center justify-center`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 20.875 16 C 20.652344 16.023438 20.441406 16.125 20.28125 16.28125 L 12.4375 24.15625 L 12.34375 24.1875 C 12.320313 24.207031 12.300781 24.226563 12.28125 24.25 L 12.28125 24.28125 C 12.257813 24.300781 12.238281 24.320313 12.21875 24.34375 C 12.195313 24.363281 12.175781 24.382813 12.15625 24.40625 C 12.15625 24.417969 12.15625 24.425781 12.15625 24.4375 C 12.132813 24.457031 12.113281 24.476563 12.09375 24.5 C 12.09375 24.511719 12.09375 24.519531 12.09375 24.53125 C 12.03125 24.636719 11.988281 24.753906 11.96875 24.875 C 11.96875 24.886719 11.96875 24.894531 11.96875 24.90625 C 11.96875 24.9375 11.96875 24.96875 11.96875 25 C 11.96875 25.019531 11.96875 25.042969 11.96875 25.0625 C 11.96875 25.074219 11.96875 25.082031 11.96875 25.09375 C 11.984375 25.226563 12.027344 25.351563 12.09375 25.46875 C 12.101563 25.488281 12.113281 25.511719 12.125 25.53125 C 12.136719 25.542969 12.144531 25.550781 12.15625 25.5625 C 12.164063 25.582031 12.175781 25.605469 12.1875 25.625 C 12.199219 25.636719 12.207031 25.644531 12.21875 25.65625 C 12.230469 25.667969 12.238281 25.675781 12.25 25.6875 C 12.261719 25.699219 12.269531 25.707031 12.28125 25.71875 C 12.335938 25.777344 12.398438 25.832031 12.46875 25.875 L 20.28125 33.71875 C 20.679688 34.117188 21.320313 34.117188 21.71875 33.71875 C 22.117188 33.320313 22.117188 32.679688 21.71875 32.28125 L 15.4375 26 L 37 26 C 37.359375 26.003906 37.695313 25.816406 37.878906 25.503906 C 38.058594 25.191406 38.058594 24.808594 37.878906 24.496094 C 37.695313 24.183594 37.359375 23.996094 37 24 L 15.4375 24 L 21.71875 17.71875 C 22.042969 17.417969 22.128906 16.941406 21.933594 16.546875 C 21.742188 16.148438 21.308594 15.929688 20.875 16 Z" />
        </svg>
      </button>

      <div className="w-full mt-10 p-12">
        <div className="flex justify-between border-b pb-5">
          <div className="flex flex-col items-start gap-[2px]">
            <h1 className="text-3xl font-bold">{restaurant?.name}</h1>
            <p className="text-md">{restaurant?.description}</p>
            <address className="text-sm">{restaurant?.address}</address>
            <p className="text-sm">
              Average Rating: {restaurant?.averageRating}
            </p>
          </div>
          <div className="flex items-center">
            <button
              className="  bg-slate-700 hover:bg-slate-600 text-white font-ebold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out                "
              onClick={() => setShowAddReview(true)}
            >
              Add Review
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mt-10">Reviews</h2>
          <div className="flex flex-col gap-5 mt-5 w-full">
            {restaurant?.ratings?.reverse().map((rating) => {
              return <Reviews key={rating.id} review={rating} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RestaurantId;
