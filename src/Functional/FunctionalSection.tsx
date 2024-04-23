// you can use this type for react children if you so choose
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ClassState, Dogs, ShowState } from "../types";

export const FunctionalSection = ({
  children,
  componentShow,
  setComponent,
  activeClass,
  setActiveClass,
  favorited,
  unfavorited,
}: {
  children: ReactNode;
  componentShow: ShowState;
  setComponent: React.Dispatch<React.SetStateAction<ShowState>>;
  activeClass: ClassState;
  setActiveClass: React.Dispatch<React.SetStateAction<ClassState>>;
  favorited: Dogs[];
  unfavorited: Dogs[];
}) => {
  const resetActiveClass = {
    favorited: "",
    unfavorited: "",
    createDog: "",
  };
  return (
    <section id="main-section">
      <div className="container-header">
        <div className="container-label">Dogs: </div>
        <Link to={"/class"} className="btn">
          Change to Class
        </Link>
        <div className="selectors">
          {/* This should display the favorited count */}
          <div
            className={`selector ${activeClass.favorited}`}
            onClick={() => {
              const params =
                activeClass.favorited == ""
                  ? { unfavorited: "", favorited: "active", createDog: "" }
                  : resetActiveClass;
              setActiveClass(params);
              const params2 = !componentShow.favorited
                ? {
                    favorited: true,
                    unfavorited: false,
                    allCards: false,
                    form: false,
                  }
                : {
                    favorited: false,
                    unfavorited: false,
                    allCards: true,
                    form: false,
                  };
              setComponent(params2);
            }}
          >
            favorited ( {favorited.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${activeClass.unfavorited}`}
            onClick={() => {
              const params =
                activeClass.unfavorited == ""
                  ? { unfavorited: "active", favorited: "", createDog: "" }
                  : resetActiveClass;
              setActiveClass(params);
              const params2 = !componentShow.unfavorited
                ? {
                    favorited: false,
                    unfavorited: true,
                    allCards: false,
                    form: false,
                  }
                : {
                    favorited: false,
                    unfavorited: false,
                    allCards: true,
                    form: false,
                  };
              setComponent(params2);
            }}
          >
            unfavorited ( {unfavorited.length} )
          </div>
          <div
            className={`selector ${activeClass.createDog}`}
            onClick={() => {
              const params =
                activeClass.createDog == ""
                  ? { unfavorited: "", favorited: "", createDog: "active" }
                  : resetActiveClass;
              setActiveClass(params);
              const params2 = !componentShow.form
                ? {
                    favorited: false,
                    unfavorited: false,
                    allCards: false,
                    form: true,
                  }
                : {
                    favorited: false,
                    unfavorited: false,
                    allCards: true,
                    form: false,
                  };
              setComponent(params2);
            }}
          >
            create dog
          </div>
        </div>
      </div>
      <div className="content-container">{children}</div>
    </section>
  );
};
