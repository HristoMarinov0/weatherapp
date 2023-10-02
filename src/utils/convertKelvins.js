export const metricSystemOptions = {
  kelvin: {
    convert: function (kelvin) {
      return Math.floor(kelvin);
    },
    label: "K",
  },
  celsius: {
    convert: function (kelvin) {
      return Math.floor(kelvin - 275.15);
    },
    label: "C",
  },
  fahrenheit: {
    convert: function (kelvin) {
      return Math.floor((kelvin - 273.15) * 9 / 5 + 32);
    },
    label: "F",
  },
};

// could fetch conversions with the api, but do we really need to fetch the data again just for some conversions
// math.floor -> depends on requirements, could be problematic with negative numbers rounding
