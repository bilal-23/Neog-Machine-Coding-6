export type Restaurant = {
    id: number;
    name: string;
    cuisine_id: number;
    address: string;
    phone: string;
    menu: {
        name: string;
        imgSrc: string;
        price: number;
        qty: string;
    }[];
    ratings: {
        rating: number;
        comment: string;
        revName: string;
        pp: string;
    }[];
    averageRating: number;
    description: string;
};

export type Cuisine = {
    id: number;
    name: string;
    reviews: never[];
    averageRating: number;
}

export interface IDataContext {
    restaurants: Restaurant[];
    cuisines: Cuisine[];
    setCuisines: (cuisines: Cuisine[]) => void;
    setData: (data: Restaurant[]) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setReview: ({ restaurantId, rating, review, name }: { restaurantId: number, rating: number, review: string, name: string }) => void;
    selectedCuisine: number;
    setSelectedCuisine: (cuisineId: number) => void;
}
