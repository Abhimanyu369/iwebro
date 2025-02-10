import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ProfileApprovals = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filterType, setFilterType] = useState("all"); // "all", "vendors", "clients"
  const [searchParams] = useSearchParams(); // For reading query parameters

  useEffect(() => {
    fetchDummyProfiles();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filterType, profiles]);

  useEffect(() => {
    const profileId = searchParams.get("profileId");
    if (profileId) {
      const profile = profiles.find((p) => p._id === profileId);
      if (profile) {
        setSelectedProfile(profile);
      }
    }
  }, [searchParams, profiles]);

  const fetchDummyProfiles = () => {
    // Dummy data for newly created profiles
    const dummyProfiles = [
      {
        _id: "1",
        name: "John Doe",
        email: "john@example.com",
        userRole: "vendors",
        techStack: ["React", "Node.js"],
        experience: 5,
        graduateYear: 2018,
      },
      {
        _id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        userRole: "clients",
        techStack: ["Angular", "Python"],
        experience: 8,
        graduateYear: 2015,
      },
    ];
    setProfiles(dummyProfiles);
  };

  const applyFilters = () => {
    if (filterType === "all") {
      setFilteredProfiles(profiles);
    } else {
      setFilteredProfiles(
        profiles.filter((profile) => profile.userRole === filterType)
      );
    }
  };

  const handleApprove = (profileId) => {
    console.log(`Profile ${profileId} approved.`);
    setSelectedProfile(null); // Close modal
  };

  const handleReject = (profileId) => {
    console.log(`Profile ${profileId} rejected.`);
    setSelectedProfile(null); // Close modal
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Profile Approvals</h2>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            filterType === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setFilterType("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filterType === "vendors"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setFilterType("vendors")}
        >
          Vendors
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filterType === "clients"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setFilterType("clients")}
        >
          Clients
        </button>
      </div>

      {/* Profile List */}
      <ul className="space-y-4">
        {filteredProfiles.map((profile) => (
          <li
            key={profile._id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-500">
                Role: {profile.userRole === "vendors" ? "Vendor" : "Client"}
              </p>
            </div>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setSelectedProfile(profile)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">{selectedProfile.name}</h3>
            <p>
              <strong>Email:</strong> {selectedProfile.email}
            </p>
            <p>
              <strong>Role:</strong>{" "}
              {selectedProfile.userRole === "vendors" ? "Vendor" : "Client"}
            </p>
            <p>
              <strong>Technology:</strong>{" "}
              {selectedProfile.techStack.join(", ")}
            </p>
            <p>
              <strong>Years of Experience:</strong>{" "}
              {selectedProfile.experience}
            </p>
            <p>
              <strong>Passing Year:</strong> {selectedProfile.graduateYear}
            </p>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => handleReject(selectedProfile._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={() => handleApprove(selectedProfile._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileApprovals;
