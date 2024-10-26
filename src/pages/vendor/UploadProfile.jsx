import { useState } from 'react';

const dummyProfiles = [
  { id: 1, title: 'John Doe', status: 'ENGAGED', jobs: ['Frontend Development'] },
  { id: 2, title: 'Jane Smith', status: 'AVAILABLE', jobs: [] },
];

const UploadProfile = () => {
  const [profiles, setProfiles] = useState(dummyProfiles);
  const [newProfile, setNewProfile] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadProfile = () => {
    if (newProfile.trim() && selectedFile) {
      const newProfileEntry = {
        id: profiles.length + 1,
        title: newProfile,
        status: 'AVAILABLE',
        jobs: [],
      };
      setProfiles([...profiles, newProfileEntry]);
      setNewProfile('');
      setSelectedFile(null);
      setIsUploadModalOpen(false); // Close modal after upload
    }
  };

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const openDeleteModal = (profile) => {
    setProfileToDelete(profile);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteProfile = () => {
    setProfiles(profiles.filter((p) => p.id !== profileToDelete.id));
    setIsDeleteModalOpen(false);
    setProfileToDelete(null);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Upload Profiles</h2>

      {/* Upload Profile Button */}
      <button
        onClick={() => setIsUploadModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition mb-6"
      >
        Upload Profile
      </button>

      <h3 className="text-xl font-bold mb-4">Uploaded Profiles</h3>
      <ul className="space-y-4">
        {profiles.map((profile) => (
          <li key={profile.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">{profile.title}</h3>
              <p className="text-gray-600">Status: {profile.status}</p>
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

      {/* Upload Profile Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">Upload Profile</h3>
            <input
              type="text"
              placeholder="Profile Title"
              value={newProfile}
              onChange={(e) => setNewProfile(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input type="file" accept=".pdf" onChange={handleFileUpload} className="mb-4" />
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

      {/* Profile Details Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">{selectedProfile.title}</h3>
            <p className="mb-4">Status: {selectedProfile.status}</p>
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

      {/* Delete Confirmation Modal */}
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
