import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();

  const handleNotificationClick = (notification) => {
    if (notification.type === "profileApproval") {
      navigate(`/admin-dashboard/approval-requests?profileId=${notification.profileId}`);
    }
    if (notification.type === "contractApproval") {
      navigate(`/admin-dashboard/contract-requests?contractId=${notification.contractId}`);
    }
  };

  useEffect(() => {
    const dummyNotifications = [
      {
        _id: "1",
        message: "New vendor profile approval required",
        type: "profileApproval", // Notification type
        profileId: "1", // Associated profile ID
        timestamp: new Date().toISOString(),
      },
      {
        _id: "2",
        message: "Profile uploaded by Vendor A",
        type: "profileApproval",
        profileId: "2",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "3",
        message: "Contract signed by Vendor B",
        type: "contractUpdate", // Other notification types
        contractId: "101", // Example ID for contract
        timestamp: new Date().toISOString(),
      },
      {
        _id: "4",
        message: "New user registered",
        type: "userRegistration",
        userId: "501", // Example ID for user
        timestamp: new Date().toISOString(),
      },
      {
        _id: "5",
        message: "Vendor C updated their profile",
        type: "profileUpdate",
        profileId: "3",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "6",
        message: "Contract request from Client A requires approval",
        type: "contractApproval",
        contractId: "1",
        timestamp: new Date().toISOString(),
      },
      {
        _id: "7",
        message: "Contract request from Client B requires approval",
        type: "contractApproval",
        contractId: "2",
        timestamp: new Date().toISOString(),
      },
    ];
    setNotifications(dummyNotifications);
  }, []);

  return (
    <div className="p-4">
      {/* Notifications */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Notifications</h2>
        </div>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification._id}
              className="bg-white p-4 rounded-lg shadow-md"
              onClick={() => handleNotificationClick(notification)}
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
  );
};

export default Notifications;
