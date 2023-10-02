import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";
import { getDateFromTimeStamp } from "../../utils/getDateFromTimeStamp";
import { metricSystemOptions } from "../../utils/convertKelvins";
import Button from "@mui/material/Button";

const HourlyChar = () => {
  const { dayNumber } = useParams();
  const navigate = useNavigate();
  const { weatherData, metricSystem } = useOutletContext();

  const seriesData = weatherData?.[Number(dayNumber)]?.map((each) => {
    return metricSystemOptions?.[metricSystem]?.convert(each.main.temp);
  });

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      {seriesData ? (
        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: ["03", "06", "09", "12", "15", "18", "21", "00"],
            },
          ]}
          series={[
            {
              data: seriesData,
              label: `Daily Temperature: ${getDateFromTimeStamp(
                weatherData[dayNumber][0].dt
              )}`,
            },
          ]}
          width={500}
          height={300}
        />
      ) : (
        <p>No matching day</p>
      )}
    </div>
  );
};

export default HourlyChar;
