import React, { useEffect, useState } from "react";
import {
  scheduleMonthArray,
  scheduleTaskData,
  scheduleTimeArray,
} from "./SchedulerData";

function SchedularCalenderView() {
  const [className, setClassName] = useState("");

  const getClassName = (month: string, time: string) => {
    const task = scheduleTaskData.find(
      (item) => item.month === month && item.from_time.split(":")[0] === time && month && item.to_time.split(":")[0]
    );
    return task ? task.name : "";
  };

  const openPopup = (month: string, time: string) => {
    const task = scheduleTaskData.find(
      (item) => item.month === month && item.from_time === time
    );
    alert(task ? task.name : "No task");
    return task ? task.name : "";
  };

  const previous = () => {};
  const next = () => {};

  {scheduleTimeArray.map((item)=>{return item.min.map((min)=>{return console.log(min)})})}
  return (
    <div className="calender_view">
      <div className="calender_view__calender">
        <div>
          <input type="date" />
        </div>
      </div>

      <div className="schedule_info_container">
        <div className="schedule_table_continer">
          <table>
            <thead>
              <tr className="schedular_months_row">
                <th className="schedule_months">
                  <span onClick={previous} style={{ marginLeft: 20 }}>
                    &gt;
                  </span>
                  <span onClick={next} style={{ marginLeft: 20 }}>
                    &gt;
                  </span>
                </th>
                {scheduleMonthArray.map((mnth) => {
                  return <th className="schedule_months" key={mnth.id}>{mnth.value}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {scheduleTimeArray.map((time, timeIndex) => {
                return (
                  <tr>
                    <td>{time.time}</td>
                    {scheduleMonthArray.map((mnth) => {
                      return (
                        <td
                          key={mnth.value}
                          className={getClassName(mnth.value, time.time)}
                          onClick={() => openPopup(mnth.value, time.time)}
                        >
                          {scheduleTaskData.map((item) => {  
                            console.log(item.to_time.split(":"));
                                                      
                            if (
                              mnth.value === item.month &&
                              time.time === item.from_time.split(":")[0] && item.month && item.to_time.split(":")[0]
                            ) {
                              return  <p style={{height:''}}>{item.text}</p>;
                            }                            
                          })}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}``
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SchedularCalenderView;
