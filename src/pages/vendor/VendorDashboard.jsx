import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const VendorDashboardLayout = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const handleLogout = () => {
    // Clear only relevant localStorage items
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  
    // Redirect to login page and replace history
    navigate('/signin', { replace: true });
  };

  // Handle clicks outside the dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
        setIsNotificationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsProfileDropdownOpen(false);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white flex items-center justify-between p-4">
        <h2 className="text-xl font-bold text-white">Vendor Dashboard</h2>
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <div className="relative" ref={notificationRef}>
            <FaBell
              className="text-2xl cursor-pointer hover:text-gray-300"
              onClick={toggleNotificationDropdown}
            />
            {isNotificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg transition-all duration-200">
                <p className="p-4 border-b">You have 3 new notifications</p>
                <ul className="p-2 space-y-2">
                  <li className="hover:bg-gray-100 p-2 rounded">Notification 1</li>
                  <li className="hover:bg-gray-100 p-2 rounded">Notification 2</li>
                  <li className="hover:bg-gray-100 p-2 rounded">Notification 3</li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div className="relative" ref={profileRef}>
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-gray-300"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg transition-all duration-200">
                <ul className="p-2 space-y-2">
                  <li
                    className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                    onClick={() => navigate('/update-profile')}
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
            <NavLink
              to="./"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="assigned-jobs"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Assigned Jobs
            </NavLink>

            <NavLink
              to="upload-profile"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Upload Profile
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
          <Outlet /> {/* Render child components here */}
        </main>
      </div>
    </div>
  );
};

export default VendorDashboardLayout;
