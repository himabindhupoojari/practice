import React from "react";
import { BrowserRouter, HashRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
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
import ReactJsQs from "./InterviewPanel/ReactJsQs";
import JsQs from "./InterviewPanel/JsQs";
import ReactCoreQuestions from "./InterviewPanel/ReactCoreQuestions";
import ReactAdvanced from "./InterviewPanel/ReactAdvanced";
import TypescriptReact from "./InterviewPanel/TypescriptReact";
import Practice from "./InterviewPanel/Practice";
import Theory from "./InterviewPanel/Theory";


function App() {
 
  return (
    <HashRouter>
      <div style={{ display: "inline-flex", columnGap: 20 }}>
        {/* <Link to="/">Home</Link>
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
        <Link to="interview-easy">Interview Easy</Link> */}
        <Link to="/">React Js Q&As</Link>
        <Link to="js-qs">Js Q&As</Link>
        <Link to="core-react">Core React</Link>
        <Link to="advanced-react">Advanced React</Link>
        <Link to="typescript">Typescript</Link>
        <Link to="practice">Practice</Link>
        <Link to="theory">Theory</Link>
      </div>
      <Routes>
        {/* <Route path="/" element={<Component1 />} /> */}
        <Route path="/" element={<ReactJsQs />} />
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
        {/* <Route path="reactjs-qs" element={<ReactJsQs />} /> */}
        <Route path="js-qs" element={<JsQs />} /> 
        <Route path="core-react" element={<ReactCoreQuestions />}/>
        <Route path="advanced-react" element={<ReactAdvanced />}/>
        <Route path="typescript" element={<TypescriptReact />}/>
        <Route path="practice" element={<Practice />}/>
        <Route path="theory" element={<Theory />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

// {/* Parent Route */}
//     <Route path="react-qs" element={<ReactJsQs />}>
      
//       {/* Child Routes */}
//       <Route path="easy" element={<Easy />} />
//       <Route path="medium" element={<h3>Medium Questions</h3>} />
//       <Route path="hard" element={<h3>Hard Questions</h3>} />

//     </Route>
