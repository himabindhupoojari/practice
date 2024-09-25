import React, { useState } from "react";
import { Link } from "react-router-dom";
import SchedularlistView from "./SchedularlistView";
import SchedularCalenderView from "./SchedularCalenderView";
import './Scheduler.scss';
import { convertDate } from "../../utils/dateUtils";

function Scheduler() {
  const [storeTab, setStoreTab] = useState("1");
  const openScheduler = (val: string) => {
    setStoreTab(val);
  };

  const [currentDay, setCurrentDay] = useState(new Date());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const DATE = convertDate(e.target.value);
    setCurrentDay(DATE);
  };

  return (
    <div className="scheduler">
      <button id="schedulerlistview" onClick={() => openScheduler("1")}>
        List View
      </button>
      <button id="schedulercalenderview" onClick={() => openScheduler("2")} style={{marginLeft:30}}>
        Calender View
      </button>    

      
      <div className="calender_view__calender">
        <div>
          <input type="date" onChange={handleChange} />
        </div>
      </div>
        

      {storeTab === "2" ? <SchedularCalenderView option="day" currentDay={currentDay} setCurrentDayDate={setCurrentDay}  /> : <SchedularlistView />}
    </div>
  );
}

export default Scheduler;
