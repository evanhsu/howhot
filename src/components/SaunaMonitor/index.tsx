import { TemperatureData } from "../../utils";
import { Temperature } from "../Temperature";
import styles from "./styles.module.css";

type SaunaMonitorProps = {
  temperatureData: TemperatureData;
  sentimentImagePath: string;
};

export const SaunaMonitor = (props: SaunaMonitorProps) => {
  const { temperatureData, sentimentImagePath } = props;

  if (temperatureData.timestampMs === 0) {
    return <div className={styles.loading}>LOADING!</div>;
  }

  return (
    <div className={styles.infoGraphicCluster}>
      <Temperature temperature={temperatureData.temperatureInside} />
      <div className={styles.sentimentImage}>
        <img src={sentimentImagePath} />
      </div>
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
