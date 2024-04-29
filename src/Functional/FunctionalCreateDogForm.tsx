import { useState } from "react";
import { dogPictures } from "../dog-pictures";
import { NewDog } from "../types";
import { Requests } from "../api";
import toast from "react-hot-toast";

// use this as your default selected image
const defaultSelectedImage = dogPictures.BlueHeeler;

export const FunctionalCreateDogForm = ({
  getAllDogs,
  isLoading,
  setIsLoading,
}: {
  getAllDogs: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [newDog, setNewDog] = useState<NewDog>({
    name: "",
    image: defaultSelectedImage,
    description: "",
    isFavorite: false,
  });

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
        Requests.postDog(newDog)
          .then(() => {
            getAllDogs();
            setNewDog({
              name: "",
              image: defaultSelectedImage,
              description: "",
              isFavorite: false,
            });
            toast.success("Thank you for creating a dog!!");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        value={newDog.name}
        disabled={isLoading}
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
        value={newDog.description}
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
        defaultValue={dogPictures.BlueHeeler}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
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
