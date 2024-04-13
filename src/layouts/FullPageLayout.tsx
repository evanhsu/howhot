import React, { PropsWithChildren } from "react";

type FullPageLayoutProps = PropsWithChildren<{
  gradientFrom: string;
  gradientTo: string;
}>;
const FullPageLayout: React.FC<FullPageLayoutProps> = ({
  gradientFrom,
  gradientTo,
  children,
}) => {
  return (
    <div
      className="full-page-wrapper"
      style={{
        backgroundImage: `linear-gradient(${gradientFrom}, ${gradientTo})`,
      }}
    >
      {children}
    </div>
  );
};

export { FullPageLayout, FullPageLayoutProps };
