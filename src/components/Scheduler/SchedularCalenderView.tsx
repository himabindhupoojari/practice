import React, { useEffect, useMemo, useState } from "react";
import {
  currentMonday as initialCurrentMonday,
  currentDay as intitailCurrentDay,
  getWeekdays,
  scheduleTaskData,
  scheduleTimeArray,
  scheduledTaskHeightCalculation,  
} from "./SchedulerData";
import prev_arrow from "../../assets/images/previous_arrow.png";
import next_arrow from "../../assets/images/next_arrow.png";
import { convertDate } from "../../utils/dateUtils";

interface SchedularProps {
  option: string;
  currentDay?: Date;
  setCurrentDayDate?: React.Dispatch<React.SetStateAction<Date>>;
}

function Schedular({ option, currentDay, setCurrentDayDate }: SchedularProps) {
  const [currentMonday, setCurrentMonday] = useState(initialCurrentMonday);
  const [selectedDay, setSelectedDay] = useState(
    currentDay || intitailCurrentDay.toDayDate
  );
  const [weekDates, setWeekDates] = useState(
    getWeekdays(option === "day" ? selectedDay : initialCurrentMonday, option)
  );

  useEffect(() => {
    setWeekDates(
      getWeekdays(option === "day" ? selectedDay : currentMonday, option)
    );
  }, [currentMonday, selectedDay, option]);

  useEffect(() => {
    if (currentDay && option === "day") {
      setSelectedDay(currentDay);
    }
  }, [currentDay, option]);

  const editPopUp = (
    item: { [key: string]: string | number | boolean },
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    alert(item.text);
  };

  const previous = () => {
    if (option === "week") {
      const newMonday = new Date(currentMonday);
      newMonday.setDate(currentMonday.getDate() - 7);
      setCurrentMonday(newMonday);
    } else if (option === "day") {
      const newDay = new Date(selectedDay);
      newDay.setDate(selectedDay.getDate() - 1);
      setSelectedDay(newDay);
      setCurrentDayDate && setCurrentDayDate(newDay);
    }
  };

  const next = () => {
    if (option === "week") {
      const newMonday = new Date(currentMonday);
      newMonday.setDate(currentMonday.getDate() + 7);
      setCurrentMonday(newMonday);
    } else if (option === "day") {
      const newDay = new Date(selectedDay);
      newDay.setDate(selectedDay.getDate() + 1);
      setSelectedDay(newDay);
      setCurrentDayDate && setCurrentDayDate(newDay);
    }
  };

  return (
    <div className="calender_view">
      <div className="schedule_info_container">
        <div className="schedule_table_continer">
          <div className="table">
            <div className="thead">
              <div className="schedular_months_row tr">
                <div className="schedule_months th">
                  <span onClick={previous}><img src={prev_arrow}/></span>
                  <span onClick={next}><img src={next_arrow}/></span>
                </div>
                {weekDates.map((week) => (
                  <div
                    className={`${
                      option === "day" ? "schedule_day" : "schedule_months"
                    } th`}
                    key={week.dayName}
                  >
                    <p>{week.dayName}</p>
                    <p>{week.date.split("-")[2]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="tbody">
              {scheduleTimeArray.map((timeval) => (
                <div className="tr" key={timeval.time}>
                  <div className="td">{timeval.time}</div>
                  {weekDates.map((week) => (
                    <div
                      key={week.dayName}
                      className={`month_columns ${
                        option === "day" && "week_columns"
                      } td`}
                    >
                      {scheduleTaskData.map((item) => {
                        let date = week.date;
                        let time = timeval.time;
                        let apiFromTimeStart = item.from_time.split(":")[0];
                        let apiFromTimeEnd = item.from_time.split(":")[1];
                        let apiToTimeStart = item.to_time.split(":")[0];
                        let apiToTimeEnd = item.to_time.split(":")[1];

                        let top = Number(apiFromTimeEnd) * 1.6;
                        let height: number = 0;
                        let totalColumnHeight = 100; // height of the column

                        height =
                          scheduledTaskHeightCalculation(
                            apiFromTimeStart,
                            apiToTimeStart,
                            apiFromTimeEnd,
                            apiToTimeEnd,
                            totalColumnHeight
                          ) ?? 0;

                        if (date === item.date && time === apiFromTimeStart) {
                          return (
                            <div
                              key={item.id}
                              style={{
                                borderLeft: `5px solid ${
                                  item.color ? item.color : "transparent"
                                }`,
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
                                  <span
                                    className={
                                      item.color === "" ? "task_completed" : ""
                                    }
                                  >
                                    {item.text}
                                  </span>
                                  <span
                                    className={`subtext ${
                                      item.color === "" &&
                                      "subtext_task_completed"
                                    }`}
                                  >
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
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedular;

Schedular.defaultProps = {
  currentDay: new Date(),
  setCurrentDayDate: undefined,
};

