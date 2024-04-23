import { Dogs } from "./types";

export const baseUrl = "http://localhost:3000";

export const Requests = {
  // should return a promise with all dogs in the database
  getAllDogs: () => fetch(`${baseUrl}/dogs`).then((data) => data.json()),
  // should create a dog in the database from a partial dog object
  // and return a promise with the result
  postDog: (information: Omit<Dogs, "id">) =>
    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
    }).then((response) => response.json()),
  // should delete a dog from the database
  deleteDog: (dog: Dogs) =>
    fetch(`http://localhost:3000/dogs/${dog.id}`, {
      method: "DELETE",
    }),
  updateDog: (dog: Dogs) => {
    const body = dog.isFavorite ? { isFavorite: false } : { isFavorite: true };
    return fetch(`${baseUrl}/dogs/${dog.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  },

  // Just a dummy function for use in the playground
  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
