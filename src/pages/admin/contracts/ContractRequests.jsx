import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ContractRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const dummyRequests = [
      {
        id: "1",
        client: "Client A",
        details: "Details about Contract A",
        status: "Pending",
      },
      {
        id: "2",
        client: "Client B",
        details: "Details about Contract B",
        status: "Pending",
      },
      {
        id: "3",
        client: "Client C",
        details: "Details about Contract C",
        status: "Pending",
      },
    ];
    setRequests(dummyRequests);
    const contractId = searchParams.get("contractId");
    if (contractId) {
      const request = dummyRequests.find((req) => req.id === contractId);
      if (request) {
        setSelectedContract(request);
      }
    }
  }, [searchParams]);

  const handleApprove = (id) => {
    alert(`Contract ${id} approved`);
    setSelectedContract(null);
  };

  const handleReject = (id) => {
    alert(`Contract ${id} rejected`);
    setSelectedContract(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Contract Requests</h2>
      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Client:</strong> {request.client}
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>
            </div>
            <button
              onClick={() => setSelectedContract(request)}
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
            <p>
              <strong>Client:</strong> {selectedContract.client}
            </p>
            <p>
              <strong>Details:</strong> {selectedContract.details}
            </p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleApprove(selectedContract.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(selectedContract.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractRequests;
