import React from "react";
import styles from "./styles.module.css";

type TemperatureProps = { temperature: number };

const Temperature = (props: TemperatureProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.temperatureLabel}>
        {props.temperature.toFixed(0)}
      </span>
      <span className={styles.degreeLabel}>°F</span>
    </div>
  );
};

export { Temperature, TemperatureProps };
