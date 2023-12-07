import React from "react";
import { useState } from "react";

import { FaInbox , FaClipboardList , FaHome, FaChartBar, FaProjectDiagram,FaUser,FaUsers, FaChartLine, FaChartPie, FaChartArea} from "react-icons/fa";

function Sidebar({ isOpen, TabNavigate }) {
  const [isOpendrop, setIsOpendrop] = useState(false);
  const [isOpendropInsight, setIsOpendropInsight] = useState(false);
  const [isOpendropProject, setIsOpendropProject] = useState(false);
  const [isOpendropTeam, setIsOpendropTeam] = useState(false);

  const NavigateTab = (Tab) => {
    TabNavigate(Tab);
  };

  const toggleDropdownInsight = () => {
    setIsOpendropInsight(!isOpendropInsight);
  };

  const toggleDropdownProject = () => {
    setIsOpendropProject(!isOpendropProject);
  };

  const toggleDropdownTeam = () => {
    setIsOpendropTeam(!isOpendropTeam);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-28 sm:w-64 h-screen bg-glasses backdrop-blur-12 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 10, marginTop: "42px" }}
      >
        <div class="flex flex-col items-start w-full h-full overflow-hidden text-blue-500 rounded">
          <div class="flex flex-col items-center w-full mt-3  border-gray-300">
            <button
              class="flex items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm"
              onClick={() => NavigateTab("HomeTab")}
            >
              <FaHome class="w-3 h-3 stroke-current" />
              <span class="ml-2 text-sm font-medium text-gray-700">Home</span>
            </button>

            <button
              class="flex items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm"
              onClick={() => NavigateTab("MyTask")}
            >
              <FaClipboardList class="w-3 h-3 stroke-current" />

              <span class="ml-2 text-sm font-medium text-gray-700">MyTask</span>
            </button>

            <button
              class="flex items-center w-full h-8 px-3 mt-1 hover:bg-glasses hover:backdrop-blur-sm rounded"
              onClick={() => NavigateTab("Inbox")}
            >
              <FaInbox class="w-3 h-3 stroke-current" />

              <span class="ml-2 text-sm font-medium text-gray-700">Inbox</span>
            </button>
          </div>
          <div class="flex flex-col items-center w-full mt-1 border-t border-blue-400">
            <button
              className="flex justify-between items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm focus:outline-none"
              onClick={toggleDropdownInsight}
            >
              <div className="flex items-center">
                <FaChartBar className="w-3 h-3 stroke-current" />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Insight
                </span>
              </div>
              <svg
                className={`w-3 h-3 stroke-current ${
                  isOpendrop ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>{" "}
            </button>
            {isOpendropInsight && (
              <div className="flex flex-col items-center w-full">
                {/* Dropdown content */}
                <a className="flex items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm">
                  <FaChartArea className="w-3 h-3 stroke-current text-blue-900" />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Reporting
                  </span>
                </a>
                <a className="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-glasses hover:backdrop-blur-sm">
                <FaChartPie className="w-3 h-3 stroke-current text-blue-900" />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Dashboard
                  </span>
                </a>
                {/* Add more dropdown items as needed */}
              </div>
            )}
            <button
              className="flex justify-between items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm focus:outline-none"
              onClick={toggleDropdownProject}
            >
              <div className="flex items-center">
                <FaProjectDiagram className="w-3 h-3 stroke-current" />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Project
                </span>
              </div>
              <svg
                className={`w-3 h-3 stroke-current ${
                  isOpendrop ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>{" "}
            </button>
            {isOpendropProject && (
              <div className="flex flex-col items-center w-full">
                {/* Dropdown content */}
                <a className="flex items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm">
                  {/* ...dropdown item icon... */}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Product 1
                  </span>
                </a>
                <a className="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-glasses hover:backdrop-blur-sm">
                  {/* ...dropdown item icon... */}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Product 2
                  </span>
                </a>
                {/* Add more dropdown items as needed */}
              </div>
            )}

            <button
              className="flex justify-between items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm focus:outline-none"
              onClick={toggleDropdownTeam}
            >
              <div className="flex items-center">
                
                <FaUsers className="w-3 h-3 stroke-current" />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Team
                </span>
              </div>
              <svg
                className={`w-3 h-3 stroke-current ${
                  isOpendrop ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>{" "}
            </button>
            {isOpendropTeam && (
              <div className="flex flex-col items-center w-full">
                {/* Dropdown content */}
                <a className="flex items-center w-full h-8 px-3 mt-1 rounded  hover:bg-glasses hover:backdrop-blur-sm">
                  {/* ...dropdown item icon... */}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Product 1
                  </span>
                </a>
                <a className="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-glasses hover:backdrop-blur-sm">
                  {/* ...dropdown item icon... */}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Product 2
                  </span>
                </a>
                {/* Add more dropdown items as needed */}
              </div>
            )}
          </div>
          <a class="flex items-center justify-start w-full h-16 mt-auto mb-10 border-t border-blue-400 hover:bg-glasses hover:backdrop-blur-sm">
            <FaUser className="w-6 h-6 stroke-current ml-4" />
            <span class="ml-2 text-sm font-medium text-gray-700">Account</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
