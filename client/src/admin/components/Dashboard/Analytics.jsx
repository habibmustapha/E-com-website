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
  { day: "Sun", sales: 5, returns: 0 },
  { day: "Mon", sales: 12, returns: 4 },
  { day: "Tue", sales: 22, returns: 5 },
  { day: "Wed", sales: 23, returns: 2 },
  { day: "Thu", sales: 64, returns: 5 },
  { day: "Fri", sales: 67, returns: 3 },
  { day: "Sat", sales: 75, returns: 12 },
];

const Analytics = () => {
  return (
    <>
      <section className="bg-background p-5 pb-0">
        <div className="flex justify-between gap-4">
          <div className="w-1/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex justify-between p-2 pb-5">
              <h1 className="text-lg text-gray-400 font-semibold">
                Profit margin
              </h1>
              <div className="text-sm bg-green-300/80 p-1 h-fit rounded-md">
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
              <h1 className="text-lg text-gray-400 font-semibold">Orders</h1>
              <div className="text-sm bg-green-300/80 p-1 h-fit rounded-md">
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
              <div className="text-sm bg-red-300/80 p-1 h-fit rounded-md">
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
              <h1 className="text-lg text-gray-400 font-semibold">Unit Sold</h1>
              <div className="text-sm bg-red-300/80 p-1 h-fit rounded-md">
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
              <h1 className="text-lg text-gray-400 font-semibold">
                Abandonned carts
              </h1>
              <div className="text-sm bg-green-300/80 p-1 h-fit rounded-md">
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
              <div className="flex justify-between">
                <h2 className="mb-4 text-xl text-gray-400 font-semibold">
                  Sales & returns Overview
                </h2>
                <div className="flex gap-10 justify-end pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 block w-2 h-2 rounded-full"></span>
                      <h1 className="font-medium">total sales</h1>
                    </div>
                    <h1 className="text-5xl font-semibold">13</h1>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-red-400 block w-2 h-2 rounded-full"></span>
                      <h1 className="font-medium">Returns</h1>
                    </div>
                    <h1 className="text-5xl font-semibold">3</h1>
                  </div>
                </div>
              </div>

              <ResponsiveContainer className="w-full h-full pb-5">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="day" />
                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#1CB55E"
                    strokeWidth={3}
                  />
                  <Line
                    type="monotone"
                    dataKey="returns"
                    stroke="#FF6467"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-2/5 grid bg-surface p-5 rounded-2xl shadow-md">
            <div className="flex p-2">
              <h1 className="text-lg text-gray-400 font-semibold">
                traffic Sources
              </h1>
            </div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-sm text-gray-400">Marketing Spend</h3>
                <h3 className="text-md">12 000 dzd</h3>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">CPA</h3>
                <h3 className="text-md">1 340 dzd</h3>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">impressions</h3>
                <h3 className="text-md">32 000</h3>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Clicks </h3>
                <h3 className="text-md">23 000</h3>
              </div>
            </div>
            <span className="w-full border-t-2 border-gray-300 border-dashed"></span>
            <div className="flex gap-1">
              <span className="block bg-buttons h-2 w-3/6 rounded-full"></span>
              <span className="block bg-green-400 h-2 w-1/6 rounded-full"></span>
              <span className="block bg-cyan-400 h-2 w-1/6 rounded-full"></span>
              <span className="block bg-cyan-700 h-2 w-1/6 rounded-full"></span>
              <span className="block bg-purple-400 h-2 w-2 rounded-full"></span>
              <span className="block bg-red-400 h-2 w-2 rounded-full"></span>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="block bg-buttons h-2 w-2 rounded-full"></span>
                <h1 className="text-gray-400 w-28">Shop</h1>
                <h3 className="font-semibold">3509</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="block bg-green-400 h-2 w-2 rounded-full"></span>
                <h1 className="text-gray-400 w-28">Google</h1>
                <h3 className="font-semibold">1284</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="block bg-cyan-400 h-2 w-2 rounded-full"></span>
                <h1 className="text-gray-400 w-28">Facebook</h1>
                <h3 className="font-semibold">213</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="block bg-cyan-700 h-2 w-2 rounded-full"></span>
                <h1 className="text-gray-400 w-28">Instagram</h1>
                <h3 className="font-semibold">938</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="block bg-purple-400 h-2 w-2 rounded-full"></span>
                <h1 className="text-gray-400 w-28"> Direct </h1>
                <h3 className="font-semibold">1325</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="block bg-red-400 h-2 w-2 rounded-full"></span>
                <h1 className="text-gray-400 w-28">Others</h1>
                <h3 className="font-semibold">32</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;
