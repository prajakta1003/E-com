import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Elevate your style with our exclusive fashion range. Whether you're
          searching for the perfect outfit for a special occasion or updating
          your everyday wardrobe, our diverse collection ensures you'll always
          be on-trend.
        </p>
        <p>
          Whether it's a birthday, anniversary, or holiday celebration, finding
          the perfect gift is a breeze with our thoughtfully curated selection.
          Explore our gift guide to discover unique and meaningful presents that
          show your loved ones how much you care.
        </p>
      </div>
    </div>
  );
};
