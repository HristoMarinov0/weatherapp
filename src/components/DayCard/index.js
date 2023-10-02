import "./dayCard.css";
import { getDateFromTimeStamp } from "../../utils/getDateFromTimeStamp";
import { Link } from "react-router-dom";
import { metricSystemOptions } from "../../utils/convertKelvins";

const DayCard = ({ data, dayIndex, metricSystem }) => {
  const { dt, main, weather } = data;
  const date = getDateFromTimeStamp(dt);
  const { temp } = main;
  const { convert = (k) => 0, label = "" } =
    metricSystemOptions?.[metricSystem] || {};

  const { icon, description } = weather[0];

  return (
    <Link to={`daily/${dayIndex}`} style={{ textDecoration: "none" }}>
      <article>
        <div className="content">
          <p className="date">{date}</p>
          <p className="temp">{`${convert(temp)} ${label}`}&deg;</p>
          <div className="description-container">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="Icon"
            />
            <p className="description">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

/*
did not find alert property, but it would look like
 {alert && <p className='alert'>{alert}</p>} 
*/
export default DayCard;
