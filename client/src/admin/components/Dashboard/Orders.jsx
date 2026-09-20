import { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/orders", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error("failed", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    <section className="bg-background text-text py-15 md:py-20 px-5">
      <p>Loading products...</p>
    </section>;
  }

  return (
    <>
      <section className=" overflow-x-hidden w-full justify-center  px-10 my-10">
        <div className="w-full px-4 py-4 bg-surface overflow-auto rounded-2xl h-200 shadow-md">
          <table className="w-full ">
            <tr className="font-medium sticky top-0 z-10 bg-surface shadow-md text-lg text-left border-b border-gray-300 pb-5">
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">id</th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                first name
              </th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">wilaya</th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">phones</th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                total price
              </th>
              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">status</th>

              <th className="px-2 py-2 sticky top-0 z-10 bg-surface">
                Actions
              </th>
            </tr>
            {orders.length === 0 ? (
              <h1>No order found</h1>
            ) : (
              orders.map((order) => (
                <tr className="items-center">
                  <td className="px-2 py-2">
                    <h1>{order.id}</h1>
                  </td>
                  <td className="px-2 py-2">
                    <h1>{order.first_name}</h1>
                  </td>
                  <td className="px-2 py-2">
                    <h1>{order.wilaya}</h1>
                  </td>
                  <td className="px-2 py-2 ">
                    <h1>{order.phone}</h1>
                  </td>
                  <td className="px-2 py-2 ">
                    <h1>{order.total_price}</h1>
                  </td>
                  <td className="px-2 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "processing"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "shipped"
                              ? "bg-purple-100 text-purple-700"
                              : order.status === "delivered"
                                ? "bg-green-100 text-green-700"
                                : order.status === "cancelled"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <div className="px-2 py-2 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-green-600 flex items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#fff"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-pen"
                        >
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        </svg>
                      </div>
                      <div className="h-10 w-10 rounded-lg bg-danger flex items-center justify-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trash"
                        >
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M3 6h18" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      </section>
    </>
  );
};

export default Orders;
