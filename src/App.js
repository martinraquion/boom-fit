import React from "react";
import "./App.css";

import StateProvider from "./context/stateContext";
import BoomFitDashboard from "./components/BoomFitDashboard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Warning from "@material-ui/icons/Warning";
function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StateProvider>
      <div className="App">
        <header
          className="App-header"
          style={{
            background:
              "no-repeat center url('https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
            backgroundSize: "cover",
          }}
        >
          {matches ? (
            <BoomFitDashboard />
          ) : (
            <div
              style={{
                fontSize: 16,
                width: "70vw",
                backgroundColor: "rgb(128, 128, 128, 0.3)",
                padding: 20,
                lineHeight: 1.4,
              }}
            >
              <Warning />
              <br />
              This is a browser extension app. <br /> Preview is not available
              on mobile.
              <br />
              Try it on Desktop
            </div>
          )}
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
