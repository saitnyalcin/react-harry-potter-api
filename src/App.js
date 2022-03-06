import React, { useEffect, useState } from "react";
import "./App.css";
import "./style.scss";
import HarryPotter from "./components/HarryPotter";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? <div className="loading">Loading...</div> : <HarryPotter />}
    </div>
  );
};

export default App;
