import { Restaurant } from "@/types";
import React from "react";

interface Props {
  review: Restaurant["ratings"][0];
}

const Reviews: React.FC<Props> = ({ review }) => {
  return (
    <div className="flex flex-row justify-between px-3  border-b-2 border-gray-300 w-full pb-3">
      <div className="flex flex-col items-start">
        <div className="flex flex-row gap-2 items-center">
          <img src={review?.pp} alt="user" className="w-10 h-10 rounded-full" />
          <p className="text-md font-semibold">{review.revName}</p>
        </div>
        <p className="px-2 pt-2">{review.comment}</p>
      </div>
      <button className="flex items-center gap-2 rounded">
        {review.rating}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-white"
          viewBox="0 0 50 50"
        >
          <path d="M 25 1 A 1.0001 1.0001 0 0 0 24.068359 1.6386719 L 17.902344 17.535156 L 0.94921875 18.400391 A 1.0001 1.0001 0 0 0 0.3671875 20.173828 L 13.568359 30.966797 L 9.2324219 47.34375 A 1.0001 1.0001 0 0 0 10.740234 48.441406 L 25 39.289062 L 39.259766 48.441406 A 1.0001 1.0001 0 0 0 40.767578 47.34375 L 36.431641 30.966797 L 49.632812 20.173828 A 1.0001 1.0001 0 0 0 49.050781 18.400391 L 32.097656 17.535156 L 25.931641 1.6386719 A 1.0001 1.0001 0 0 0 25 1 z M 25 4.7636719 L 30.466797 18.861328 A 1.0001 1.0001 0 0 0 31.349609 19.498047 L 46.359375 20.265625 L 34.667969 29.826172 A 1.0001 1.0001 0 0 0 34.333984 30.855469 L 38.175781 45.369141 L 25.541016 37.257812 A 1.0001 1.0001 0 0 0 24.458984 37.257812 L 11.824219 45.369141 L 15.666016 30.855469 A 1.0001 1.0001 0 0 0 15.332031 29.826172 L 3.640625 20.265625 L 18.650391 19.498047 A 1.0001 1.0001 0 0 0 19.533203 18.861328 L 25 4.7636719 z" />
        </svg>
      </button>
    </div>
  );
};

export default Reviews;
