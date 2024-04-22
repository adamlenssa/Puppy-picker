import { DogCard } from "../Shared/DogCard";
import { Dogs } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogsFavorited = ({ allDogs }: { allDogs: Dogs[] }) => {
  const favorited = allDogs.filter((dog) => dog.isFavorite);

  return (
    <>
      {favorited.map((dog) => (
        <DogCard
          dog={dog}
          onTrashIconClick={alert}
          onEmptyHeartClick={alert}
          onHeartClick={alert}
          isLoading={false}
          key={dog.id}
        />
      ))}
    </>
  );
};
