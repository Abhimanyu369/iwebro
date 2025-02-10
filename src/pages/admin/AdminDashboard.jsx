import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaBell,
  FaUserCircle,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const AdminDashboardLayout = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [expandedSections, setExpandedSections] = useState({}); // To track expanded sections
  const navigate = useNavigate();

  const sidebarMenu = [
    { text: "Dashboard", link: "./" },
    { text: "Profile Requests", link: "approval-requests" },
    {
      text: "Contracts",
      type: "section",
      items: [
        { text: "All Contracts", link: "contracts" },
        { text: "Contract Requests", link: "contract-requests" },
      ],
    },
    { text: "Queries", link: "queries" },
    {
      text: "Vendors",
      type: "section",
      items: [{ text: "Vendor Listing", link: "vendor-listing" }],
    },
    {
      text: "Clients",
      type: "section",
      items: [{ text: "Client Listing", link: "client-listing" }],
    },
    { text: "Notifications", link: "notifications" },
  ];

  const handleSectionToggle = (sectionText) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionText]: !prev[sectionText],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin", { replace: true });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white flex items-center justify-between p-4">
        <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <div className="relative">
            {/* Bell Icon with Notification Count */}
            <div className="relative">
              <FaBell
                className="text-2xl cursor-pointer hover:text-gray-300"
                onClick={() =>
                  setIsNotificationDropdownOpen(!isNotificationDropdownOpen)
                }
              />
              {/* Notification Bubble */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
            </div>

            {/* Notification Dropdown */}
            {isNotificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg transition-all duration-200">
                {/* Header */}
                <p className="p-4 border-b font-bold">Notifications</p>
                {/* Notification Items */}
                <ul className="p-2 space-y-2 max-h-60 overflow-y-auto">
                  <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center">
                    <span>New vendor request received</span>
                    <span className="text-xs text-gray-500">1h ago</span>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center">
                    <span>Profile uploaded by Vendor A</span>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded flex justify-between items-center">
                    <span>Contract signed by Vendor B</span>
                    <span className="text-xs text-gray-500">3h ago</span>
                  </li>
                </ul>
                {/* View All Notifications Button */}
                <div className="border-t p-2">
                  <button
                    onClick={() => {
                      setIsNotificationDropdownOpen(false); // Close dropdown
                      navigate("notifications"); // Navigate to notifications page
                    }}
                    className="w-full text-center text-blue-500 hover:underline"
                  >
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-gray-300"
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg transition-all duration-200">
                <ul className="p-2 space-y-2">
                  <li
                    className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                    onClick={() => navigate("/update-profile")}
                  >
                    Update Profile
                  </li>
                  <li
                    className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between p-6">
          <nav className="space-y-4">
            {sidebarMenu.map((menu, index) => {
              if (menu.type === "section") {
                return (
                  <div key={index}>
                    <div
                      className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSectionToggle(menu.text)}
                    >
                      <span>{menu.text}</span>
                      {expandedSections[menu.text] ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                    {expandedSections[menu.text] && (
                      <div className="ml-4 space-y-2">
                        {menu.items.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.link}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded ${
                                isActive ? "bg-gray-700" : "hover:bg-gray-700"
                              }`
                            }
                          >
                            {subItem.text}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <NavLink
                    key={index}
                    to={menu.link}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded ${
                        isActive ? "bg-gray-700" : "hover:bg-gray-700"
                      }`
                    }
                  >
                    {menu.text}
                  </NavLink>
                );
              }
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 p-8 bg-gray-100 overflow-y-auto"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
