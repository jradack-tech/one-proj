import React, { useState, createContext } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Inbox from "../pages/inbox";
import MyTask from "../pages/myTask";
import HomeTab from "../components/homeTab";
import ProjectList from "../components/projectList";
import TeamOverview from "../components/teamOverview";
import TeamPage from "../pages/teamPage";
import Project from "../pages/project";
import TeamHeader from "../components/teamHeader";
import TeamDashboard from "../components/teamDashboard";
import MyDashboard from "../components/myDashboard";
import TaskModal from "../components/taskModal";
import CreateTaskModal from "../components/createTaskModal";
import SendMessageModal from "../components/sendMessageModal";
import ProjectModal from "../components/projectModal";
import ProjectCreateTaskModal from "../components/projectCreateTaskModal";
import MilestoneModal from "../components/milestoneModal";

export const modalContext = createContext(null);

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("HomeTab");
  const [tabID, setTabID] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCreateProjectTaskModalOpen, setIsCreateProjectTaskModalOpen] = useState(false);
  const [isSendMessageModalOpen, setIsSendMessageModalOpen] = useState(false);
  const [modalTask, setModalTask] = useState({});
  const [milestoneData, setMilestoneData] = useState({});
  const [projectStage, setProjectStage] = useState({});



  const openModal = () => {
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const openMessageModal = () => {
    setIsSendMessageModalOpen(true);
  };

  const closeModalMessage = () => {
    setIsSendMessageModalOpen(false);
  };

  const openProjectModal = () => {
    setIsProjectModalOpen(true);
  };

  const opentCreateProjectTaskModal = () =>{
    setIsCreateProjectTaskModalOpen(true);
  }

  const closeCreateProjectTaskModal = () =>{
    setIsCreateProjectTaskModalOpen(false);
  }

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setActiveTab = (tab, tabID) => {
    setTab(tab);
    setTabID(tabID);
  };

  

  return (
    <div className="relative  ">
      {/* Header */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Body content */}
      <div className="flex bg-gradient-to-r from-[#65A0FD] via-[#E8CCCC] to-[#FFA9F1B5]">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} TabNavigate={setActiveTab} />

        {/* Main content */}
        <div
          className={`w-full h-full transition-all duration-300 ease-in-out mt-[82px] ${
            isOpen ? " pl-32 md:pl-72 sm:pl-4 pr-4" : "pl-4"
          }`}
        >
          {/* Your page content goes here */}

          {/*<Inbox /> */}

          <modalContext.Provider
            value={{
              isModalOpen,
              setIsModalOpen,
              closeModal,
              openModal,
              modalTask,
              setModalTask,
              setProjectStage,
              setMilestoneData,
              isCreateModalOpen,
              setIsCreateModalOpen,
              closeCreateModal,
              openCreateModal,
              openMessageModal,
              isProjectModalOpen,
              setIsProjectModalOpen,
              openProjectModal,
              closeProjectModal,
              isCreateProjectTaskModalOpen,
              setIsCreateProjectTaskModalOpen,
              opentCreateProjectTaskModal,
              closeCreateProjectTaskModal,

              tabID,
              setTabID,
              setTab,
            }}
          >
            {tab === "HomeTab" && <HomeTab />}
            {tab === "Inbox" && <Inbox />}
            {tab === "MyTask" && <MyTask />}
            {tab === "Project" && <Project />}
            {tab === "Team" && <TeamHeader />}
            {tab === "Dashboard" && <MyDashboard />}

            <div className="w-full h-full flex justify-center items-center m-8">
              <TaskModal
                isOpen={isModalOpen}
                isClose={closeModal}
                taskData={modalTask}
                taskMilestone={milestoneData}
              />
              <ProjectModal
                isOpen={isProjectModalOpen}
                isClose={closeProjectModal}
                taskData={modalTask}
                projectStage={projectStage}
              />
              <CreateTaskModal
                isOpen={isCreateModalOpen}
                isClose={closeCreateModal}
                taskData={modalTask}
              />
              <SendMessageModal
                isOpen={isSendMessageModalOpen}
                onClose={closeModalMessage}
              />

              <ProjectCreateTaskModal
                isOpen={isCreateProjectTaskModalOpen}
                isClose={closeCreateProjectTaskModal}
                taskData={modalTask}
              />

            </div>
          </modalContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Main;
