import React from "react";
import { useState, useEffect } from "react";

import { FaCheckCircle, FaClipboard, FaClipboardList } from "react-icons/fa";

import BarChart from "./chartComponents/barChart";
import BarChartCompare from "./chartComponents/barChartCompare";
import PieChart from "./chartComponents/pieChart";
import LineChart from "./chartComponents/lineChart";
import LineChartCompare from "./chartComponents/lineChartCompare";
import RadarChart from "./chartComponents/radarChart";
import LineAverage from "./chartComponents/lineAverage";

import  DoughnutChart from "./chartComponents/doughNut";
import PieChartRate from "./chartComponents/pieChartRate";
import VerticalBarChart from "./chartComponents/verticalBarChart";
import LineChartComparison from "./chartComponents/lineChartComparison";


import { auth } from "../../firebase/config";

import {
  getRtTaskByUserID,
  getRtTaskByAssigneeID,
} from "../../firebase/taskCRUD";

import LoadingBalls from "../../utils/loading";

import { formattedDate } from "../../utils/formatDate";


// Mock data for Doghnut and Pie
const doughnutMockData = [
  { status: "In Progress", quantity: 5 },
  { status: "Completed", quantity: 7 },
  { status: "Incompleted", quantity: 2 },
  { status: "Not Started", quantity: 3 },
];

//Bar
const barMockData = [
  { status: "All", quantity: [30, 20, 40, 50, 60, 70, 80] },
  { status: "Completed", quantity: [20, 10, 25, 40, 50, 65, 78] },
  { status: "Incompleted", quantity: [10, 10, 15, 10, 10, 5, 12] },
];

//Mock data for Line
const previous = [
  10, 80, 60, 100, 68, 23, 97, 51, 23, 48, 15, 39
];

const current = [
  90, 64, 49, 33, 167, 76, 23, 83, 54, 72, 19, 203
];


const MyDashboard = () => {
  const [userName, setUserName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskCount, setTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [uncompletedTaskCount, setUncompletedTaskCount] = useState(0);
  const [taskStatusCounts, setTaskStatusCounts] = useState([]);
  const [taskCategoryCounts, setTaskCategoryCounts] = useState([]);
  const [completedTaskCountsInPriority, setCompletedTaskCountsInPriority] = useState([]);
  const [taskPriorityCounts, setTaskPriorityCounts] = useState([]);
  const [taskassignee_dateCounts, setTaskassignee_dateCounts] = useState([]);
  const [taskDueDateCompleteCount,setTaskDueDateCompleteCounts] = useState([]);
  const [taskCategoryAverages, setTaskCategoryAverages] = useState([]);
  const [monthlyWorkHours, setMonthlyWorkHours] = useState([]);

  //MockData
  const [doughnutData, setdoughnutData] = useState(doughnutMockData);

  const [barData, setBarData] = useState(barMockData);

  const [previousYear, setPreviousYear] = useState(previous);
  const [currentYear, setCurrentYear] = useState(current);


  const convertMonthNumberToName = (monthNumber) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];


  
    // Check if monthNumber is valid
    if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
    }

    if (monthNumber === 0){
      return "Dec"
    }
  
    return "Unknown";
  };

  const getMonthOrder = (month) => {
    const order = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };

    return order[month] || 999; // Use 999 for unknown months
  };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);

  //       getRtTaskByUserID(auth.currentUser.uid, setTaskList);
  //       setLoading(false);
  //     } else {
  //       setError(true);
  //       console.log("User is signed out");
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // useEffect(() => {
  //   // Calculate task counts when taskList changes
  //   const calculateTaskCounts = () => {
  //     setTaskCount(taskList.length);

  //     const completedTasks = taskList.filter((task) => task.complete);
  //     setCompletedTaskCount(completedTasks.length);

  //     setUncompletedTaskCount(taskList.length - completedTasks.length);
  //   };

  //   const calculateTaskStatusCounts = () => {
  //     const statusCounts = taskList.reduce((counts, task) => {
  //       const status = task.status || "Unknown"; // Use 'Unknown' if status is not defined
  //       counts[status] = (counts[status] || 0) + 1;
  //       return counts;
  //     }, {});

  //     const countsArray = Object.entries(statusCounts).map(
  //       ([status, count]) => ({
  //         status,
  //         count,
  //       })
  //     );

  //     setTaskStatusCounts(countsArray);
  //   };

  //   // Calculate task category counts when taskList changes
  //   const calculateTaskCategoryCounts = () => {
  //     const categoryCounts = taskList.reduce((counts, task) => {
  //       const category = task.task_category || "Unknown"; // Use 'Unknown' if category is not defined
  //       counts[category] = (counts[category] || 0) + 1;
  //       return counts;
  //     }, {});

  //     const countsArray = Object.entries(categoryCounts).map(
  //       ([category, count]) => ({
  //         category,
  //         count,
  //       })
  //     );

  //     setTaskCategoryCounts(countsArray);
  //   };

  //   // Calculate completed task counts when taskList changes
  //   const calculateCompletedTaskCounts = () => {
  //     const priorityCounts = taskList.reduce((counts, task) => {
  //       const priority = task.priority || "Unknown"; // Use 'Unknown' if priority is not defined

  //       if (task.complete) {
  //         counts[priority] = (counts[priority] || 0) + 1;
  //       }

  //       return counts;
  //     }, {});

  //     const countsArray = Object.entries(priorityCounts).map(
  //       ([priority, count]) => ({
  //         priority,
  //         count,
  //       })
  //     );

  //     setCompletedTaskCountsInPriority(countsArray);
  //   };
  //   const calculateTaskPriorityCounts = () => {
  //     const priorityCounts = taskList.reduce((counts, task) => {
  //       const priority = task.priority || "Unknown"; // Use 'Unknown' if priority is not defined

  //       counts[priority] = (counts[priority] || 0) + 1;

  //       return counts;
  //     }, {});

  //     const countsArray = Object.entries(priorityCounts).map(
  //       ([priority, count]) => ({
  //         priority,
  //         count,
  //       })
  //     );

  //     setTaskPriorityCounts(countsArray);
  //   };

  //   const calculateTaskassignee_dateCounts = () => {
  //     const assignee_dateCounts = taskList.reduce((counts, task) => {
  //       const assignee_date = task.due_date || "Unknown"; // Use 'Unknown' if due date is not defined
  //       const monthNumber = parseInt(assignee_date.split("/")[0], 10); // Extract month number from due date
  //       const monthName = convertMonthNumberToName(monthNumber);

  //       counts[monthName] = (counts[monthName] || 0) + 1;

  //       return counts;
  //     }, {});

  //     const sortedCountsArray = Object.entries(assignee_dateCounts)
  //       .map(([month, count]) => ({ month, count }))
  //       .sort((a, b) => getMonthOrder(a.month) - getMonthOrder(b.month));

  //     setTaskassignee_dateCounts(sortedCountsArray);
  //   };

  //   const calculateTaskCompleteDueDateCounts = () => {
  //     const dueDateCounts = taskList.reduce((counts, task) => {
  //       const dueDate = task.due_date || 'Unknown';
  //       const monthNumber = parseInt(dueDate.split('/')[0], 10);
  //       const monthName = convertMonthNumberToName(monthNumber);

  //       counts[monthName] = counts[monthName] || { total: 0, completed: 0 };

  //       counts[monthName].total += 1;

  //       if (task.complete) {
  //         counts[monthName].completed += 1;
  //       }

  //       return counts;
  //     }, {});

  //     const sortedCountsArray = Object.entries(dueDateCounts)
  //       .map(([month, { total, completed }]) => ({ month, total, completed }))
  //       .sort((a, b) => getMonthOrder(a.month) - getMonthOrder(b.month));

  //     setTaskDueDateCompleteCounts(sortedCountsArray);
  //   };

  //   const calculateTaskCategoryAverages = () => {
  //     const taskCategoryTotals = taskList.reduce((totals, task) => {
  //       const category = task.task_category || 'Unknown';
  //       totals[category] = totals[category] || { total: 0, sum: 0 };

  //       totals[category].total += 1;
  //       totals[category].sum += task.work_hour_required || 0;

  //       return totals;
  //     }, {});

  //     const averagesArray = Object.entries(taskCategoryTotals)
  //       .map(([category, { total, sum }]) => ({ category, average: sum / total }))
  //       .sort((a, b) => b.average - a.average); // Sort by average in descending order

  //     setTaskCategoryAverages(averagesArray);
  //   };

  //   const calculateMonthlyWorkHours = () => {
  //     const monthlyWorkHourTotals = taskList.reduce((totals, task) => {
  //       const month = task.due_date ? new Date(task.due_date).getMonth() : -1;
  //       totals[month] = totals[month] || { work_hour_required: 0, hour_spend: 0 };

  //       totals[month].work_hour_required += task.work_hour_required || 0;

  //       task.tracking.forEach((tracking) => {
  //         totals[month].hour_spend += tracking.hours || 0;
  //       });

  //       return totals;
  //     }, {});

  //     const resultArray = Object.entries(monthlyWorkHourTotals)
  //       .map(([month, { work_hour_required, hour_spend }]) => ({
  //         month: convertMonthNumberToName(month),
  //         work_hour_required,
  //         hour_spend,
  //       }))
  //       .sort((a, b) => getMonthOrder(a.month) - getMonthOrder(b.month)); // Sort by month order

  //     setMonthlyWorkHours(resultArray);
  //   };

  //   calculateMonthlyWorkHours();

  //   calculateTaskCategoryAverages();

  //   calculateTaskassignee_dateCounts();
    
  //   calculateTaskCompleteDueDateCounts();

  //   calculateTaskPriorityCounts();

  //   calculateCompletedTaskCounts();

  //   calculateTaskCategoryCounts();

  //   calculateTaskStatusCounts();

  //   calculateTaskCounts();
  // }, [taskList]);

  return (
    <div className="flex flex-col">
      <div className=" flex justify-between items-center text-2xl bg-glasses backdrop-blur-12 font-semibold p-4 m-2 rounded-lg">
        <div className="flex items-center justify-start">
          <div class="relative w-12 h-12 rounded-full md:block">
            <img
              class="object-cover w-full h-full rounded-full"
              src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              loading="lazy"
            />
            <div
              class="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="ml-2">{userName}</p>
            <p className="ml-2">Dashboard</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          {/*today Date*/}
          <p className="text-sm">{formattedDate}</p>
        </div>
      </div>

      <div className=" m-1 p-1 rounded">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-2">
          <li className="bg-glasses backdrop-blur-12 px-2 py-6 rounded flex justify-center items-center transition duration-300 transform hover:scale-105">
            <span className="mr-2">
              <FaCheckCircle />
            </span>
            <span className="text-sm m-1">Total Task :</span>
            <span className="text-3xl font-semibold mx-3 transition duration-300 transform hover:scale-125 hover:text-blue-600">
              {completedTaskCount}
            </span>
          </li>
          <li className="bg-glasses backdrop-blur-12 px-2 py-6  rounded flex justify-center items-center transition duration-300 transform hover:scale-105">
            <span className="mr-2">
              <FaClipboard />
            </span>
            <span className="text-sm m-1">Total Project :</span>
            <span className="text-3xl font-semibold mx-3 transition duration-300 transform hover:scale-125 hover:text-blue-600">{taskCount}</span>
          </li>
          <li className="bg-glasses backdrop-blur-12 px-2 py-6  rounded flex justify-center items-center transition duration-300 transform hover:scale-105">
            <span className="mr-2">
              <FaClipboardList />
            </span>
            <span className="text-sm m-1">Total Organization :</span>
            <span className="text-3xl font-semibold mx-3 transition duration-300 transform hover:scale-125 hover:text-blue-600">
              {uncompletedTaskCount}
            </span>
          </li>
        </ul>

        {/* Chart */}

        <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <li className=" bg-glasses backdrop-blur-lg p-2 rounded transition duration-300 transform hover:scale-105">
            {/* <BarChart Data={taskStatusCounts} /> */}

            <DoughnutChart data={doughnutData} title={"Task Category Distribution"} info={"tasks"}/>
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded transition duration-300 transform hover:scale-105">
            {/* <BarChartCompare
              Data1={taskPriorityCounts}
              Data2={completedTaskCountsInPriority}
            /> */}
            <PieChartRate data={doughnutData}
            title={"Task Completion Rate"} />
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded transition duration-300 transform hover:scale-105">
            {/* <PieChart Data={taskCategoryCounts} /> */}
            <VerticalBarChart data={barData} title={"Task Visualization Chart"}/>
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded transition duration-300 transform hover:scale-105">
            {/* <LineChart Data={taskassignee_dateCounts} /> */}
            <LineChartComparison data1={previousYear} data2={currentYear} title={"Task Fluctuation Graph"} />
          </li>
          {/* <li className="bg-glasses backdrop-blur-lg p-2 rounded transition duration-300 transform hover:scale-105">
            <LineChartCompare Data={monthlyWorkHours}/>
          </li>
          <li className="bg-glasses backdrop-blur-lg p-2 rounded transition duration-300 transform hover:scale-105">
            <LineAverage Data={taskCategoryAverages}/>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MyDashboard;
