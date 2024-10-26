import { useState, useEffect } from 'react';
import API from '../../api/axios'; // Axios instance

const AssignedJobs = () => {
  const [jobs, setJobs] = useState([]); // Store fetched jobs
  const [selectedJob, setSelectedJob] = useState(null); // Track selected job for viewing

  // Fetch assigned jobs on component mount
  useEffect(() => {
    fetchAssignedJobs();
  }, []);

  const fetchAssignedJobs = async () => {
    try {
      const response = await API.get('/jobs/assigned'); // API call to fetch jobs
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch assigned jobs:', error);
    }
  };

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Assigned Jobs</h2>

      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">Status: {job.status}</p>
            </div>
            <button
              onClick={() => handleViewJob(job)}
              className="text-blue-500 hover:underline"
            >
              View
            </button>
          </li>
        ))}
      </ul>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">{selectedJob.title}</h3>
            <p className="mb-4">Status: {selectedJob.status}</p>
            <h4 className="text-lg font-semibold mb-2">Assigned Profiles</h4>
            <ul className="list-disc list-inside space-y-2">
              {selectedJob.profiles.map((profile) => (
                <li key={profile._id}>{profile?.name}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedJob(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedJobs;
