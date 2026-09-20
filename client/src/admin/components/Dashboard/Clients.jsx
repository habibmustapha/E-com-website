import { useState, useEffect } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);

        const response = await axios.get("http://localhost:5001/api/users", {
          withCredentials: true,
        });

        setClients(response.data);
      } catch (err) {
        console.error("Failed to fetch clients:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="bg-background text-text py-15 md:py-20 px-5 flex justify-center">
        <p>Loading clients...</p>
      </section>
    );
  }

  return (
    <section className="overflow-x-hidden w-full flex justify-center px-10 my-10">
      <div className="w-full px-4 py-4 bg-surface overflow-auto rounded-2xl h-200 shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="font-medium sticky top-0 z-10 bg-surface shadow-md text-lg text-left border-b border-gray-300 pb-5">
              <th className="px-2 py-2">ID</th>
              <th className="px-2 py-2">Avatar</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Username</th>
              <th className="px-2 py-2">Email</th>
              <th className="px-2 py-2">Role</th>
              <th className="px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  <h1 className="text-gray-500 font-medium">
                    No clients found
                  </h1>
                </td>
              </tr>
            ) : (
              clients.map((client) => (
                <tr
                  key={client.id}
                  className="items-center border-b border-gray-100"
                >
                  <td className="px-2 py-2">
                    <span className="font-semibold">{client.id}</span>
                  </td>
                  <td className="px-2 py-2">
                    <img
                      src={
                        client.profile_image ||
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                      }
                      alt={client.first_name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <span className="font-medium">
                      {client.first_name} {client.last_name}
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    <span className="text-gray-600">{client.username}</span>
                  </td>
                  <td className="px-2 py-2">
                    <span className="text-gray-600">{client.email}</span>
                  </td>
                  <td className="px-2 py-2">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                      {client.role}
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex items-center gap-4">
                      <button className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center hover:opacity-90 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-pen"
                        >
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        </svg>
                      </button>
                      <button className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center hover:opacity-90 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash"
                        >
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M3 6h18" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Clients;
