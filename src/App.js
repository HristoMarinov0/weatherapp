import "./App.css";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DayCard from "./components/DayCard";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useWeather from "./hooks/useWeather";
import useMetricSystem from "./hooks/useMetricSystem";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const { weatherData, error } = useWeather();
  const { metricSystem, setMetricSystem, error: errorDb } = useMetricSystem();

  const { pathname } = useLocation();

  const handleChange = (e) => {
    setMetricSystem(e.target.value);
  };

  if (error || errorDb) {
    return <h1>{error}</h1>;
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      <div className="content">
        <h1 className="heading">Weather App</h1>
        {pathname === "/" ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FormControl sx={{ m: 2, minWidth: 220 }}>
                <Select
                  labelId="select-metric"
                  id="select-metric"
                  value={metricSystem}
                  onChange={handleChange}
                  SelectDisplayProps={{ "data-testid": "select" }}
                >
                  <MenuItem value="kelvin">Kelvin</MenuItem>
                  <MenuItem value="celsius">Celsius</MenuItem>
                  <MenuItem value="fahrenheit">Fahrenheit</MenuItem>
                </Select>
                <FormHelperText>Select metric system</FormHelperText>
              </FormControl>
            </div>
            <main className="grid">
              {Object.keys(weatherData).map((key, index) => (
                <DayCard
                  key={index}
                  data={weatherData[key][0]} // since the api is weird use just the first el for simplicity, you can use reduce to get some averages
                  dayIndex={key}
                  metricSystem={metricSystem}
                />
              ))}
            </main>
          </>
        ) : (
          <Outlet context={{ weatherData, metricSystem }} />
        )}
      </div>
    </Suspense>
  );
}

export default App;
