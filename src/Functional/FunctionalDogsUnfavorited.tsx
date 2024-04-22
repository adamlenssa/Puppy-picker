import { DogCard } from "../Shared/DogCard";
import { Dogs } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogsUnfavorited = ({ allDogs }: { allDogs: Dogs[] }) => {
  const unfavorited = allDogs.filter((dog) => !dog.isFavorite);
  return (
    <>
      {unfavorited.map((dog) => (
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
