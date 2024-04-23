import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogsAll } from "./FunctionalDogsAll";
import { FunctionalSection } from "./FunctionalSection";
import { ShowState, ClassState, Dogs } from "../types";
import { FunctionalDogsFavorited } from "./FunctionalDogsFavorited";
import { FunctionalDogsUnfavorited } from "./FunctionalDogsUnfavorited";
import { Requests } from "../api";
import { Toaster } from "react-hot-toast";

export function FunctionalApp() {
  const [allDogs, setAllDogs] = useState<Dogs[]>([]);
  const [componentShow, SetComponentShow] = useState<ShowState>({
    form: false,
    favorited: false,
    unfavorited: false,
    allCards: true,
  });
  const [activeClass, setActiveClass] = useState<ClassState>({
    favorited: "",
    unfavorited: "",
    createDog: "",
  });
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
  const favorited = allDogs.filter((dog) => dog.isFavorite);
  const unfavorited = allDogs.filter((dog) => !dog.isFavorite);
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
          componentShow={componentShow}
          setComponent={SetComponentShow}
          activeClass={activeClass}
          setActiveClass={setActiveClass}
          favorited={favorited}
          unfavorited={unfavorited}
        >
          {componentShow.allCards && (
            <FunctionalDogsAll
              allDogs={allDogs}
              getAllDogs={getAllDogs}
              isLoading={isLoading}
              isLoadingFalse={isLoadingFalse}
              isLoadingTrue={isLoadingTrue}
            />
          )}
          {componentShow.favorited && (
            <FunctionalDogsFavorited
              allDogs={allDogs}
              getAllDogs={getAllDogs}
              isLoading={isLoading}
              isLoadingFalse={isLoadingFalse}
              isLoadingTrue={isLoadingTrue}
            />
          )}
          {componentShow.unfavorited && (
            <FunctionalDogsUnfavorited
              allDogs={allDogs}
              getAllDogs={getAllDogs}
              isLoading={isLoading}
              isLoadingFalse={isLoadingFalse}
              isLoadingTrue={isLoadingTrue}
            />
          )}
          {componentShow.form && (
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
