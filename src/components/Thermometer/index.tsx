import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type ThermometerProps = {
  temperatureInside: number;
  temperatureOutside: number;
  timestampMs: number;
};
export const Thermometer = (props: ThermometerProps) => {
  return (
    <div className={styles.wrapper}>
      <img src="/img/thermometer.svg" />
    </div>
  );
};

/**
 * photon firmware
 * - Takes a temperature reading every 60 seconds and publishes an event with the new temperature in the payload
 *
 * particle cloud
 * - webhook is subscribed to the temperature event and POSTs a request to the nodejs backend
 *
 * nodeJS server app
 * - receives inbound webhook with new temperature data
 * - publishes updated temperature to the pub/sub channel that the docusaurus client is subscribed to
 *
 * docusaurus client
 * - opens a websocket connection to the nodeJS backend and receives temperature update events via pub/sub
 */
