import { render, screen } from "@testing-library/react";
import DayCard from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Day Card", () => {
  const props = {
    data: {
      dt: 1696431600,
      main: {
        temp: 296.74,
        feels_like: 295.96,
        temp_min: 296.74,
        temp_max: 296.74,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 957,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 1.73,
        deg: 41,
        gust: 2.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-10-04 15:00:00",
    },
    dayIndex: "4",
    metricSystem: "kelvin",
  };
  test("day card renders correctly", () => {
    render(
      <BrowserRouter>
        <DayCard
          data={props.data}
          dayIndex={props.dayIndex}
          metricSystem={props.metricSystem}
        />
      </BrowserRouter>
    );

    const weatherDescriptionTxt = screen.getByText("scattered clouds");
    expect(weatherDescriptionTxt).toBeInTheDocument();
  });
});
