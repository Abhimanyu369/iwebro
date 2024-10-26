import { useState } from 'react';

const dummyJobs = [
  {
    id: 1,
    title: 'Frontend Development',
    status: 'ONGOING',
    profiles: ['John Doe', 'Jane Smith'],
  },
  {
    id: 2,
    title: 'Backend API Development',
    status: 'COMPLETED',
    profiles: ['Sam Wilson'],
  },
];

const AssignedJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Assigned Jobs</h2>

      <ul className="space-y-4">
        {dummyJobs.map((job) => (
          <li key={job.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between">
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

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-[500px]">
            <h3 className="text-xl font-bold mb-4">{selectedJob.title}</h3>
            <p className="mb-4">Status: {selectedJob.status}</p>
            <h4 className="text-lg font-semibold mb-2">Assigned Profiles</h4>
            <ul className="list-disc list-inside space-y-2">
              {selectedJob.profiles.map((profile, index) => (
                <li key={index}>{profile}</li>
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
