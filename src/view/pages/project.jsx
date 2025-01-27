import React from "react";
import { useState, useContext, useEffect, createContext } from "react";

import { FaClipboardList, FaPlus } from "react-icons/fa";
import {
  FaList,
  FaCalendar,
  FaClipboard,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";

import ProjectList from "../components/projectList";
import ProjectCalender from "../components/projectCalender";
import ProjectBoard from "../components/projectBoard";
import ProjectDashboard from "../components/projectDashboard";
import ProjectMember from "../components/projectMember";
import ProjectStageModal from "../components/projectStageModal";
import Dropdown from "../components/dropDown";
import ProjectDetail from "../components/projectDetail";

// import { getprojecByID } from "../../firebase/projectCRUD";

import { modalContext } from "../part/test";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../../api/api";

export const projectTaskContext = createContext(null);


const Project = () => {
  const [activeTab, setActiveTab] = useState("List");
  const [isOpenStageModal, setIsOpenStageModal] = useState(false);
  

  const openStageModal = () => {
    setIsOpenStageModal(true);
  };

  const closeStageModal = () => {
    setIsOpenStageModal(false);
  };

  const {
    tabID,
    setIsProjectModalOpen,
    openProjectModal,
    setModalTask,
    opentCreateProjectTaskModal,
  } = useContext(modalContext);
  const [sortCriteria, setSortCriteria] = useState("Default");

  const {
    data: project,
    isLoading: projectLoading,
    error: projectError,
  } = useQuery({
    queryKey: ["project_project"],
    queryFn: fetchProject,
  });

  const {
    data: projectMember,
    isLoading: projectMemberLoading,
    error: projectMemberError,
  } = useQuery({
    queryKey: ["project_member"],
    queryFn: fetchProjectMember,
  }); 
  
  async function fetchProjectMember() {
    const response = await apiRequest(
      "get",
      "api/v1/project-members-by-project-id/" + tabID
    );
    return response.data;
  }

  const {
    data: projectStages,
    isLoading: projectStagesLoading,
    error: projectStagesError,
  } = useQuery({
    queryKey: ["project_stages"],
    queryFn: fetchprojectStages,
  });


  async function fetchprojectStages() {
    const response = await apiRequest(
      "get",
      "api/v1/project-stages?project_id[eq]=" + tabID
    );
    console.log(response);
    console.log(tabID);
    return response.data;
  }

  async function fetchProject() {
    const response = await apiRequest("get", "api/v1/projects/" + tabID);
    console.log(tabID);
    console.log(response);
    return response.data;
  }


  const onSortChange = (sort) => {
    setSortCriteria(sort);
  };


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  let taskSample = {
    project_id: "",
    task_name: "Name",
    description: "",
    due_date: "01/01/2023",
    start_date: "01/01/2023",
    task_category: "to do",
    tracking: [],
    work_hour_required: 0,
    status: "On Track",
    priority: "Medium",
    severity: "Low",
    assignee_id: "",
    assignee_dates: undefined,
    complete: false,
    complete_date: "",

  };


  if(!projectMemberLoading && !projectStagesLoading){
    taskSample = {
      project_id: tabID,
      task_name: "Name",
      description: "",
      due_date: "01/01/2023",
      task_category: "To Do",
      tracking: [],
      work_hour_required: 0,
      status: "On Track",
      priority: "Low",
      assignee_id: "",
      assignee_dates: undefined,
      complete: false,
      member : projectMember,
      stage : projectStages,
    };
  }



  return (
    <div className="w-full min-h-[1200px] max-h-full bg-glasses backdrop-blur-12 rounded-lg">
      {/* Header */}
      <div className="flex flex-row justify-start border-b border-gray-500  ">
        <div className="flex items-center p-3 ml-1">
          <div class="relative w-12 h-12 rounded-md flex items-center justify-center bg-sky-500">
            <FaClipboardList className="w-8 h-8 text-white"></FaClipboardList>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-500 flex flex-col justify-between">
          <h1 className="text-lg font-semibold text-gray-500 pt-3 pb-1 px-1">
            {projectLoading ? "Loading..." : project.project_name}
          </h1>
          <span class=" w-fit ml-1 px-1 font-semibold text-xs leading-tight text-green-700 bg-green-100 rounded-sm whitespace-nowrap">
            {projectLoading ? "Loading..." : project.project_status}
          </span>
          <div>
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "List" ? "text-blue-600 border-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick("List")}
                >
                  <FaList className="inline-block mr-2" /> List
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Calendar"
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Calendar")}
                >
                  <FaCalendar className="inline-block mr-2" /> Calendar
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Board" ? "text-blue-600 border-blue-600" : ""
                  }`}
                  onClick={() => handleTabClick("Board")}
                >
                  <FaClipboard className="inline-block mr-2" /> Board
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Dashboard"
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Dashboard")}
                >
                  <FaChartBar className="inline-block mr-2" /> Dashboard
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Member"
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Member")}
                >
                  <FaUsers className="inline-block mr-2" /> Member
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className={`inline-block px-3 py-2 border-b-2 border-transparent rounded-t-lg hover:bg-blue-300 hover:text-blue-600 hover:border-blue-300 dark:hover:text-gray-300 ${
                    activeTab === "Details"
                      ? "text-blue-600 border-blue-600"
                      : ""
                  }`}
                  onClick={() => handleTabClick("Details")}
                >
                  <FaUsers className="inline-block mr-2" /> Details
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Body content */}

      <div>
        {activeTab !== "Dashboard" && activeTab !== "Member" &&  activeTab !== "Details" && (
          <div className="flex items-center justify-between m-4">
            <div className="flex items-center space-x-2">
              <Dropdown
                parent={"Sort By"}
                children={["Name", "Due_Date", "Priority", "Status", "Default"]}
                OnChange={setSortCriteria}
              />
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button
                onClick={() => {
                  openStageModal();
                }}
                type="button"
                className="px-2 py-2 gap-x-1 md:px-3 md:py-2 md:gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80 hover:bg-blue-600 flex items-center text-sm font-semibold md:text-base shadow-sm ring-1 ring-inset ring-gray-300"
              >
                <FaPlus className="w-3 h-3 md:w-4 md:h-4" />{" "}
                {/* Adjust icon size */}
                <div className="ml-1 md:ml-2">Project Stage</div>{" "}
                {/* Adjust margin */}
              </button>
              <button
                onClick={() => {
                  opentCreateProjectTaskModal();
                  setModalTask(taskSample);
                }}
                type="button"
                className="px-2 py-2 gap-x-1 md:px-3 md:py-2 md:gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80 hover:bg-blue-600 flex items-center text-sm font-semibold md:text-base shadow-sm ring-1 ring-inset ring-gray-300"
              >
                <FaPlus className="w-3 h-3 md:w-4 md:h-4" />{" "}
                {/* Adjust icon size */}
                <div className="ml-1 md:ml-2">Add Task</div>{" "}
                {/* Adjust margin */}
              </button>
            </div>
          </div>
        )}

        {isOpenStageModal && <ProjectStageModal onClose={closeStageModal} />}
        <projectTaskContext.Provider value={{ sortCriteria }}>
          {activeTab === "List" && <ProjectList />}
          {activeTab === "Calendar" && <ProjectCalender />}
          {activeTab === "Board" && <ProjectBoard />}
          {activeTab === "Dashboard" && <ProjectDashboard />}
          {activeTab === "Member" && <ProjectMember />}
          {activeTab === "Details" && <ProjectDetail />}
        </projectTaskContext.Provider>
      </div>
    </div>
  );
};

export default Project;
