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
   const scrollBtn = document.getElementById("scrollTopBtn");
  
  window.onscroll = (): void => {
    if (!scrollBtn) return;
  
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      (scrollBtn as HTMLElement).style.display = "block";
    } else {
      (scrollBtn as HTMLElement).style.display = "none";
    }
  };
  
  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <ThemeProvider>
      {/* <div style={{ display: "inline-flex", columnGap: 20 }}>
        <Link to="arraymethods">Array methods</Link>
        <Link to="themeauth">Themeauth()</Link>
        <Link to="redux">Redux</Link>
        <Link to="iq">IQ</Link>
      </div> */}
      <App />
      <button id="scrollTopBtn" onClick={scrollToTop}>↑</button>
    </ThemeProvider>
  );
}

export default Main;
