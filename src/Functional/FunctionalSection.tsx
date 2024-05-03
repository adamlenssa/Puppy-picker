// you can use this type for react children if you so choose
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TActiveTab, Dogs } from "../types";

export const FunctionalSection = ({
  children,
  activeTab,
  setActiveTab,
  unfavortiedDogs,
  favoritedDogs,
}: {
  children: ReactNode;
  activeTab: TActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<TActiveTab>>;
  unfavortiedDogs: Dogs[];
  favoritedDogs: Dogs[];
}) => {
  const toggleTab = (tab: TActiveTab) => {
    if (tab === activeTab) {
      setActiveTab("all");
    } else {
      setActiveTab(tab);
    }
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
            className={`selector ${activeTab == "favorited" && "active"}`}
            onClick={() => {
              toggleTab("favorited");
            }}
          >
            favorited ( {favoritedDogs.length} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${activeTab == "unfavorited" && "active"}`}
            onClick={() => {
              toggleTab("unfavorited");
            }}
          >
            unfavorited ( {unfavortiedDogs.length} )
          </div>
          <div
            className={`selector ${activeTab == "form" && "active"}`}
            onClick={() => {
              toggleTab("form");
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
