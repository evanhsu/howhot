import React from "react";
import styles from "./styles.module.css";

type TemperatureGraphicProps = { temperature: number };

const TemperatureGraphic = (props: TemperatureGraphicProps) => {
  const sentimentImage =
    props.temperature < 70
      ? "/img/sauna-temp-1.png"
      : props.temperature < 120
      ? "/img/sauna-temp-2.png"
      : props.temperature < 150
      ? "/img/sauna-temp-3.png"
      : "/img/sauna-temp-4.png";

  return (
    <div className={styles.wrapper}>
      <div className={styles.numberSection}>
        <span className={styles.temperatureLabel}>
          {props.temperature.toFixed(0)}
        </span>
        <span className={styles.degreeLabel}>°F</span>
      </div>
      <div className={styles.graphicSection}>
        <img src={sentimentImage} />
      </div>
    </div>
  );
};

export { TemperatureGraphic, TemperatureGraphicProps };
