import React from "react";
import "./best-sellings.styles.scss";

const BestSellings = () => {
  return (
    <div className={"Best-selling-container"}>
      <h2>Nos meilleures ventes</h2>
      <div className={"Best-selling"}>
        <img src="../images/jacket_1.jpg" alt="" />
        <img src="../images/jacket_2.jpg" alt="" />
        <img src="../images/jacket_3.jpg" alt="" />
        <img src="../images/jacket_4.jpg" alt="" />
      </div>
    </div>
  );
};

export default BestSellings;
