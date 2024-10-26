/* eslint-disable react/prop-types */
import { useState } from 'react';

const dummyProfiles = [
  { id: 1, name: 'John Doe', skills: 'React, Node.js' },
  { id: 2, name: 'Jane Smith', skills: 'MongoDB, Express' },
  { id: 3, name: 'Sam Wilson', skills: 'JavaScript, Next.js' },
];

const MatchingProfilesModal = ({ requirement, onClose }) => {
  const [selectedProfiles, setSelectedProfiles] = useState([]);

  const handleSelectProfile = (profileId) => {
    if (selectedProfiles.includes(profileId)) {
      setSelectedProfiles(selectedProfiles.filter((id) => id !== profileId));
    } else {
      setSelectedProfiles([...selectedProfiles, profileId]);
    }
  };

  const handleSubmit = () => {
    alert(`Selected Profiles: ${selectedProfiles.join(', ')}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-9/12">
        <h3 className="text-xl font-bold mb-4">Requirement Details</h3>
        <p className="mb-6">{requirement}</p>

        <h4 className="text-lg font-bold mb-4">Matching Profiles</h4>
        <ul className="space-y-4">
          {dummyProfiles.map((profile) => (
            <li
              key={profile.id}
              className={`p-4 rounded-lg shadow-md flex justify-between ${
                selectedProfiles.includes(profile.id) ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p className="text-gray-600">Skills: {profile.skills}</p>
              </div>
              <button
                onClick={() => handleSelectProfile(profile.id)}
                className={`px-4 py-2 rounded-md ${
                  selectedProfiles.includes(profile.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {selectedProfiles.includes(profile.id) ? 'Deselect' : 'Select'}
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
