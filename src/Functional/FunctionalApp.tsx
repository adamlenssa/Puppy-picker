import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogs";
import { FunctionalSection } from "./FunctionalSection";
import { ClassState, Dogs } from "../types";
import { Requests } from "../api";
import { Toaster } from "react-hot-toast";

export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dogs[]>([]);
  const [activeComponent, setActiveComponent] = useState<'dogs' | 'form'>('dogs')
  const [activeTab, setActiveTab] = useState<ClassState>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isLoadingTrue = () => {
    setIsLoading(true);
  };
  const isLoadingFalse = () => {
    setIsLoading(false);
  };
  const getAllDogs = () => {
    Requests.getAllDogs()
      .then((res) => {
        isLoadingTrue;
        setAllDogs(res);
      })
      .finally(() => {
        isLoadingFalse;
      });
  };
  const updateDog = (dog: Dogs) => {
    setIsLoading(true)
    Requests.updateDog(dog)
      .then(() => {
        getAllDogs();
      })
      .finally(() => setIsLoading(false));
    getAllDogs();
  };
  const deleteDog = (dog: Dogs) => {
    setIsLoading(true)
    Requests.deleteDog(dog)
      .then(() => {
        getAllDogs();
      })
      .finally(() => {
        setIsLoading(false);
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
        <FunctionalSection activeTab={activeTab} setActiveTab={setActiveTab} activeComponent={activeComponent} setActiveComponent={setActiveComponent} dogs={allDogs}>
          {activeComponent == 'dogs' && (
            <FunctionalDogs
              allDogs={allDogs}
              isLoading={isLoading}
              activeTab={activeTab}
              deleteDog={deleteDog}
              updateDog={updateDog}
            />
          )}
          {activeComponent == 'form' && (
            <FunctionalCreateDogForm
              getAllDogs={getAllDogs}
              isLoading={isLoading}
              isLoadingFalse={isLoadingFalse}
              isLoadingTrue={isLoadingTrue}
            />
          )}
        </FunctionalSection>
      </div>
    </>
  );
}
