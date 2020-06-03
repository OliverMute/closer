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
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "../../images/jackets.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "../../images/sneakers.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "../../images/women.jpg",
          id: 4,
          size: "large",
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "../../images/men.png",
          id: 5,
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps}) => {
          return (
            <MenuItem  key={id} {...otherSectionProps}  />
          );
        })}
      </div>
    );
  }
}

export default Directory;

/* We create a class because we need to store the 
state value of the menu items that we want to pass 
and create our menu item with*/

/*
...otherSectionProps -> same as
{this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => {
   return <MenuItem title={title} key={id}
   imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
*/