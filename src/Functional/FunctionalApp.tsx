import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { ClassState, Dogs } from "../types";
import { Requests } from "../api";
import toast, { Toaster } from "react-hot-toast";

export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dogs[]>([]);
  const [activeTab, setActiveTab] = useState<ClassState>("all");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllDogs = () => {
    Requests.getAllDogs()
      .then((res) => {
        setIsLoading(true);
        setAllDogs(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateDog = (dog: Dogs) => {
    setIsLoading(true);
    Requests.updateDog(dog)
      .then(() => {
        getAllDogs();
      })
      .finally(() => toast.success("Success"));
  };

  const deleteDog = (dog: Dogs) => {
    setIsLoading(true);
    Requests.deleteDog(dog)
      .then(() => {
        getAllDogs();
      })
      .finally(() => {
        toast.success(`Bye ${dog.name}`);
      });
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
          dogs={allDogs}
        >
          {activeTab !== "form" && (
            <FunctionalDogs
              allDogs={allDogs}
              isLoading={isLoading}
              activeTab={activeTab}
              deleteDog={deleteDog}
              updateDog={updateDog}
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
