import { useState, useEffect } from "react";

function StatusBadge({ status }) {
  const styles = {
    Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Shipped: "bg-sky-50 text-sky-700 border-sky-200",
    Processing: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${styles[status] || "bg-slate-50 text-slate-600 border-slate-200"}`}
    >
      {status}
    </span>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {description && (
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      )}
    </div>
  );
}

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/orders/user`, {
          credentials: "include",
        });

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);
  return (
    <>
      <div>
        <SectionHeader title="My Orders" description="Your recent purchases" />
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-400 border-b border-slate-100">
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Total</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.order_id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/60"
                >
                  <td className="px-5 py-4 font-medium text-slate-800">
                    {order.order_id}
                  </td>
                  <td className="px-5 py-4 text-slate-500">
                    {new Date(order.created_at).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    {order.product_name}
                  </td>
                  <td className="px-5 py-4 text-slate-800">
                    {order.total_price}
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      className="text-sm font-medium text-teal-700 hover:underline"
                    >
                      Track
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderDashboard;
