import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import CreateContextApiReact from "./components/Create Context/CreateContextApiReact";
import ArrayMethods from "./components/ArrayMethods";
import ThemedMyComponent from "./components/ThemeAuth";
import ReduxProvider from "./components/Redux/ReduxProvider";
import InterviewQuestions from "./components/Interview Questions";
import MovingObjects from "./components/MovingObjects";
import WeatherDashboard from "./components/WeatherDashboard";
import FormPractice from "./components/Input/FormPractice";
// import Table from "./components/Table/Table";
import TableComponent from "./components/Table/TableComponent";
import Scheduler from "./components/Scheduler/Scheduler";
import ReactHookForm from "./components/Input/ReactHookForm";
import ThemeSwitcher from "./components/ThemeBuilder/ThemeSwitcher";
import Easy from "./InterviewPanel/easy/easy";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "inline-flex", columnGap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="arraymethods">Array methods</Link>
        <Link to="themeauth">Themeauth()</Link>
        <Link to="redux">Redux</Link>
        <Link to="iq">IQ</Link>
        <Link to="movingcaurosel">Moving Caurosel</Link>
        <Link to="weather">Weather</Link>
        <Link to="form_practice">Form Practice</Link>
        <Link to="table">Table</Link>
        <Link to="scheduler">Scheduler</Link>
        <Link to="rhf">RHF</Link>
        <Link to="ts">Theme</Link>
        <Link to="interview-easy">Interview Easy</Link>
      </div>
      <Routes>
        <Route path="/" element={<Component1 />} />
        <Route path="add_delete_row" element={<Component2 />} />
        <Route path="usecontext" element={<CreateContextApiReact />} />
        <Route path="arraymethods" element={<ArrayMethods />} />
        <Route path="themeauth" element={<ThemedMyComponent />} />
        <Route path="redux" element={<ReduxProvider />} />
        <Route path="iq" element={<InterviewQuestions />} />
        <Route path="movingcaurosel" element={<MovingObjects />} />
        <Route path="weather" element={<WeatherDashboard />} />
        <Route path="form_practice" element={<FormPractice />} />
        <Route path="table" element={<TableComponent />} />
        <Route path="scheduler" element={<Scheduler />} />
        <Route path="rhf" element={<ReactHookForm />} />     
        <Route path="ts" element={<ThemeSwitcher />} />
        <Route path="interview-easy" element={<Easy />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
