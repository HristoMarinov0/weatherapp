import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../constants";

const useWeather = () => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [error, setError] = useState("");
    const [weatherData, setWeatherData] = useState("");
   
    useEffect(() => {
      const fetchData = async () => {
        setError("");
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
        if(!lat || !long) return;
        try {
          const response = await fetch(
            `${BASE_URL}forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`
          );
          const data = await response.json();
          const normalizedData = {};
          let i = 0;
          // since the apis free version returns weather for 5 days in
          // 3 hours step we have to do some gymnastics to split it by day
  
          if (!data?.list.length) {
            return;
          }
          while (i < Math.floor(data.list.length / 8)) {
            normalizedData[i + 1] = data.list.slice(i * 8, i * 8 + 8);
            i++;
          }
          setWeatherData(normalizedData);
        } catch (e) {
          setError(e.message);
        }
      };
      fetchData();
    }, [lat, long]);

    return {weatherData, error};
};

export default useWeather;