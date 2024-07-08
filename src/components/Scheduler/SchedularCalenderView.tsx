import React, { useState } from "react";
import {
  scheduleMonthArray,
  scheduleTaskData,
  scheduleTimeArray,
} from "./SchedulerData";

function SchedularCalenderView() {
  const [className, setClassName] = useState("");

  const openPopup = (month: string, time: string) => {
        const task = scheduleTaskData.find(
          (item) => item.month === month && item.from_time.split(":")[0] === time
        );
        return !task && alert("No task");
      };
    
      const editPopUp = (
        item: { [key: string]: string | number | boolean },
        event: React.MouseEvent
      ) => {
        event.stopPropagation();
        alert(item.text);
      };


  const previous = () => {};
  const next = () => {};

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
                  return (
                    <th className="schedule_months" key={mnth.id}>
                      {mnth.value}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {scheduleTimeArray.map((timeval) => {
                return (
                  <tr key={timeval.time}>
                    <td>{timeval.time}</td>
                    {scheduleMonthArray.map((mnth) => {
                      return (
                        <td
                          key={mnth.value}
                          onClick={() => openPopup(mnth.value, timeval.time)}
                        >
                          {scheduleTaskData.map((item) => {
                            let month = mnth.value;
                            let time = timeval.time;
                            let apiFromTimeStart = item.from_time.split(":")[0]; // 9
                            let apiFromTimeEnd = item.from_time.split(":")[1]; //00
                            let apiToTimeStart = item.to_time.split(":")[0]; //9
                            let apiToTimeEnd = item.to_time.split(":")[1]; //30

                            let top = Number(apiFromTimeEnd) * 2.5;
                            let height = 0;
                            let totalColumnHeight = 150;

                            //  9 to 9 => same start time value and end time value
                            if (
                              Number(apiFromTimeStart) ===
                              Number(apiToTimeStart)
                            ) {
                              // 9:00 - 9:30
                              height = Number(apiToTimeEnd) * 2.5;
                              console.log(height);
                            }

                            // 9 t0 10 => different start time value and end time value
                            if (
                              Number(apiFromTimeStart) !==
                              Number(apiToTimeStart)
                            ) {
                              // 9:05 - 10:40
                              if (Number(apiFromTimeEnd) !== Number(apiToTimeEnd)) {                                
                                height = Math.round(((Number(apiToTimeStart) - Number(apiFromTimeStart)) * totalColumnHeight) - (Number(apiFromTimeEnd) * 2.5) + (Number(apiToTimeEnd)*2.5));                              
                                console.log(height, '1');                                  
                              }
                              if (
                               Number(apiFromTimeEnd) === Number(apiToTimeEnd)
                              ) {
                                height = Math.round(
                                  (Number(apiToTimeStart) -
                                    Number(apiFromTimeStart)) *
                                    totalColumnHeight
                                );
                                console.log(height, '2');
                              }                              
                            }

                            if (month === item.month && time === apiFromTimeStart) {
                              return (
                                <p
                                  key={item.id} // Ensure unique key for each item
                                  style={{
                                    borderLeft: `3px solid ${item.color}`,
                                    position: "absolute",
                                    top: `${top}px`,
                                    right: 0,
                                    left: 0,
                                    height: `${height}px`,
                                    paddingLeft: 5,
                                    borderRadius: 10,
                                    backgroundColor: "#262626",
                                    cursor: "pointer",
                                  }}
                                  onClick={(event)=>{editPopUp(item, event)}}
                                >
                                  <span>{item.text}</span>
                                  <span>{item.date}</span>
                                </p>
                              );
                            }
                            return null; // Return null if conditions don't match
                          })}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SchedularCalenderView;
