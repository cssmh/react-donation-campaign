import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationCard = ({ getCardDetails }) => {
  const {
    id,
    rectangle_image,
    category,
    title,
    card_bg,
    category_bg,
    text_color,
    price,
  } = getCardDetails;
  return (
    <div
      style={{ backgroundColor: card_bg }}
      className="flex items-center gap-4 mx-1 lg:mx-0"
    >
      <div>
        <img src={rectangle_image} alt="" />
      </div>
      <div>
        <p
          style={{ backgroundColor: category_bg, color: text_color }}
          className="w-[68px] px-1 py-[2px] text-center text-xs font-medium"
        >
          {category}
        </p>
        <h1 className="text-xl font-semibold pt-1">{title}</h1>
        <p style={{ color: text_color }} className="font-semibold">
          ${price}
        </p>
        <Link to={`/details/${id}`} state={title}>
          <button
            style={{ backgroundColor: text_color }}
            className="text-white font-semibold my-1 px-2 py-1 rounded-md text-sm"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  getCardDetails: PropTypes.object,
};

export default DonationCard;
