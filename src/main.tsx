import React from "react";
import App from "./App";
import { ThemeProvider } from "./components/Create Context/CreateContextFile";
// import { Link } from "react-router-dom";
// import { withTheme } from "./components/ThemeAuth";

// const MainApp = ({ theme }: any) => {
//   return (
//     <div>
//       <App />
//       <p style={{background:theme.secondaryColor, color:theme.primaryColor}}>theme</p>
//     </div>
//   );
// };

// const Main = withTheme(MainApp);

function Main() {
  return (
    <ThemeProvider>
      {/* <div style={{ display: "inline-flex", columnGap: 20 }}>
        <Link to="arraymethods">Array methods</Link>
        <Link to="themeauth">Themeauth()</Link>
        <Link to="redux">Redux</Link>
        <Link to="iq">IQ</Link>
      </div> */}
      <App />
    </ThemeProvider>
  );
}

export default Main;
