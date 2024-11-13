import { useState, useEffect } from "react";
import API from "../../api/axios"; // Axios instance

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await API.get("/analytics");
      setActivities(response.data);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li
            key={activity._id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between"
          >
            <div>
              <p>
                <strong>Action:</strong> {activity.action}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {new Date(activity.timestamp).toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
