import { useState, useEffect } from "react";

const VendorListing = () => {
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Dummy data for vendors
    const dummyVendors = [
      {
        id: "1",
        name: "Vendor A",
        status: "approved",
        topRated: true,
        contracts: 3,
        requests: 2,
      },
      {
        id: "2",
        name: "Vendor B",
        status: "pending",
        topRated: false,
        contracts: 1,
        requests: 1,
      },
      {
        id: "3",
        name: "Vendor C",
        status: "approved",
        topRated: true,
        contracts: 4,
        requests: 3,
      },
    ];
    setVendors(dummyVendors);
  }, []);

  useEffect(() => {
    // Filter vendors based on the selected filter
    let filtered = vendors;
    if (filter === "pending") {
      filtered = vendors.filter((vendor) => vendor.status === "pending");
    } else if (filter === "approved") {
      filtered = vendors.filter((vendor) => vendor.status === "approved");
    } else if (filter === "topRated") {
      filtered = vendors.filter((vendor) => vendor.topRated);
    }
    setFilteredVendors(filtered);
  }, [filter, vendors]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Vendor Listing</h2>
      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded ${
            filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("approved")}
          className={`px-4 py-2 rounded ${
            filter === "approved" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Approved
        </button>
        <button
          onClick={() => setFilter("topRated")}
          className={`px-4 py-2 rounded ${
            filter === "topRated" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Top Rated
        </button>
      </div>

      {/* Listing */}
      <div className="space-y-4">
        {filteredVendors.map((vendor) => (
          <div
            key={vendor.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{vendor.name}</h3>
              <p>Status: {vendor.status}</p>
              <p>Top Rated: {vendor.topRated ? "Yes" : "No"}</p>
            </div>
            <button
              onClick={() => setSelectedVendor(vendor)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-bold mb-4">Vendor Details</h3>
            <p>
              <strong>Name:</strong> {selectedVendor.name}
            </p>
            <p>
              <strong>Status:</strong> {selectedVendor.status}
            </p>
            <p>
              <strong>Contracts:</strong> {selectedVendor.contracts}
            </p>
            <p>
              <strong>Requests:</strong> {selectedVendor.requests}
            </p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => setSelectedVendor(null)}
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

export default VendorListing;
