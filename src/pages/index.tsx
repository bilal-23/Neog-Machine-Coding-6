import Restaurant from "@/components/restaurant";
import { useDataContext } from "@/context/data-context";
import Head from "next/head";

export default function Home() {
  const { cuisines, selectedCuisine, setSelectedCuisine, restaurants } =
    useDataContext();
  return (
    <>
      <Head>
        <title>Food Ordering App</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center  px-24 py-12 bg-slate-500`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Food Ordering App</h1>
          <div className="flex justify-between mt-5">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.id}
                className={`
                bg-slate-700 hover:bg-slate-600 text-white font-ebold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${
                  selectedCuisine === cuisine.id ? "bg-slate-900" : ""
                }
            `}
                onClick={() => setSelectedCuisine(cuisine.id)}
              >
                {cuisine.name}
              </button>
            ))}
            <button
              className={`
                bg-slate-700 hover:bg-slate-600 text-white font-ebold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${
                  selectedCuisine === 0 ? "bg-slate-900" : ""
                }
            `}
              onClick={() => setSelectedCuisine(0)}
            >
              All
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 items-center mt-20">
          {restaurants.map((restaurant) => {
            return selectedCuisine === 0 ? (
              <Restaurant key={restaurant.id} restaurant={restaurant} />
            ) : (
              selectedCuisine === restaurant.cuisine_id && (
                <Restaurant key={restaurant.id} restaurant={restaurant} />
              )
            );
          })}
        </div>
      </main>
    </>
  );
}
