import React, { useEffect, useMemo, useState } from "react";
import {
  currentMonday as initialCurrentMonday,
  currentDay as intitailCurrentDay,
  getWeekdays,
  scheduleTaskData,
  scheduleTimeArray,  
} from "./SchedulerData";
import prev_arrow from "../../assets/images/previous_arrow.png";
import next_arrow from "../../assets/images/next_arrow.png";
import { convertDate } from "../../utils/dateUtils";

function SchedularCalenderView() {
  let option = "da";

  const [currentMonday, setCurrentMonday] = useState(initialCurrentMonday);
  const [getcurrentDay, setCurrentDay] = useState(intitailCurrentDay.toDayDate);
  const [weekDates, setWeekDates] = useState(
    getWeekdays(
      option === "day" ? intitailCurrentDay.toDayDate : initialCurrentMonday,
      option
    )
  );

  useEffect(() => {
    setWeekDates(
      getWeekdays(option === "day" ? getcurrentDay : currentMonday, option)
    );
  }, [currentMonday, getcurrentDay]);

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
    if (option !== "day") {
      const newMonday = new Date(currentMonday);
      newMonday.setDate(currentMonday.getDate() - 7);
      setCurrentMonday(newMonday);
    } else {
      const newDay = new Date(getcurrentDay);
      newDay.setDate(getcurrentDay.getDate() - 1);
      setCurrentDay(newDay);
    }
  };

  const next = () => {
    if (option !== "day") {
      const newMonday = new Date(currentMonday);
      newMonday.setDate(currentMonday.getDate() + 7);
      setCurrentMonday(newMonday);
    } else {
      const newDay = new Date(getcurrentDay);
      newDay.setDate(getcurrentDay.getDate() + 1);
      setCurrentDay(newDay);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = convertDate(e.target.value);
    setCurrentDay(date);
  };


  return (
    <div className="calender_view">
      <div className="calender_view__calender">
        <div>
          <input type="date" onChange={handleChange} />
        </div>
      </div>

      <div className="schedule_info_container">
        <div className="schedule_table_continer">
          <table>
            <thead>
              <tr className="schedular_months_row">
                <th className="schedule_months">
                  <span onClick={previous}>
                    <img src={prev_arrow} />
                  </span>
                  <span onClick={next}>
                    <img src={next_arrow} />
                  </span>
                </th>
                {weekDates.map((week) => {
                  return (
                    <th
                      className={
                        option === "day" ? "schedule_day" : "schedule_months"
                      }
                      key={week.dayName}
                    >
                      <p>{week.dayName}</p>
                      <p>{week.date.split("-")[2]}</p>
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
                          className={`month_columns ${
                            option === "day" && "week_columns"
                          }`}
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
                            let totalColumnHeight = 100; // height of the column

                            //  9 to 9 => same start time value and end time value
                            if (
                              Number(apiFromTimeStart) ===
                              Number(apiToTimeStart)
                            ) {
                              // 9:00 - 9:30
                              height = Number(apiToTimeEnd) * 1.6;                              
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
                              }
                              if (
                                Number(apiFromTimeEnd) === Number(apiToTimeEnd)
                              ) {
                                height = Math.round(
                                  (Number(apiToTimeStart) -
                                    Number(apiFromTimeStart)) *
                                    totalColumnHeight
                                );                                
                              }
                            }

                            if (
                              date === item.date &&
                              time === apiFromTimeStart
                            ) {
                              return (
                                <div
                                  key={item.id}
                                  style={{
                                    borderLeft: `5px solid ${item.color ? item.color : "transparent"}`,
                                    top: `${top}px`,
                                    height: `${height}px`,
                                    padding: "7px",
                                  }}
                                  onClick={(event) => {
                                    editPopUp(item, event);
                                  }}
                                  className={`coldata ${
                                    option === "day" && "coldata_day"
                                  }`}
                                >
                                  <div className="aligndata">
                                    <div>
                                      <span className={item.color === "" ? 'task_completed' : ''}>{item.text}</span>
                                      <span className={`subtext ${item.color === "" && 'subtext_task_completed'}`}>
                                        {item.date}
                                      </span>
                                    </div>
                                    <div className="colpopup">
                                      {item.text}{" "}
                                      {`${item.from_time} to ${item.to_time}`}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            return null; 
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
