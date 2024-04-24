import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { Dogs, ShowState } from "../types";
import { Requests } from "../api";

// Right now these dogs are constant, but in reality we should be getting these from our server
export class ClassDogs extends Component<{
  allDogs: Dogs[];
  showState: ShowState;
  setAllDogs: () => void;
  setIsLoading: (boolean: boolean) => void
  isLoading: boolean;
}> {
  render() {
    const { allDogs, showState, setAllDogs, setIsLoading, isLoading } = this.props;
    if (showState.allCards && !showState.favorited && !showState.unfavorited) {
      return (
        <>
          {allDogs.map((dog) => (
            <DogCard
              dog={dog}
              key={dog.id}
              onTrashIconClick={() => {
                setIsLoading(true)
                Requests.deleteDog(dog).then(() => setAllDogs()).finally(()=> setIsLoading(false))
              }}
              onHeartClick={() => {
                setIsLoading(true)
                Requests.updateDog(dog).then(() => setAllDogs()).finally(()=> setIsLoading(false))
              }}
              onEmptyHeartClick={() => {
                setIsLoading(true)
                Requests.updateDog(dog).then(() => setAllDogs()).finally(()=> setIsLoading(false))
              }}
              isLoading={isLoading}
            />
          ))}
        </>
      );
    } else if (
      showState.allCards &&
      showState.favorited &&
      !showState.unfavorited
    ) {
      return (
        <>
          {allDogs
            .filter((dog) => dog.isFavorite)
            .map((dog) => (
              <DogCard
              dog={dog}
              key={dog.id}
              onTrashIconClick={() => {
                setIsLoading(true)
                Requests.deleteDog(dog).then(() => setAllDogs()).finally(()=> setIsLoading(false))
              }}
              onHeartClick={() => {
                setIsLoading(true)
                Requests.updateDog(dog).then(() => setAllDogs()).finally(()=> setIsLoading(false))
              }}
              onEmptyHeartClick={() => {
                setIsLoading(true)
                Requests.updateDog(dog).then(() => setAllDogs()).finally(()=> setIsLoading(false))
              }}
              isLoading={isLoading}
              />
            ))}
        </>
      );
    } else if (
      showState.allCards &&
      showState.unfavorited &&
      !showState.favorited
    ) {
      return (
        <>
          {allDogs
            .filter((dog) => !dog.isFavorite)
            .map((dog) => (
              <DogCard
              dog={dog}
              key={dog.id}
              onTrashIconClick={() => {
                setIsLoading(true)
                Requests.deleteDog(dog).then(() => {setAllDogs()}).finally(()=> setIsLoading(false))
              }}
              onHeartClick={() => {
                setIsLoading(true)
                Requests.updateDog(dog).then(() => {setAllDogs()}).finally(()=> setIsLoading(false))
              }}
              onEmptyHeartClick={() => {
                setIsLoading(true)
                Requests.updateDog(dog).then(() => {setAllDogs()}).finally(()=> setIsLoading(false))
              }}
              isLoading={isLoading}
              />
            ))}
        </>
      );
    }
  }
}
