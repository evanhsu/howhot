import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { SaunaMonitor } from "../components/SaunaMonitor";
import { FullPageLayout } from "../layouts/FullPageLayout";
import {
  TemperatureData,
  defaultTemperatureData,
  getStylingForCurrentTemperature,
} from "../utils";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const [temperatureData, setTemperatureData] = useState<TemperatureData>(
    defaultTemperatureData
  );

  useEffect(() => {
    fetch(
      "https://us-west-2.aws.data.mongodb-api.com/app/data-vgwek/endpoint/latest"
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperatureData({
          temperatureInside: data.temperatureInside,
          temperatureOutside: data.temperatureOutside,
          timestamp: data.timestamp,
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
        timestamp: data.timestamp,
      });
    });

    return () => {
      // cleanup
      pusher.disconnect();
    };
  }, []);

  const { gradientFrom, gradientTo, sentimentImage } =
    getStylingForCurrentTemperature(temperatureData.temperatureInside);

  return (
    <FullPageLayout gradientFrom={gradientFrom} gradientTo={gradientTo}>
      <main>
        <SaunaMonitor
          temperatureData={temperatureData}
          sentimentImagePath={sentimentImage}
        />
      </main>
    </FullPageLayout>
  );
}
