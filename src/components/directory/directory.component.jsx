import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "../../images/cap.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "../../images/jackets.jpg",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "../../images/sneakers.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "../../images/women.jpg",
          id: 4,
          size: "large",
        },
        {
          title: "mens",
          imageUrl: "../../images/men.png",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />;
        })}
      </div>
    );
  }
}

export default Directory;

/* We create a class because we need to store the 
state value of the menu items that we want to pass 
and create our menu item with*/
