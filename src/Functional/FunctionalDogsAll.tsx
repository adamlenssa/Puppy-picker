import { DogCard } from "../Shared/DogCard";
import { Dogs } from "../types";
import { Requests } from "../api";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogsAll = ({
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
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {allDogs.map((dog) => {
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
