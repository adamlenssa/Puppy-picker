import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { NewDog } from "../types";

// use this as your default selected image
const defaultSelectedImage = dogPictures.BlueHeeler;

export const FunctionalCreateDogForm = ({
  getAllDogs,
}: {
  getAllDogs: () => Promise<any>;
}) => {
  const submitNewDog = (information: NewDog) => {
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
    });
  };
  const [newDog, setNewDog] = useState<NewDog>({
    name: "",
    image: "",
    description: "",
    isFavorite: false,
  });
  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        submitNewDog(newDog);
        getAllDogs();
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        disabled={false}
        onChange={(e) => {
          setNewDog({
            name: e.target.value,
            image: newDog.image,
            description: newDog.description,
            isFavorite: newDog.isFavorite,
          });
        }}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name=""
        id=""
        cols={80}
        rows={10}
        disabled={false}
        onChange={(e) => {
          setNewDog({
            name: newDog.name,
            image: newDog.image,
            description: e.target.value,
            isFavorite: newDog.isFavorite,
          });
        }}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        onChange={(e) => {
          setNewDog({
            name: newDog.name,
            image: e.target.value,
            description: newDog.description,
            isFavorite: newDog.isFavorite,
          });
        }}
        defaultValue={defaultSelectedImage}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          console.log(pictureValue);
          console.log(label);
          return (
            <option value={pictureValue} key={pictureValue}>
              {label}
            </option>
          );
        })}
      </select>
      <input type="submit" />
    </form>
  );
};
