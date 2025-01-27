import React, { useState, useEffect } from "react";
import api, { apiRequest } from "../../api/api";
// import { useNavigate } from "react-router-dom";

const MilestoneModal = ({ onClose, initialValue }) => {
  const [milestoneName, setMilestoneName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  // const navigate = useNavigate();

  useEffect(() => {
    if (initialValue) {
      setMilestoneName(initialValue.milestoneName || "");
      setStartDate(initialValue.startDate || "");
      setEndDate(initialValue.endDate || "");
    }
  }, [initialValue]);

  const handleNameChange = (event) => {
    setMilestoneName(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSave = async () => {
    if (milestoneName.trim() === "") {
      alert("Please enter a milestone name.");
      return;
    }

    setIsLoading(true); // Disable button when request starts

    try {
      const milestone_id = await apiRequest("post", "api/v1/milestones", {
        milestone_name: milestoneName,
        start_date: startDate,
        end_date: endDate,
      });

      console.log(milestone_id);
      // navigate("/app", { state: { milestone_id: 1 } });
      // Close the modal after saving
      onClose();
    } catch (error) {
      console.error("Failed to save milestone:", error);
      alert("An error occurred while saving the milestone.");
    } finally {
      setIsLoading(false); // Re-enable button after request completes
    }
  };

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4 text-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
            <div className="bg-gray-800 text-white py-4 px-6">
              <h3 className="text-lg font-semibold">Milestone</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Milestone Name:
                </label>
                <input
                  type="text"
                  value={milestoneName}
                  onChange={handleNameChange}
                  className="w-full border rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Enter milestone name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Start Date:
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  className="w-full border rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  End Date:
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  className="w-full border rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="bg-gray-100 py-3 px-4 flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? 'Saving...' : 'Save'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                disabled={isLoading} // Disable button when loading
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MilestoneModal;
