import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ShowDonation = ({ getDonation }) => {
  const {
    id,
    image,
    category,
    title,
    card_background_color,
    category_background_color,
    text_color,
  } = getDonation;

  return (
    <Link to={`/donation/${id}`}>
      <div className="mx-auto">
        <div className={card_background_color}>
          <img src={image} alt="" />
          <div className="p-4">
            <h1
              className={`${category_background_color} px-1 py-[2px] w-[27%] text-xs text-center font-medium`}
            >
              {category}
            </h1>
            <h1 className={`${text_color} font-semibold pt-1`}>{title}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

ShowDonation.propTypes = {
  getDonation: PropTypes.object,
};

export default ShowDonation;
