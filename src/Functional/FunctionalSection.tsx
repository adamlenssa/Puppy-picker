// you can use this type for react children if you so choose
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ClassState, Dogs } from "../types";

export const FunctionalSection = ({
  children,
  activeTab,
  setActiveTab,
  dogs,
}: {
  children: ReactNode;
  activeTab: ClassState;
  setActiveTab: React.Dispatch<React.SetStateAction<ClassState>>;
  dogs: Dogs[];
}) => {
  const favoritedLength = dogs.filter((dog) => dog.isFavorite).length;
  const unfavoritedLength = dogs.filter((dog) => !dog.isFavorite).length;
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
            className={`selector ${activeTab == "favorited" && "active"}`}
            onClick={() => {
              const body = activeTab !== "favorited" ? "favorited" : "all";
              setActiveTab(body);
            }}
          >
            favorited ( {favoritedLength} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${activeTab == "unfavorited" && "active"}`}
            onClick={() => {
              const body = activeTab !== "unfavorited" ? "unfavorited" : "all";
              setActiveTab(body);
            }}
          >
            unfavorited ( {unfavoritedLength} )
          </div>
          <div
            className={`selector ${activeTab == "form" && "active"}`}
            onClick={() => {
              const body2 = activeTab !== "form" ? "form" : "all";
              setActiveTab(body2);
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
