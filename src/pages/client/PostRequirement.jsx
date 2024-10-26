import { useState } from 'react';
import MatchingProfilesModal from './MatchingProfiles';

const PostRequirement = () => {
  const [requirements, setRequirements] = useState([]);
  const [newRequirement, setNewRequirement] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track which requirement is being edited
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [requirementToDelete, setRequirementToDelete] = useState(null);
  const [selectedRequirement, setSelectedRequirement] = useState(null);

  const openCreateModal = (requirement = '', index = null) => {
    setNewRequirement(requirement);
    setEditIndex(index);
    setIsCreateModalOpen(true);
  };

  const handleCreateOrUpdateRequirement = () => {
    if (newRequirement.trim() === '') return;

    if (editIndex !== null) {
      const updatedRequirements = [...requirements];
      updatedRequirements[editIndex] = newRequirement;
      setRequirements(updatedRequirements);
    } else {
      setRequirements([...requirements, newRequirement]);
    }

    setNewRequirement('');
    setEditIndex(null);
    setIsCreateModalOpen(false);
  };

  const openDeleteModal = (index) => {
    setRequirementToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteRequirement = () => {
    setRequirements(requirements.filter((_, i) => i !== requirementToDelete));
    setRequirementToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const openMatchingProfilesModal = (requirement) => {
    setSelectedRequirement(requirement);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Requirements</h2>

      {/* Create Requirement Button */}
      <button
        onClick={() => openCreateModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Create Requirement
      </button>

      {/* Requirement List */}
      <ul className="space-y-4 mt-6">
        {requirements.map((req, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between"
          >
            <span>{req}</span>
            <div className="space-x-4">
              <button
                onClick={() => openCreateModal(req, index)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => openDeleteModal(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
              <button
                onClick={() => openMatchingProfilesModal(req)}
                className="text-green-500 hover:underline"
              >
                View
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Create/Edit Requirement Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">
              {editIndex !== null ? 'Edit Requirement' : 'Create Requirement'}
            </h3>
            <textarea
              value={newRequirement}
              onChange={(e) => setNewRequirement(e.target.value)}
              placeholder="Enter your requirement..."
              rows={4}
              className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateOrUpdateRequirement}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                {editIndex !== null ? 'Update' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
            <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete this requirement?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteRequirement}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Matching Profiles Modal */}
      {selectedRequirement && (
        <MatchingProfilesModal
          requirement={selectedRequirement}
          onClose={() => setSelectedRequirement(null)}
        />
      )}
    </div>
  );
};

export default PostRequirement;
