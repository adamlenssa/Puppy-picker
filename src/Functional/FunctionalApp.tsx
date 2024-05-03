import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { TActiveTab, Dogs } from "../types";
import { Requests } from "../api";
import toast, { Toaster } from "react-hot-toast";

export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dogs[]>([]);
  const [activeTab, setActiveTab] = useState<TActiveTab>("all");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const favoritedDogs = allDogs.filter((dog) => dog.isFavorite);
  const unfavoritedDogs = allDogs.filter((dog) => !dog.isFavorite);

  const getAllDogs = () => {
    return Requests.getAllDogs()
      .then((res) => {
        setIsLoading(true);
        setAllDogs(res);
      })
      .catch((err) => {
        toast.error("error occured");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateDog = (dog: Dogs) => {
    setIsLoading(true);
    Requests.updateDog(dog)
      .then(() => getAllDogs())
      .then(() => toast.success("Success"))
      .catch((err) => {
        toast.error("error occured");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const deleteDog = (dog: Dogs) => {
    setIsLoading(true);
    Requests.deleteDog(dog)
      .then(() => getAllDogs())
      .then(() => toast.success(`Bye ${dog.name}`))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllDogs();
  }, []);

  return (
    <>
      <Toaster />
      <div className="App" style={{ backgroundColor: "skyblue" }}>
        <header>
          <h1>pup-e-picker (Functional)</h1>
        </header>
        <FunctionalSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          favoritedDogs={favoritedDogs}
          unfavortiedDogs={unfavoritedDogs}
        >
          {activeTab !== "form" && (
            <FunctionalDogs
              allDogs={allDogs}
              isLoading={isLoading}
              activeTab={activeTab}
              deleteDog={deleteDog}
              updateDog={updateDog}
              favoritedDogs={favoritedDogs}
              unfavoritedDogs={unfavoritedDogs}
            />
          )}
          {activeTab == "form" && (
            <FunctionalCreateDogForm
              getAllDogs={getAllDogs}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          )}
        </FunctionalSection>
      </div>
    </>
  );
}
