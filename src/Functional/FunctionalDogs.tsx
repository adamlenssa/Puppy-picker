import { DogCard } from "../Shared/DogCard";
import { ClassState, Dogs } from "../types";


// Right now these dogs are constant, but in reality we should be getting these from our server
export const FunctionalDogs = ({
  allDogs,
  isLoading,
  activeTab,
  updateDog,
  deleteDog,
}: {
  allDogs: Dogs[];
  isLoading: boolean;
  activeTab: ClassState;
  updateDog: (dog: Dogs) => void;
  deleteDog: (dog: Dogs) => void;

}) => {
  const favoritedDogs = allDogs.filter((dog) => dog.isFavorite)
  const unfavoritedDogs = allDogs.filter((dog) => !dog.isFavorite)
  return (
    //  the "<> </>"" are called react fragments, it's like adding all the html inside
    // without adding an actual html element
    <>
      {activeTab == 'all' && allDogs.map((dog) => 
        
          <DogCard
            dog={dog}
            onTrashIconClick={() => {
              deleteDog(dog)
            }}
            onEmptyHeartClick={() => {
              updateDog(dog)
            }}
            onHeartClick={() => {
              updateDog(dog)
            }}
            isLoading={isLoading}
            key={dog.id}
          />
        
      )}
      {activeTab == 'favorited' && favoritedDogs.map((dog) => 
          <DogCard
            dog={dog}
            onTrashIconClick={() => {
              deleteDog(dog)
            }}
            onEmptyHeartClick={() => {
              updateDog(dog)
            }}
            onHeartClick={() => {
              updateDog(dog)
            }}
            isLoading={isLoading}
            key={dog.id}
          />)}
      {activeTab == 'unfavorited' && unfavoritedDogs.map((dog) => <DogCard
            dog={dog}
            onTrashIconClick={() => {
              deleteDog(dog)
            }}
            onEmptyHeartClick={() => {
              updateDog(dog)
            }}
            onHeartClick={() => {
              updateDog(dog)
            }}
            isLoading={isLoading}
            key={dog.id}
          />)}
    </>
  );
};
