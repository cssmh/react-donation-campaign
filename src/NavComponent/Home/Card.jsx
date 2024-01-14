import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ getDonation }) => {
  const { id, image, category, title, card_bg, category_bg, text_color } =
    getDonation;

  return (
    <div className="mx-auto">
      <Link to={`/details/${id}`}>
        <div style={{ backgroundColor: card_bg }}>
          <img src={image} alt="" />
          <div className="p-4">
            <h1
              style={{ backgroundColor: category_bg, color: text_color }}
              className="px-1 py-[2px] w-[27%] text-xs text-center font-medium"
            >
              {category}
            </h1>
            <h1 style={{ color: text_color }} className="font-semibold pt-1">
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  getDonation: PropTypes.object
};

export default Card;
