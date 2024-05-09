"use client";
import { Card, CardContent } from "@/components/ui/card";
import ReactLoading from "react-loading";

const Loading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div style={{ backgroundColor: "rgba(255, 255, 255, .9)", transition:"opacity .3s"}} className="absolute  transition-opacity h-full w-full z-50 flex items-center justify-center opacity-50">
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
  );
};

const App = () => {
  return (
    <Loading>
      <Card>
        <CardContent>asdsadsa</CardContent>
      </Card>
    </Loading>
  );
};

export default App;
