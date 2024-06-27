import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi
          alias ratione cupiditate, consequuntur neque inventore sit. Quas,
          atque iste ipsum molestiae exercitationem necessitatibus facere
          mollitia nisi nesciunt sed nostrum consequuntur neque inventore sit.
          Quas, atque iste ipsum molestiae exercitationem necessitatibus facere
          mollitia nisi nesciunt sed nostrum..
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptas
          minus alias, omnis aliquid amet, unde facere perferendis cum incidunt
          consequatur quam laboriosam commodi molestias accusantium voluptatibus
          beatae. Error, beatae?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
