
const dummyTrackerData = [
    {
      id: 1,
      name: "John Doe",
      loggedInAt: "2025-04-10T09:15:00",
      status: "Active",
      screenshot: "https://dummyimage.com/300x180/4a90e2/ffffff.png&text=Screenshot+1",
    },
    {
      id: 2,
      name: "Alice Smith",
      loggedInAt: "2025-04-10T10:05:00",
      status: "Idle",
      screenshot: "https://dummyimage.com/300x180/7ed6df/ffffff.png&text=Screenshot+2",
    },
    {
      id: 3,
      name: "Rahul Mehra",
      loggedInAt: "2025-04-10T10:30:00",
      status: "Active",
      screenshot: "https://dummyimage.com/300x180/f0932b/ffffff.png&text=Screenshot+3",
    },
  ];
  

const Tracker = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Talent Activity Tracker</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyTrackerData.map((talent) => (
          <div key={talent.id} className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold">{talent.name}</h3>
            <p className="text-sm text-gray-600">
              Logged in at: {new Date(talent.loggedInAt).toLocaleTimeString()}
            </p>
            <p
              className={`text-sm mt-1 font-medium ${
                talent.status === "Active" ? "text-green-600" : "text-yellow-600"
              }`}
            >
              Status: {talent.status}
            </p>
            <img
              src={talent.screenshot}
              alt="screenshot"
              className="mt-3 rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracker;
