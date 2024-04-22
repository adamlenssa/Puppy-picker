import { DogCard } from "../Shared/DogCard";
import { Dogs, ShowState } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({ allDogs }: { allDogs: Dogs[] }) => {
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {allDogs.map((dog) => (
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
