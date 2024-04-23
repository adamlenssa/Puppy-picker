import { DogCard } from "../Shared/DogCard";
import { Dogs } from "../types";
import { Requests } from "../api";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogsFavorited = ({
  allDogs,
  getAllDogs,
  isLoading,
  isLoadingTrue,
  isLoadingFalse,
}: {
  allDogs: Dogs[];
  getAllDogs: () => void;
  isLoading: boolean;
  isLoadingTrue: () => void;
  isLoadingFalse: () => void;
}) => {
  const favorited = allDogs.filter((dog) => dog.isFavorite);
  return (
    <>
      {favorited.map((dog) => {
        const updateDog = () => {
          isLoadingTrue();
          Requests.updateDog(dog)
            .then(() => {
              getAllDogs();
            })
            .finally(() => isLoadingFalse());
          getAllDogs();
        };
        const deleteTheDog = () => {
          isLoadingTrue();
          Requests.deleteDog(dog)
            .then(() => {
              getAllDogs();
            })
            .finally(() => {
              isLoadingFalse();
            });
        };
        return (
          <DogCard
            dog={dog}
            onTrashIconClick={deleteTheDog}
            onEmptyHeartClick={updateDog}
            onHeartClick={updateDog}
            isLoading={isLoading}
            key={dog.id}
          />
        );
      })}
    </>
  );
};
