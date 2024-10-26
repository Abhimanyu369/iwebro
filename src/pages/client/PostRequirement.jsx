import { useState, useEffect } from 'react';
import API from '../../api/axios'; // Axios instance
import MatchingProfilesModal from './MatchingProfiles';

const PostRequirement = () => {
  const [requirements, setRequirements] = useState([]);
  const [newRequirement, setNewRequirement] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [requirementToDelete, setRequirementToDelete] = useState(null);
  const [selectedRequirement, setSelectedRequirement] = useState(null);

  // Fetch requirements on component mount
  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await API.get('/requirements');
      setRequirements(response.data);
    } catch (error) {
      console.error('Failed to fetch requirements:', error);
    }
  };

  const openCreateModal = (requirement = '', index = null) => {
    setNewRequirement(requirement);
    setEditIndex(index);
    setIsCreateModalOpen(true);
  };

  const handleCreateOrUpdateRequirement = async () => {
    if (newRequirement.trim() === '') return;

    try {
      if (editIndex !== null) {
        const updatedRequirement = await API.post(
          `/requirements/${requirements[editIndex]._id}`,
          { title: newRequirement }
        );
        const updatedRequirements = [...requirements];
        updatedRequirements[editIndex] = updatedRequirement.data;
        setRequirements(updatedRequirements);
      } else {
        const newReq = await API.post('/requirements', { title: newRequirement });
        setRequirements([...requirements, newReq.data]);
      }

      setNewRequirement('');
      setEditIndex(null);
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create or update requirement:', error);
    }
  };

  const openDeleteModal = (index) => {
    setRequirementToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteRequirement = async () => {
    try {
      await API.delete(`/requirements/${requirements[requirementToDelete]._id}`);
      setRequirements(requirements.filter((_, i) => i !== requirementToDelete));
      setRequirementToDelete(null);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Failed to delete requirement:', error);
    }
  };

  const openMatchingProfilesModal = (requirement) => {
    setSelectedRequirement(requirement);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Requirements</h2>

      <button
        onClick={() => openCreateModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Create Requirement
      </button>

      <ul className="space-y-4 mt-6">
        {requirements.map((req, index) => (
          <li
            key={req._id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between"
          >
            <span>{req.title}</span>
            <div className="space-x-4">
              <button
                onClick={() => openCreateModal(req.title, index)}
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
