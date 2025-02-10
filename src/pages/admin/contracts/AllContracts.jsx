import { useState, useEffect } from "react";

const AllContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedContract, setSelectedContract] = useState(null);

  useEffect(() => {
    const dummyContracts = [
      { id: "1", client: "Client A", details: "Ongoing Contract A", status: "Ongoing" },
      { id: "2", client: "Client B", details: "Ended Contract B", status: "Ended" },
      { id: "3", client: "Client C", details: "Ongoing Contract C", status: "Ongoing" },
    ];
    setContracts(dummyContracts);
  }, []);

  const filteredContracts =
    filter === "All"
      ? contracts
      : contracts.filter((contract) => contract.status === filter);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">All Contracts</h2>
      <div className="mb-4">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded ${
            filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Ongoing")}
          className={`ml-2 px-4 py-2 rounded ${
            filter === "Ongoing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setFilter("Ended")}
          className={`ml-2 px-4 py-2 rounded ${
            filter === "Ended" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Ended
        </button>
      </div>

      <div className="space-y-4">
        {filteredContracts.map((contract) => (
          <div
            key={contract.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p><strong>Client:</strong> {contract.client}</p>
              <p><strong>Status:</strong> {contract.status}</p>
            </div>
            <button
              onClick={() => setSelectedContract(contract)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {selectedContract && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-bold mb-4">Contract Details</h3>
            <p><strong>Client:</strong> {selectedContract.client}</p>
            <p><strong>Details:</strong> {selectedContract.details}</p>
            <button
              onClick={() => setSelectedContract(null)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllContracts;
