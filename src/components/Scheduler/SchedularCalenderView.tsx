import React, { useEffect, useState } from "react";
import {
  currentMonday as initialCurrentMonday,
  getWeekdays,  
  scheduleTaskData,
  scheduleTimeArray,
  scheduleWeekArr,
} from "./SchedulerData";
import prev_arrow from "../../assets/images/previous_arrow.png";
import next_arrow from "../../assets/images/next_arrow.png";

function SchedularCalenderView() {
  
  const [currentMonday, setCurrentMonday] = useState(initialCurrentMonday);
  const [weekDates, setWeekDates] = useState(getWeekdays(initialCurrentMonday));

  useEffect(() => {
    setWeekDates(getWeekdays(currentMonday));
  }, [currentMonday]);

  const openPopup = (date: string, time: string) => {
    const task = scheduleTaskData.find(
      (item) => item.week === date && item.from_time.split(":")[0] === time
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

  const previous = () => {
    const newMonday = new Date(currentMonday);
    newMonday.setDate(currentMonday.getDate() - 7);
    setCurrentMonday(newMonday);
  };

  const next = () => {
    const newMonday = new Date(currentMonday);
    newMonday.setDate(currentMonday.getDate() + 7);
    setCurrentMonday(newMonday);
  };


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
                  <span onClick={previous} style={{ marginLeft: 20, borderRight:"1px solid #717171", height:'100%', cursor:'pointer' }}>
                    <img src={prev_arrow} />
                  </span>
                  <span onClick={next} style={{ marginLeft: 0, cursor:'pointer' }}>
                  <img src={next_arrow} />
                  </span>
                </th>
                {weekDates.map((week) => {
                  return (
                    <th className="schedule_months" key={week.dayName}>
                      {week.dayName}
                      <br />
                      {week.date}
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
                    {weekDates.map((week) => {
                      return (
                        <td
                          key={week.dayName}
                          onClick={() => openPopup(week.dayName, timeval.time)}
                          // style={{position:'fixed'}}
                        >
                          {scheduleTaskData.map((item) => {
                            let date = week.date;
                            let time = timeval.time;
                            let apiFromTimeStart = item.from_time.split(":")[0]; // 9
                            let apiFromTimeEnd = item.from_time.split(":")[1]; //00
                            let apiToTimeStart = item.to_time.split(":")[0]; //9
                            let apiToTimeEnd = item.to_time.split(":")[1]; //30

                            let top = Number(apiFromTimeEnd) * 1.6;
                            let height = 0;
                            let totalColumnHeight = 100;

                            //  9 to 9 => same start time value and end time value
                            if (
                              Number(apiFromTimeStart) ===
                              Number(apiToTimeStart)
                            ) {
                              // 9:00 - 9:30
                              height = Number(apiToTimeEnd) * 1.6;
                              // console.log(height);
                            }

                            // 9 t0 10 => different start time value and end time value
                            if (
                              Number(apiFromTimeStart) !==
                              Number(apiToTimeStart)
                            ) {
                              // 9:05 - 10:40
                              if (
                                Number(apiFromTimeEnd) !== Number(apiToTimeEnd)
                              ) {
                                height = Math.round(
                                  (Number(apiToTimeStart) -
                                    Number(apiFromTimeStart)) *
                                    totalColumnHeight -
                                    Number(apiFromTimeEnd) * 1.6 +
                                    Number(apiToTimeEnd) * 1.6
                                );
                                // console.log(height, '1');
                              }
                              if (
                                Number(apiFromTimeEnd) === Number(apiToTimeEnd)
                              ) {
                                height = Math.round(
                                  (Number(apiToTimeStart) -
                                    Number(apiFromTimeStart)) *
                                    totalColumnHeight
                                );
                                // console.log(height, '2');
                              }
                            }

                            if (
                              date === item.date &&
                              time === apiFromTimeStart
                            ) {
                              return (
                                <p
                                  key={item.id} // Ensure unique key for each item
                                  style={{
                                    borderLeft: `5px solid ${item.color}`,
                                    position: "absolute",
                                    top: `${top}px`,
                                    right: 0,
                                    left: 0,
                                    height: `${height}px`,
                                    paddingLeft: 7,
                                    paddingTop:0,
                                    borderRadius: 7,
                                    backgroundColor: "#262626",
                                    cursor: "pointer",
                                  }}
                                  onClick={(event) => {
                                    editPopUp(item, event);
                                  }}
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
