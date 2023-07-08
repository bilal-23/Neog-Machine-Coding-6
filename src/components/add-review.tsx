import { useDataContext } from "@/context/data-context";
import React from "react";

interface Props {
  setShowAddReview: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}
// Create An Ovverlay and a popup to add a review
const AddReview: React.FC<Props> = ({ setShowAddReview, id }) => {
  const { setReview } = useDataContext();
  const handleAddReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAddReview(false);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      name: string;
      rating: string;
      comment: string;
    };
    setReview({
      name: data.name,
      rating: +data.rating,
      restaurantId: id,
      review: data.comment,
    });
  };

  return (
    <>
      <div
        className=" fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-gray-900 bg-opacity-50 z-50
        blur-[2px] backdrop-blur-[2px]
        "
        onClick={() => setShowAddReview(false)}
      ></div>
      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-auto flex  z-50 p-12 border justify-start flex-col gap-4 
        bg-white rounded-lg shadow-lg text-black
    "
      >
        <div className="relative">
          <svg
            onClick={() => setShowAddReview(false)}
            className="w-5 h-5 absolute top-[0%] right-[0%] translate-x-[-50%] translate-y-[-50%] cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
          <p className="text-center w-full text-lg font-bold">
            Add your review
          </p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleAddReview}>
          <div className="flex flex-row gap-2 items-center w-full justify-between">
            <label
              className="text-md font-semibold min-w-[100px]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-400 flex-1 rounded-md p-2"
            />
          </div>
          <div className="flex flex-row gap-2 items-center  w-full justify-between">
            <label
              className="text-md font-semibold min-w-[100px]"
              htmlFor="rating"
            >
              Rating
            </label>
            <select className="w-full" name="rating">
              <option value="0" hidden>
                Select a rating
              </option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="flex flex-row gap-2 items-center  w-full justify-between">
            <label
              className="text-md font-semibold min-w-[100px]"
              htmlFor="comment"
            >
              Comment
            </label>
            <input
              type="text"
              name="comment"
              id="comment"
              className="border border-gray-400 flex-1 rounded-md p-2"
            />
          </div>
          <button className=" mt-5 bg-slate-700 hover:bg-slate-600 text-white font-ebold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out  ">
            Submit Your Review
          </button>
        </form>
      </div>
    </>
  );
};

export default AddReview;
