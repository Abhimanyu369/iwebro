import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API with dummy data
    const dummyActivities = [
      {
        _id: "1",
        action: "Approved Contract",
        user: "Admin",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "2",
        action: "Rejected User",
        user: "Admin",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "3",
        action: "Ended Contract",
        user: "Admin",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "4",
        action: "Approved User",
        user: "Admin",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "5",
        action: "Rejected Contract",
        user: "Admin",
        timestamp: new Date().toISOString(),
      },
    ];
    const dummyNotifications = [
      {
        _id: "1",
        message: "New vendor request received",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "2",
        message: "Profile uploaded by Vendor A",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "3",
        message: "Contract signed by Vendor B",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "4",
        message: "New user registered",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "5",
        message: "Vendor C updated their profile",
        timestamp: new Date().toISOString(),
      },
    ];
    setActivities(dummyActivities);
    setNotifications(dummyNotifications);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">System Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Active Contracts Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Active Contracts
          </h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">10</p>
          <p className="text-sm text-gray-500 mt-1">
            Currently active in the system
          </p>
        </div>

        {/* Active Contracts Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Active Profiles
          </h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">30</p>
          <p className="text-sm text-gray-500 mt-1">
            Currently active in the system
          </p>
        </div>

        {/* Total Profiles Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">20</p>
          {/* Additional Counts */}
          <div className="space-x-20 grid grid-cols-2">
            <div className="flex gap-3 items-center">
              <span className="text-gray-700">Vendors:</span>
              <span className="text-lg font-bold text-blue-600">12</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-700">Clients:</span>
              <span className="text-lg font-bold text-blue-600">8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column layout for Recent Activities and Notifications */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div>
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
                    <strong>User:</strong> {activity.user}
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

        {/* Notifications */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Notifications</h2>
            <Link to="/notifications" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification._id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <p>{notification.message}</p>
                <p className="text-sm text-gray-500">
                  {new Date(notification.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
