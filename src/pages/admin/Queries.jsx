import { useState, useEffect } from "react";
import API from "../../api/axios"; // Axios instance

const Queries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await API.get("/queries");
      setQueries(response.data);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recent Queries</h2>
      <ul className="space-y-4">
        {queries.map((query) => (
          <li
            key={query._id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between"
          >
            <div>
              <p>
                <strong>Name:</strong> {query.firstName} {query.lastName}
              </p>
              <p>
                <strong>Email:</strong> {query.email}
              </p>
              <p>
                <strong>Role:</strong> {query.howCanWeHelp}
              </p>
              <p>
                <strong>Skills:</strong> {query?.skills?.join(",")}
              </p>
              <p>
                <strong>Source:</strong> {query.source}
              </p>
              <p>
                <strong>Time:</strong>{" "}
                {new Date(query.createdAt).toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Queries;
