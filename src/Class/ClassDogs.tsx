import { DogCard } from "../Shared/DogCard";
import { Component } from "react";
import { dogPictures } from "../dog-pictures";
import { Dogs, ShowState } from "../types";

// Right now these dogs are constant, but in reality we should be getting these from our server
export class ClassDogs extends Component<{
  allDogs: Dogs[];
  showState: ShowState;
}> {
  render() {
    const { allDogs, showState } = this.props;
    if (showState.allCards && !showState.favorited && !showState.unfavorited) {
      return (
        <>
          {allDogs.map((dog) => (
            <DogCard
              dog={dog}
              key={dog.id}
              onTrashIconClick={() => {
                alert("clicked trash");
              }}
              onHeartClick={() => {
                alert("clicked heart");
              }}
              onEmptyHeartClick={() => {
                alert("clicked empty heart");
              }}
              isLoading={false}
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
                  alert("clicked trash");
                }}
                onHeartClick={() => {
                  alert("clicked heart");
                }}
                onEmptyHeartClick={() => {
                  alert("clicked empty heart");
                }}
                isLoading={false}
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
                  alert("clicked trash");
                }}
                onHeartClick={() => {
                  alert("clicked heart");
                }}
                onEmptyHeartClick={() => {
                  alert("clicked empty heart");
                }}
                isLoading={false}
              />
            ))}
        </>
      );
    }
  }
}
