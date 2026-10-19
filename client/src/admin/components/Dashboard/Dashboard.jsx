import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 7500 },
];

const stats = [
  {
    title: "Total Sales",
    subtitle: "645 orders",
    amount: "154,500",
    unit: "DZD",
    growth: "+19,3%",
    weekly: "+15K DZD",
    icon: "bag",
    dark: true,
  },
  {
    title: "Visitors",
    subtitle: "Avg. Time: 4:12m",
    amount: "15 000",
    unit: "",
    growth: "+12,3%",
    weekly: "+1650",
    icon: "users",
  },
  {
    title: "Refunds",
    subtitle: "6",
    amount: "34k",
    unit: "DZD",
    growth: "+0,3%",
    weekly: "-14k DZD",
    icon: "refund",
  },
];

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

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-medium sm:text-base">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4AF37"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 7h6v6" />
              <path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
            {stat.growth}
          </div>

          <p className="text-sm">
            <span
              className={`font-bold ${
                stat.weekly.startsWith("-") ? "text-danger" : "text-primary"
              }`}
            >
              {stat.weekly}
            </span>{" "}
            <span className="opacity-70">this week</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function Dashboard() {
  return (
    <section className="mx-auto w-full max-w-[1600px] min-w-0 px-4 py-5 sm:px-6 sm:py-8 lg:px-8 xl:px-10">
      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Sales chart */}
        <section className="min-w-0 rounded-2xl bg-surface p-4 shadow-md sm:p-5 xl:col-span-2">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">
            Sales Overview
          </h2>

          <div className="h-64 min-w-0 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 8, right: 12, left: -12, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} tickMargin={8} />
                <YAxis
                  width={55}
                  tick={{ fontSize: 11 }}
                  tickFormatter={(value) =>
                    value >= 1000 ? `${value / 1000}k` : value
                  }
                />
                <Tooltip
                  formatter={(value) => [
                    `${Number(value).toLocaleString()} DZD`,
                    "Sales",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#1CB55E"
                  strokeWidth={3}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Orders summary */}
        <section className="min-w-0 rounded-2xl bg-surface p-4 shadow-md sm:p-5">
          <h2 className="mb-6 text-lg font-semibold sm:text-xl">Orders</h2>

          <div
            className="mb-6 flex h-2 w-full overflow-hidden rounded-full bg-gray-200"
            aria-label="Order status distribution"
          >
            <span className="h-full w-5/12 bg-green-600" />
            <span className="h-full w-3/12 bg-amber-400" />
            <span className="h-full w-3/12 bg-orange-500" />
            <span className="h-full w-2/12 bg-danger" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-full bg-green-600" />
              <p className="text-sm sm:text-base">Orders delivered</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-full bg-amber-400" />
              <p className="text-sm sm:text-base">Orders confirmed</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-full bg-orange-500" />
              <p className="text-sm sm:text-base">Orders pending</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 shrink-0 rounded-full bg-danger" />
              <p className="text-sm sm:text-base">Orders cancelled</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
