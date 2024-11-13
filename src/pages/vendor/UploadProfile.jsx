import { useState, useEffect } from "react";
import API from "../../api/axios"; // Axios instance

const UploadProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    techStacks: "",
    experience: "",
    passingYear: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);

  // Fetch profiles on component mount
  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await API.get("/profiles");
      setProfiles(response.data);
    } catch (error) {
      console.error("Failed to fetch profiles:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadProfile = async () => {
    if (
      !newProfile.name.trim() ||
      !newProfile.techStacks.trim() ||
      !newProfile.experience.trim() ||
      !newProfile.passingYear.trim() ||
      !selectedFile
    ) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newProfile.name);
    formData.append("techStacks", newProfile.techStacks);
    formData.append("experience", newProfile.experience);
    formData.append("passingYear", newProfile.passingYear);
    formData.append("file", selectedFile);

    try {
      await API.post("/profiles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchProfiles(); // Refresh the profile list
      setNewProfile({
        name: "",
        techStacks: "",
        experience: "",
        passingYear: "",
      });
      setSelectedFile(null);
      setIsUploadModalOpen(false); // Close modal after upload
    } catch (error) {
      console.error("Failed to upload profile:", error);
    }
  };

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const openDeleteModal = (profile) => {
    setProfileToDelete(profile);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteProfile = async () => {
    try {
      await API.delete(`/profiles/${profileToDelete._id}`);
      fetchProfiles(); // Refresh the profile list
      setIsDeleteModalOpen(false);
      setProfileToDelete(null);
    } catch (error) {
      console.error("Failed to delete profile:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Upload Profiles</h2>

      <button
        onClick={() => setIsUploadModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition mb-6"
      >
        Upload Profile
      </button>

      <h3 className="text-xl font-bold mb-4">Uploaded Profiles</h3>
      <ul className="space-y-4">
        {profiles.map((profile) => (
          <li
            key={profile._id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{profile?.name}</h3>
              <p className="text-gray-600">Status: {profile?.status}</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => handleViewProfile(profile)}
                className="text-blue-500 hover:underline"
              >
                View
              </button>
              <button
                onClick={() => openDeleteModal(profile)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">Upload Profile</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newProfile.name}
              onChange={handleInputChange}
              className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="techStacks"
              placeholder="Tech Stacks (comma-separated)"
              value={newProfile.techStacks}
              onChange={handleInputChange}
              className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              value={newProfile.experience}
              onChange={handleInputChange}
              className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="passingYear"
              placeholder="Graduate Passing Year"
              value={newProfile.passingYear}
              onChange={handleInputChange}
              className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              name="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadProfile}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-2">{selectedProfile?.name}</h3>
            <div className="flex justify-between">
              <div>
                <p className="mb-1 text-sm">Status: {selectedProfile.status}</p>
                <p className="mb-1 text-sm">
                  Tech Stack: {selectedProfile.techStacks}
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm">
                  Experience: {selectedProfile.experience}
                </p>
                <p className="mb-4 text-sm">
                  Passing Year: {selectedProfile.passingYear}
                </p>
              </div>
            </div>
            <h4 className="text-md font-semibold mb-2">Resume Preview</h4>
            <div className="mb-4 max-h-64 overflow-y-auto">
              <embed
                src={`http://localhost:8081/${selectedProfile.file}`}
                type="application/pdf"
                className="w-full h-[500px] border rounded-md"
              />
            </div>
            <h4 className="text-lg font-semibold mb-2">Jobs</h4>
            {selectedProfile.jobs.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {selectedProfile.jobs.map((job, index) => (
                  <li key={index}>{job}</li>
                ))}
              </ul>
            ) : (
              <p>No jobs assigned yet.</p>
            )}
            <button
              onClick={() => setSelectedProfile(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this profile?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProfile}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadProfile;
