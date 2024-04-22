import { useState, useEffect } from "react";
import { FunctionalCreateDogForm } from "./FunctionalCreateDogForm";
import { FunctionalDogs } from "./FunctionalDogsAll";
import { FunctionalSection } from "./FunctionalSection";
import { AllDogs, ShowState, ClassState, Dogs } from "../types";
import { FunctionalDogsFavorited } from "./FunctionalDogsFavorited";

const getAllDogs = () =>
  fetch("http://localhost:3000/dogs").then((data) => data.json());

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
  useEffect(() => {
    getAllDogs().then(setAllDogs);
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "skyblue" }}>
      <header>
        <h1>pup-e-picker (Functional)</h1>
      </header>
      <FunctionalSection
        componentShow={componentShow}
        setComponent={SetComponentShow}
        activeClass={activeClass}
        setActiveClass={setActiveClass}
      >
        {componentShow.allCards && <FunctionalDogs allDogs={allDogs} />}
        {componentShow.favorited && (
          <FunctionalDogsFavorited allDogs={allDogs} />
        )}
        {componentShow.unfavorited && (
          <FunctionalDogsFavorited allDogs={allDogs} />
        )}
        {componentShow.form && (
          <FunctionalCreateDogForm getAllDogs={getAllDogs} />
        )}
      </FunctionalSection>
    </div>
  );
}
