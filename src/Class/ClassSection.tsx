// you can use `ReactNode` to add a type to the children prop
import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ShowState } from "../types";

export class ClassSection extends Component<{ children: ReactNode, componentShow: ShowState, activeClass: (info: ShowState) => void, amountOfDogs: number[] }> {
  render() {
    const { children, componentShow, activeClass, amountOfDogs } = this.props;
    return (
      <section id="main-section">
        <div className="container-header">
          <div className="container-label">Dogs: </div>

          <Link to={"/functional"} className="btn">
            Change to Functional
          </Link>

          <div className="selectors">
            {/* This should display the favorited count */}
            <div className={`selector ${componentShow.allCards && componentShow.favorited && 'active'}`} onClick={() => {
              const body = componentShow.favorited ? {form: false,
                favorited: false,
                unfavorited: false,
                allCards: true,} : {form: false,
                  favorited: true,
                  unfavorited: false,
                  allCards: true,};
              activeClass(body)}}>
              favorited ( {amountOfDogs[0]} )
            </div>

            {/* This should display the unfavorited count */}
            <div className={`selector ${componentShow.allCards && componentShow.unfavorited && 'active'}`} onClick={() => {
              const body = componentShow.unfavorited ? {form: false,
                favorited: false,
                unfavorited: false,
                allCards: true,} : {form: false,
                  favorited: false,
                  unfavorited: true,
                  allCards: true,};
              activeClass(body)}}>
              unfavorited ( {amountOfDogs[1]} )
            </div>
            <div className={`selector ${componentShow.form && 'active'}`} onClick={() => {
              const body = componentShow.form ? {form: false,
                favorited: false,
                unfavorited: false,
                allCards: true,} : {form: true,
                  favorited: false,
                  unfavorited: false,
                  allCards: false,};
              activeClass(body)
            }}>
              create dog
            </div>
          </div>
        </div>
        <div className="content-container">{children}</div>
      </section>
    );
  }
}
