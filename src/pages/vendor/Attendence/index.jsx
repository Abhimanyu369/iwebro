import { useState } from "react";

const dummyData = [
  { id: 1, name: 'John Doe', date: '2025-04-09', status: 'Present' },
  { id: 2, name: 'Alice Smith', date: '2025-04-09', status: 'Absent' },
  { id: 3, name: 'Rahul Mehra', date: '2025-04-09', status: 'Half-day' },
  { id: 4, name: 'Emily Chen', date: '2025-04-09', status: 'Leave' },
];

const dummyDetails = {
  1: {
    name: 'John Doe',
    logs: [
      { date: '2025-04-01', status: 'Present' },
      { date: '2025-04-02', status: 'Absent' },
      { date: '2025-04-03', status: 'Half-day' },
    ],
  },
  2: {
    name: 'Alice Smith',
    logs: [
      { date: '2025-04-01', status: 'Leave' },
      { date: '2025-04-02', status: 'Present' },
    ],
  },
};

const AttendanceList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleView = (id) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  const selectedDetails = selectedId ? dummyDetails[selectedId] : null;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Developer Attendance</h2>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((dev, index) => (
            <tr key={dev.id}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{dev.name}</td>
              <td className="p-2 border">{dev.date}</td>
              <td className={`p-2 border font-medium ${getStatusColor(dev.status)}`}>
                {dev.status}
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => handleView(dev.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                Attendance Details - {selectedDetails.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-red-600 text-xl"
              >
                &times;
              </button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {selectedDetails.logs.map((log, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border">{log.date}</td>
                    <td className={`p-2 border font-medium ${getStatusColor(log.status)}`}>
                      {log.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

function getStatusColor(status) {
  switch (status) {
    case 'Present':
      return 'text-green-600';
    case 'Absent':
      return 'text-red-600';
    case 'Half-day':
      return 'text-yellow-600';
    case 'Leave':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
}

export default AttendanceList;
