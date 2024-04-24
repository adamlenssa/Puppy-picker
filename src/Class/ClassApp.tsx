import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { ClassState, Dogs, ShowState } from "../types";
import { Requests } from "../api";
type State = {
  allDogs: Dogs[];
  componentShow: ShowState;
  activeClass: ClassState;
  isLoading: boolean;
};
export class ClassApp extends Component {
  state: State = {
    allDogs: [],
    componentShow: {
      form: false,
      favorited: false,
      unfavorited: false,
      allCards: true,
    },
    activeClass: {
      favorited: "",
      unfavorited: "",
      createDog: "",
    },
    isLoading: false,
  };
  componentDidMount(): void {
    Requests.getAllDogs().then((res) => this.setState({ allDogs: res }));
  }
  render() {
    const { allDogs, componentShow, activeClass, isLoading } = this.state;
    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection>
          {componentShow.allCards && (
            <ClassDogs allDogs={allDogs} showState={componentShow} />
          )}
          {componentShow.form && <ClassCreateDogForm />}
        </ClassSection>
      </div>
    );
  }
}
