import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// const data = [
//   { month: "Jan", sales: 4000 },
//   { month: "Feb", sales: 3000 },
//   { month: "Mar", sales: 5000 },
//   { month: "Apr", sales: 4500 },
//   { month: "May", sales: 6000 },
//   { month: "Jun", sales: 7500 },
// ];

// const stats = [
//   {
//     title: "Total Sales",
//     subtitle: "645 orders",
//     amount: "154,500",
//     unit: "DZD",
//     growth: "+19,3%",
//     weekly: "+15K DZD",
//     icon: "bag",
//     dark: true,
//   },
//   {
//     title: "Visitors",
//     subtitle: "Avg. Time: 4:12m",
//     amount: "15 000",
//     unit: "",
//     growth: "+12,3%",
//     weekly: "+1650",
//     icon: "users",
//   },
//   {
//     title: "Refunds",
//     subtitle: "6",
//     amount: "34k",
//     unit: "DZD",
//     growth: "+0,3%",
//     weekly: "-14k DZD",
//     icon: "refund",
//   },
// ];

function StatIcon({ type }) {
  const paths = {
    bag: (
      <>
        <path d="M16 10a4 4 0 0 1-8 0" />
        <path d="M3.1 6h17.8" />
        <path d="M3.4 5.5 5 3.5A2 2 0 0 1 7 2h10a2 2 0 0 1 1.6.8l2 2.7A2 2 0 0 1 21 6.7V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.7a2 2 0 0 1 .4-1.2Z" />
      </>
    ),
    users: (
      <>
        <path d="M18 21a8 8 0 0 0-16 0" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22 20c0-3.4-2-6.5-4-8a5 5 0 0 0-.5-8.3" />
      </>
    ),
    refund: (
      <>
        <path d="M3 12a9 9 0 1 0 9-9 9.8 9.8 0 0 0-6.7 2.7L3 8" />
        <path d="M3 3v5h5" />
      </>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function StatCard({ stat }) {
  return (
    <article
      className={`min-w-0 rounded-2xl p-5 sm:p-6 shadow-md ${
        stat.dark ? "bg-[#0E172B] text-white" : "bg-surface text-black"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`shrink-0 rounded-xl p-3 ${
            stat.dark ? "bg-[#1d3465]" : "bg-gray-100"
          }`}
        >
          <span className="text-primary">
            <StatIcon type={stat.icon} />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold sm:text-lg">{stat.title}</h2>
          <p className="text-sm opacity-70">{stat.subtitle}</p>
        </div>

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 opacity-70"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>

      <div className="mt-6">
        <p className="wrap-break-word text-2xl font-semibold sm:text-3xl">
          {stat.amount}{" "}
          {stat.unit && (
            <span className={stat.dark ? "text-primary" : "text-buttons"}>
              {stat.unit}
            </span>
          )}
        </p>
      </div>
    </article>
  );
}

function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get("http://localhost:5001/api/orders", {
          withCredentials: true,
        });

        // Supports either an array or { orders: [...] }
        const fetchedOrders = Array.isArray(response.data)
          ? response.data
          : response.data.orders;

        if (!Array.isArray(fetchedOrders)) {
          throw new Error("Unexpected orders API response.");
        }

        setOrders(fetchedOrders);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load orders.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const dashboardData = useMemo(() => {
    const normalizeStatus = (status) =>
      String(status ?? "")
        .trim()
        .toLowerCase();

    const countStatus = (status) =>
      orders.filter((order) => normalizeStatus(order.status) === status).length;

    const sumStatus = (status) =>
      orders
        .filter((order) => normalizeStatus(order.status) === status)
        .reduce((sum, order) => sum + (Number(order.total_price) || 0), 0);

    const shipped = countStatus("shipped");
    const returned = countStatus("returned");

    const statuses = [
      { name: "Shipped", status: "shipped", color: "#16a34a" },
      { name: "Confirmed", status: "confirmed", color: "#fbbf24" },
      { name: "Pending", status: "pending", color: "#f97316" },
      { name: "Returned", status: "returned", color: "#dc2626" },
      { name: "Cancelled", status: "cancelled", color: "#64748b" },
    ];

    const statusData = statuses.map((item) => ({
      ...item,
      count: countStatus(item.status),
      percentage: orders.length
        ? (countStatus(item.status) / orders.length) * 100
        : 0,
    }));

    return {
      totalOrders: orders.length,
      shipped,
      returned,
      totalSales: sumStatus("shipped"),
      totalRefunds: sumStatus("returned"),
      statusData,
    };
  }, [orders]);

  const formatMoney = (amount) =>
    `${amount.toLocaleString("fr-DZ", {
      maximumFractionDigits: 2,
    })} DZD`;

  if (loading) {
    return <div className="p-6">Loading dashboard...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">Could not load dashboard: {error}</div>
    );
  }

  // Render the dashboard UI below using dashboardData.
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          stat={{
            title: "Total Sales",
            subtitle: `${dashboardData.shipped} shipped orders`,
            amount: formatMoney(dashboardData.totalSales),
            unit: "",
            icon: "bag",
            dark: true,
          }}
        />

        <StatCard
          stat={{
            title: "Total Orders",
            subtitle: "All order statuses",
            amount: dashboardData.totalOrders.toLocaleString(),
            unit: "",
            icon: "users",
          }}
        />

        <StatCard
          stat={{
            title: "Refunds",
            subtitle: `${dashboardData.returned} returned orders`,
            amount: formatMoney(dashboardData.totalRefunds),
            unit: "",
            icon: "refund",
          }}
        />
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-3">
        <section className="min-w-0 rounded-2xl bg-surface p-4 shadow-md sm:p-5 xl:col-span-2">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">
            Orders by Status
          </h2>

          {dashboardData.totalOrders === 0 ? (
            <p className="py-12 text-center text-gray-500">No orders found.</p>
          ) : (
            <div className="h-72 min-w-0 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardData.statusData.filter(
                      (item) => item.count > 0,
                    )}
                    dataKey="count"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    outerRadius="75%"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(1)}%`
                    }
                  >
                    {dashboardData.statusData
                      .filter((item) => item.count > 0)
                      .map((item) => (
                        <Cell key={item.status} fill={item.color} />
                      ))}
                  </Pie>

                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value} orders (${props.payload.percentage.toFixed(1)}%)`,
                      name,
                    ]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </section>

        <section className="min-w-0 rounded-2xl bg-surface p-4 shadow-md sm:p-5">
          <h2 className="mb-6 text-lg font-semibold sm:text-xl">
            Orders Summary
          </h2>

          <div className="mb-6 flex h-3 w-full overflow-hidden rounded-full bg-gray-200">
            {dashboardData.statusData.map((item) =>
              item.count > 0 ? (
                <div
                  key={item.status}
                  title={`${item.name}: ${item.percentage.toFixed(1)}%`}
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              ) : null,
            )}
          </div>

          <div className="space-y-4">
            {dashboardData.statusData.map((item) => (
              <div key={item.status} className="flex items-center gap-3">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <p className="min-w-0 flex-1 text-sm sm:text-base">
                  {item.name}
                </p>

                <p className="text-right text-sm font-semibold">
                  {item.count}
                  <span className="ml-2 text-gray-500">
                    {item.percentage.toFixed(1)}%
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
