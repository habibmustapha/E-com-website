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

const Analytics = () => {
  return (
    <>
      <section className="bg-background p-5 pb-0">
        <div className="flex justify-between gap-4">
          <div className="w-1/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-thin">Profit margin</h1>
              <div className="text-sm bg-green-300/80 p-1 rounded-md">
                <h3 className="text-green-900 font-medium">+38%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-2xl font-semibold">134 000 DZ</h1>
              <div className="bg-green-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d542b"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up preview-icon"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h1>Up 38% this week</h1>
            </div>
          </div>

          <div className="w-1/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-thin">Orders</h1>
              <div className="text-sm bg-green-300/80 p-1 rounded-md">
                <h3 className="text-green-900 font-medium">+11%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-2xl font-semibold">3</h1>
              <div className="bg-green-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d542b"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up preview-icon"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h1>Up 11% this week</h1>
            </div>
          </div>

          <div className="w-1/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-thin">
                Avg. Order value
              </h1>
              <div className="text-sm bg-red-300/80 p-1 rounded-md">
                <h3 className="text-red-900 font-medium">-67%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-2xl font-semibold">8750 DZD</h1>
              <div className="bg-red-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#82181a"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-down preview-icon"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h1>Down 67% this week</h1>
            </div>
          </div>

          <div className="w-1/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-thin">Unit Sold</h1>
              <div className="text-sm bg-red-300/80 p-1 rounded-md">
                <h3 className="text-red-900 font-medium">-8%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-2xl font-semibold">13 </h1>
              <div className="bg-red-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#82181a"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-down preview-icon"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h1>Down 8% this week</h1>
            </div>
          </div>
          <div className="w-1/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-thin">
                Abandonned carts
              </h1>
              <div className="text-sm bg-green-300/80 p-1 rounded-md">
                <h3 className="text-green-900 font-medium">+3%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-2xl font-semibold">4</h1>
              <div className="bg-green-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d542b"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up preview-icon"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h1>Up 38+ this week</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 pt-3">
        <div className="flex gap-4 justify-between">
          <div className="bg-surface w-3/5 rounded-2xl shadow-md h-96">
            <div className="w-full h-80 rounded-2xl bg-white p-5">
              <h2 className="mb-4 text-xl font-semibold">Sales Overview</h2>

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />
                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#1CB55E"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-2/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-thin">
                Sales Conversion
              </h1>
              <div className="text-sm bg-green-300/80 p-1 rounded-md">
                <h3 className="text-green-900 font-medium">+10%</h3>
              </div>
            </div>
            <div className="flex justify-between items-center p-2">
              <h1 className="text-2xl font-semibold">4</h1>
              <div className="bg-green-400 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d542b"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-up preview-icon"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </div>
            </div>
            <div className="p-2">
              <h1>Up 38+ this week</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
