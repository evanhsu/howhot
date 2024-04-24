// Temperature boundaries
const T0 = 80;
const T1 = 120;
const T2 = 150;

export const palette = {
  temp0: "rgb(117, 224, 255)",
  temp1: "rgb(255,255,255)",
  temp2: "rgb(255,252,11)",
  temp3: "rgb(255, 172, 0)",
  temp4: "rgb(255,96,0)",
};

export const getStylingForCurrentTemperature = (temperature: number) => {
  if (temperature < T0) {
    return {
      sentimentImage: "/img/style2/sauna-1.png",
      gradientFrom: palette.temp0,
      gradientTo: palette.temp1,
    };
  }

  if (temperature >= T0 && temperature < T1) {
    return {
      sentimentImage: "/img/style2/sauna-2.png",
      gradientFrom: palette.temp1,
      gradientTo: palette.temp2,
    };
  }
  if (temperature >= T1 && temperature < T2) {
    return {
      sentimentImage: "/img/style2/sauna-3.png",
      gradientFrom: palette.temp2,
      gradientTo: palette.temp3,
    };
  }

  return {
    sentimentImage: "/img/style2/sauna-4.png",
    gradientFrom: palette.temp3,
    gradientTo: palette.temp4,
  };
};

export const defaultTemperatureData = {
  temperatureInside: 0.0,
  temperatureOutside: 0.0,
  timestamp: 0,
  //   phase: "OFF",
};

export type TemperatureData = typeof defaultTemperatureData;
