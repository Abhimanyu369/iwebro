/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import API from '../../api/axios'; // Axios instance

const MatchingProfilesModal = ({ requirement, onClose }) => {
  const [profiles, setProfiles] = useState([]); // Store fetched profiles
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  // Fetch all profiles when the modal opens
  useEffect(() => {
    fetchAllProfiles();
  }, []);

  const fetchAllProfiles = async () => {
    try {
      const response = await API.get('/profiles'); // Fetch all vendor profiles
      setProfiles(response.data);
    } catch (error) {
      console.error('Failed to fetch profiles:', error);
    }
  };

  const handleSelectProfile = (profileId) => {
    if (selectedProfiles.includes(profileId)) {
      setSelectedProfiles(selectedProfiles.filter((id) => id !== profileId));
    } else {
      setSelectedProfiles([...selectedProfiles, profileId]);
    }
  };

  const handleSubmit = async () => {
    try {
      // Submit selected profiles to the backend (if required)
      await API.post(`/requirements/${requirement._id}/assign-profiles`, {
        profiles: selectedProfiles,
      });
      alert(`Selected Profiles: ${selectedProfiles.join(', ')}`);
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error('Failed to assign profiles:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-9/12">
        <h3 className="text-xl font-bold mb-4">Requirement Details</h3>
        <p className="mb-6">{requirement.title}</p>

        <h4 className="text-lg font-bold mb-4">Available Profiles</h4>
        <ul className="space-y-4">
          {profiles.map((profile) => (
            <li
              key={profile._id}
              className={`p-4 rounded-lg shadow-md flex justify-between ${
                selectedProfiles.includes(profile._id) ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold">{profile?.title}</h3>
                <p className="text-gray-600">Skills: {profile?.skills?.join(', ')}</p>
              </div>
              <button
                onClick={() => handleSelectProfile(profile._id)}
                className={`px-4 py-2 rounded-md ${
                  selectedProfiles.includes(profile._id)
                    ? 'bg-red-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {selectedProfiles.includes(profile._id) ? 'Deselect' : 'Select'}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchingProfilesModal;
