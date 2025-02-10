import { useState, useEffect } from "react";

const ClientListing = () => {
    const [clients, setClients] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [filter, setFilter] = useState("all");
  
    useEffect(() => {
      // Dummy data for clients
      const dummyClients = [
        { id: "1", name: "Client A", status: "approved", topRated: true, contracts: 2, requests: 1 },
        { id: "2", name: "Client B", status: "pending", topRated: false, contracts: 1, requests: 2 },
        { id: "3", name: "Client C", status: "approved", topRated: true, contracts: 3, requests: 1 },
      ];
      setClients(dummyClients);
    }, []);
  
    useEffect(() => {
      // Filter clients based on the selected filter
      let filtered = clients;
      if (filter === "pending") {
        filtered = clients.filter((client) => client.status === "pending");
      } else if (filter === "approved") {
        filtered = clients.filter((client) => client.status === "approved");
      } else if (filter === "topRated") {
        filtered = clients.filter((client) => client.topRated);
      }
      setFilteredClients(filtered);
    }, [filter, clients]);
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Client Listing</h2>
        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded ${filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("approved")}
            className={`px-4 py-2 rounded ${filter === "approved" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("topRated")}
            className={`px-4 py-2 rounded ${filter === "topRated" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Top Rated
          </button>
        </div>
  
        {/* Listing */}
        <div className="space-y-4">
          {filteredClients.map((client) => (
            <div key={client.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{client.name}</h3>
                <p>Status: {client.status}</p>
                <p>Top Rated: {client.topRated ? "Yes" : "No"}</p>
              </div>
              <button
                onClick={() => setSelectedClient(client)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View
              </button>
            </div>
          ))}
        </div>
  
        {/* Modal */}
        {selectedClient && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
              <h3 className="text-lg font-bold mb-4">Client Details</h3>
              <p><strong>Name:</strong> {selectedClient.name}</p>
              <p><strong>Status:</strong> {selectedClient.status}</p>
              <p><strong>Contracts:</strong> {selectedClient.contracts}</p>
              <p><strong>Requests:</strong> {selectedClient.requests}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => setSelectedClient(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ClientListing;
  