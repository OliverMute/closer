import React, { Component } from "react";
import "./Search.styles.scss";

class Search extends Component {
  render() {
    return (
      <div className={"Search"}>
        <select name="" id="">
          <option value="">Toutes nos catégories</option>
        </select>
        <input type="text" placeholder={"rechercher"} />
        <i className="fas fa-search" />
      </div>
    );
  }
}

export default Search;
