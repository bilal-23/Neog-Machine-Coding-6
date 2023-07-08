import { cuisineData, pp, restaurantsData } from "@/data";
import { Cuisine, IDataContext } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext<IDataContext>({
  restaurants: [],
  cuisines: [],
  setCuisines: (cuisines: Cuisine[]) => {},
  selectedCuisine: 0,
  setSelectedCuisine: (cuisine: number) => {},
  setData: (data: any) => {},
  loading: false,
  setLoading: (loading: boolean) => {},
  setReview: ({
    restaurantId,
    rating,
    review,
  }: {
    restaurantId: number;
    rating: number;
    review: string;
    name: string;
  }) => {},
});

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<IDataContext["restaurants"] | []>([]);
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(restaurantsData);
    setCuisines(cuisineData);
    setLoading(false);
  }, []);

  const setReview = ({
    restaurantId,
    rating,
    review,
    name,
  }: {
    restaurantId: number;
    rating: number;
    review: string;
    name: string;
  }) => {
    const newData = [...data];
    const index = newData.findIndex((item: any) => item.id === restaurantId);
    if (index === -1) return;
    const newReview = {
      rating,
      comment: review,
      revName: name,
      pp: pp[Math.floor(Math.random() * pp.length)],
    };
    // Push on 0th index to show latest review first
    newData[index].ratings.unshift(newReview);
    setData(newData);
  };

  const handleLoading = (loading: boolean) => {
    setLoading(loading);
  };

  const value = {
    restaurants: data,
    setData,
    loading,
    setLoading: handleLoading,
    setReview,
    cuisines,
    setCuisines,
    selectedCuisine,
    setSelectedCuisine,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;