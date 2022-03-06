import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../src/lotties/leviosa.json";
import "./App.css";
import HarryPotter from "./components/HarryPotter";
import "./style.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <div>
            <div>The magic is loading . . .</div>
            <Lottie options={defaultOptions} height={400} width={400} />
            <div className="quotation">
              <span>&#8220;</span> It's LeviOsa not LeviosAAAA...
              <span>&#8221;</span>
            </div>
          </div>
        </div>
      ) : (
        <HarryPotter />
      )}
    </div>
  );
};

export default App;
