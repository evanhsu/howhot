import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import { SaunaMonitor } from "../components/SaunaMonitor";
import { FullPageLayout } from "../layouts/FullPageLayout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <FullPageLayout>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "80%",
        }}
      >
        <Heading
          as="h1"
          style={{ fontFamily: "Reenie Beanie", fontSize: "300px" }}
        >
          How Hot?
        </Heading>
        <SaunaMonitor />
      </main>
    </FullPageLayout>
  );
}
