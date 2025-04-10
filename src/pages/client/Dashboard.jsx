import { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import API from "../../api/axios"; // Axios instance

const Dashboard = () => {
  const [activities, setActivities] = useState([]);
  const stats = {
    contracts: 10,
    profiles: 30,
    totalUsers: 20,
    vendors: 12,
    clients: 8,
  };

  // Dummy analytics data
  const onboardingData = [
    { month: "Jan", developers: 4 },
    { month: "Feb", developers: 6 },
    { month: "Mar", developers: 3 },
    { month: "Apr", developers: 8 },
    { month: "May", developers: 5 },
  ];

  const attendanceData = [
    { name: "Present", value: 60 },
    { name: "Absent", value: 20 },
    { name: "Leave", value: 15 },
    { name: "Half-day", value: 5 },
  ];

  const COLORS = ["#00C49F", "#FF8042", "#8884d8", "#FFD700"];

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
      <div className="p-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">System Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Active Contracts */}
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Active Contracts</h3>
            <p className="text-3xl text-blue-600 font-bold">
              {stats.contracts}
            </p>
            <p className="text-sm text-gray-500">
              Currently active in the system
            </p>
          </div>

          {/* Active Profiles */}
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Active Profiles</h3>
            <p className="text-3xl text-blue-600 font-bold">{stats.profiles}</p>
            <p className="text-sm text-gray-500">
              Currently active in the system
            </p>
          </div>

          {/* Total Users */}
          <div className="bg-white rounded shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl text-green-600 font-bold">
              {stats.totalUsers}
            </p>
            <p className="text-sm text-gray-500">
              Vendors:{" "}
              <span className="text-blue-600 font-semibold">
                {stats.vendors}
              </span>{" "}
              &nbsp;|&nbsp; Clients:{" "}
              <span className="text-blue-600 font-semibold">
                {stats.clients}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Monthly Developer Onboarding
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={onboardingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="developers" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Attendance Summary</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={attendanceData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {attendanceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-4">Recent Activities</h2>
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
