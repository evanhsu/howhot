import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { Thermometer } from "../Thermometer";
import styles from "./styles.module.css";
import { TemperatureGraphic } from "../TemperatureGraphic";

const defaultTemperatureData = {
  temperatureInside: 0.0,
  temperatureOutside: 0.0,
  timestampMs: 12398237,
};

type SaunaMonitorProps = {};
export const SaunaMonitor = (props: SaunaMonitorProps) => {
  const { siteConfig } = useDocusaurusContext();

  const [temperatureData, setTemperatureData] = useState<
    typeof defaultTemperatureData
  >(defaultTemperatureData);

  useEffect(() => {
    fetch(
      "https://us-west-2.aws.data.mongodb-api.com/app/data-vgwek/endpoint/latest"
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperatureData({
          temperatureInside: data.temperatureInside,
          temperatureOutside: data.temperatureOutside,
          timestampMs: data.timestampMs,
        });
      });

    const pusher = new Pusher(siteConfig.customFields.pusherKey as string, {
      cluster: siteConfig.customFields.pusherCluster as string,
    });

    const channel = pusher.subscribe("temperature");
    channel.bind("sauna/temperature", function (data) {
      setTemperatureData({
        temperatureInside: data.temperatureInside,
        temperatureOutside: data.temperatureOutside,
        timestampMs: data.timestampMs,
      });
    });

    return () => {
      // cleanup
      pusher.disconnect();
    };
  }, []);

  if (temperatureData.timestampMs === 0) {
    return <div>LOADING!</div>;
  }

  return (
    <div className={styles.infoGraphicCluster}>
      <Thermometer
        temperatureInside={temperatureData.temperatureInside}
        temperatureOutside={temperatureData.temperatureOutside}
        timestampMs={temperatureData.timestampMs}
      />
      <TemperatureGraphic temperature={temperatureData.temperatureInside} />
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
