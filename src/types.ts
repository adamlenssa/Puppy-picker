// Add your own custom types in here
export type Dogs = {
  name: string;
  image: string;
  description: string;
  isFavorite: boolean;
  id: number;
};

export type AllDogs = {
  allDogs: Dogs[];
};

export type ShowState = {
  form: boolean;
  favorited: boolean;
  unfavorited: boolean;
  allCards: boolean;
};

export type NewDog = {
  name: string;
  image: string;
  description: string;
  isFavorite: boolean;
};

export type TActiveTab = "favorited" | "unfavorited" | "form" | "all";
