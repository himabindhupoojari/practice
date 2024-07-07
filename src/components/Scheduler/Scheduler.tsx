import React, { useState } from "react";
import { Link } from "react-router-dom";
import SchedularlistView from "./SchedularlistView";
import SchedularCalenderView from "./SchedularCalenderView";
import './Scheduler.scss';

function Scheduler() {
  const [storeTab, setStoreTab] = useState("1");
  const openScheduler = (val: string) => {
    setStoreTab(val);
  };
  return (
    <div className="scheduler">
      <button id="schedulerlistview" onClick={() => openScheduler("1")}>
        List View
      </button>
      <button id="schedulercalenderview" onClick={() => openScheduler("2")} style={{marginLeft:30}}>
        Calender View
      </button>      

      {storeTab === "1" ? <SchedularCalenderView /> : <SchedularlistView />}
    </div>
  );
}

export default Scheduler;
