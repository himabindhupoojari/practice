// import { Coltype, RowType } from "../Table/TableInterfaces";

export interface Coltype {  
  [key: string]: string | boolean
}

export type CellValue = string | number | object ;

export interface RowType {  
  [key: string]: CellValue;
}

export const SchedulerListData: RowType[] = [
  {
    id: "0",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "1",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "2",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "3",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "4",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
  {
    id: "5",
    title: "title",
    created_dt: "28-09-2024",
    assigned_to: "dev",
  },
];

export const ScheduleListColumns: Coltype[] = [
  {
    checkbox: true,
    label: "",
    minWidth: "0px",
    colHover: true,
  },
  {
    id: "id",
    label: "Id",
    minWidth: "50px",
  },
  {
    id: "title",
    label: "Label",
    minWidth: "50px",
  },
  {
    id: "created_dt",
    label: "Created Date",
    minWidth: "50px",
  },
  {
    id: "assigned_to",
    label: "Assigned To",
    minWidth: "50px",
  },
];

export const scheduleTimeArrayMinutes = Array.from({ length: 60 }, (v, i) => ({
  min: `${i}`,
}));

export const scheduleTimeArray = Array.from({ length: 24 }, (v, i) => ({
  id: i,
  time: `${i}`,
  min: scheduleTimeArrayMinutes,
}));

export const scheduleTaskData = [
  {
    id: 0,
    week: "Mon",
    from_time: "1:43",
    to_time: "2:05",
    text: "task assigned",
    color: "yellow",
    date: "2024-07-10",
  },
  {
    id: 1,
    week: "Tue",
    from_time: "3:30",
    to_time: "4:00",
    text: "task pprogressed",
    color: "blue",
    date: "2024-07-08",
  },
  {
    id: 2,
    week: "Wed",
    from_time: "2:40",
    to_time: "4:20",
    text: "task completed",
    color: "green",
    date: "2024-07-10",
  },
  {
    id: 3,
    week: "Thu",
    from_time: "2:30",
    to_time: "3:00",
    text: "on hold",
    color: "red",
    date: "2024-07-14",
  },
  {
    id: 4,
    week: "Fri",
    from_time: "3:05",
    to_time: "4:00",
    text: "task assigned",
    color: "yellow",
    date: "2024-07-19",
  },
  {
    id: 5,
    week: "Sat",
    from_time: "3:00",
    to_time: "3:45",
    text: "task assigned",
    color: "yellow",
    date: "2024-06-30",
  },
  {
    id: 6,
    week: "Sat",
    from_time: "3:00",
    to_time: "3:45",
    text: "task completed",
    color: "",
    date: "2024-07-17",
  },
];

export let currentMonday = getCurrentMonday();

function getCurrentMonday() {
  const today = new Date();
  const day = today.getDay();
  const mondayOffset = (day + 6) % 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - mondayOffset);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

export let currentDay = getCurrentDay();

function getCurrentDay() {
  const today = new Date();
  const day = today.getDate();
  const dayName = today.getDay();
  const todayDate = new Date(today);
  return { day: day, dayName: dayName, toDayDate: todayDate };
}

export const getWeekdays = (date: any, option: string) => {
  const daysOfWeek = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekDates = [];

  if (option !== "day") {
    for (let i = 0; i < 6; i++) {
      const current = new Date(date);
      current.setDate(date.getDate() + i);
      weekDates.push({
        dayName: daysOfWeek[current.getDay()],
        date: current.toISOString().split("T")[0],
      });
    }
  } else {
    const currentDay = new Date(date);
    weekDates.push({
      dayName: daysOfWeek[currentDay.getDay()],
      date: currentDay.toISOString().split("T")[0],
    });
  }

  return weekDates;
};
