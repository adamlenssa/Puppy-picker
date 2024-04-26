// you can use this type for react children if you so choose
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ClassState, Dogs } from "../types";

export const FunctionalSection = ({
  children,
  activeTab,
  setActiveTab,
  dogs,
  activeComponent,
  setActiveComponent,
}: {
  children: ReactNode;
  activeTab: ClassState;
  setActiveTab: React.Dispatch<React.SetStateAction<ClassState>>;
  dogs: Dogs[];
  activeComponent: 'dogs' | 'form';
  setActiveComponent:React.Dispatch<React.SetStateAction<"form" | "dogs">> 
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
            className={`selector ${activeComponent == 'dogs' && activeTab == 'favorited' && 'active'}`}
            onClick={() => {
              const body = activeTab !== 'favorited' ? 'favorited' : 'all';
              setActiveTab(body)
              setActiveComponent('dogs')
            }}
          >
            favorited ( {favoritedLength} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector ${activeComponent == 'dogs' && activeTab == 'unfavorited' && 'active'}`}
            onClick={() => {
              const body = activeTab !== 'unfavorited' ? 'unfavorited' : 'all';
              setActiveTab(body)
              setActiveComponent('dogs')
            }}
          >
            unfavorited ( {unfavoritedLength} )
          </div>
          <div
            className={`selector ${activeComponent == 'form' && 'active'}`}
            onClick={() => {
              const body = activeComponent == 'form' ? 'dogs' : 'form';
              const body2 = activeTab !== 'all' ? 'all': 'all';
              setActiveComponent(body)
              setActiveTab(body2)
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
