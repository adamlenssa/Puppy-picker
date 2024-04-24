import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ClassCreateDogForm } from "./ClassCreateDogForm";
import { Dogs, ShowState } from "../types";
import { Requests } from "../api";
import { Toaster } from "react-hot-toast";
type State = {
  allDogs: Dogs[];
  componentShow: ShowState;
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
    isLoading: false,
  };
  setAllDogs = () => {
    Requests.getAllDogs().then((res) => this.setState({ allDogs: res }));
  }
  activeClass = (info: ShowState) => {
    this.setState({ componentShow: info });
  };
  setIsLoading = (boolean: boolean) => {
    this.setState({isLoading: boolean})
  }
  componentDidMount(): void {
    this.setAllDogs()
  }

  render() {
    const { allDogs, componentShow, isLoading } = this.state;
    const amountOfDogs = [allDogs.filter((dog) => dog.isFavorite).length, allDogs.filter((dog) => !dog.isFavorite).length]
    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <Toaster />
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection
          componentShow={componentShow}
          activeClass={this.activeClass}
          amountOfDogs={amountOfDogs}
        >
          {componentShow.allCards && (
            <ClassDogs allDogs={allDogs} showState={componentShow} setAllDogs={this.setAllDogs} setIsLoading={this.setIsLoading} isLoading={isLoading} />
          )}
          {componentShow.form && <ClassCreateDogForm setAllDogs={this.setAllDogs} setIsLoading={this.setIsLoading} isLoading={isLoading} />}
        </ClassSection>
      </div>
    );
  }
}
