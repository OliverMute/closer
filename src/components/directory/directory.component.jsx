import React from "react";
import MenuItem from "../menu-item/menu-item.component";

// Redux stuff

import { connect } from "react-redux";

// Redux selector

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

/* We create a class because we need to store the
state value of the menu items that we want to pass
and create our menu item with*/
/*
...otherSectionProps -> same as
{this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => {
   return <MenuItem title={title} key={id}
   imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
*/
