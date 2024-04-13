import React, { PropsWithChildren } from "react";

type FullPageLayoutProps = PropsWithChildren<{}>;
const FullPageLayout: React.FC<FullPageLayoutProps> = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};

export { FullPageLayout, FullPageLayoutProps };
