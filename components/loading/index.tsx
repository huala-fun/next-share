"use client";
import ReactLoading from "react-loading";

export const Loading = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return loading ? (
    <div className="relative">
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, .9)",
          transition: "opacity .3s",
        }}
        className="absolute  transition-opacity h-full w-full z-50 flex items-center justify-center opacity-50">
        <ReactLoading
          className="w-8 h-8 m-auto fill-primary"
          type={"spinningBubbles"}
          color=""
          height=""
          width=""
        />
      </div>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};
