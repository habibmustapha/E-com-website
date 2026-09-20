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

const dashboard = () => {
  return (
    <>
      <section className="mx-24 mt-10 ">
        <div className=" grid grid-cols-3 gap-5 pb-10">
          <div className="w-full h-80 items-center gap-4 grid text-white bg-[#0E172B] px-10 py-10 rounded-2xl shadow-md">
            <div className="flex gap-4 items-center">
              <div className="bg-[#1d3465] flex justify-center items-center p-4 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-bag"
                >
                  <path d="M16 10a4 4 0 0 1-8 0" />
                  <path d="M3.103 6.034h17.794" />
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                </svg>
              </div>
              <div className="justify-start">
                <h1>Total Sales</h1>
                <h3>645 orders</h3>
              </div>
              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl">
                154,500 <span className="text-primary">DZD</span>
              </h1>
              <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trending-up"
                  >
                    <path d="M16 7h6v6" />
                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                  </svg>
                  <h1>+19,3%</h1>
                </div>
                <div>
                  <h1 className="text-md">
                    <span className="font-bold text-primary">+15K dzd</span>{" "}
                    this week
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full items-center gap-4 grid text-black bg-surface px-10 py-10 rounded-2xl shadow-md">
            <div className="flex gap-4 items-center">
              {" "}
              <div className="bg-gray-100 flex justify-center items-center p-4 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users-round"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
              </div>
              <div className="justify-start">
                <h1>Visitors</h1>
                <h3>Avg. Time : 4:12m</h3>
              </div>
              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl">15 000</h1>
              <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trending-up"
                  >
                    <path d="M16 7h6v6" />
                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                  </svg>
                  <h1>+12,3%</h1>
                </div>
                <div>
                  <h1 className="text-md">
                    <span className="font-bold text-primary">+1650 </span> this
                    week
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full items-center gap-4 grid text-black bg-surface px-10 py-10 shadow-md rounded-2xl">
            <div className="flex gap-4 items-center">
              {" "}
              <div className="bg-gray-100 flex justify-center items-center p-4 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4AF37"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-rotate-ccw"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </div>
              <div className="justify-start">
                <h1>Refunds</h1>
                <h3>6</h3>
              </div>
              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl">
                34k <span className="text-buttons">DZD</span>
              </h1>
              <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4AF37"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trending-up"
                  >
                    <path d="M16 7h6v6" />
                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                  </svg>
                  <h1>+0,3%</h1>
                </div>
                <div>
                  <h1 className="text-md">
                    <span className="font-bold">
                      <span className="text-danger">- 14k dzd </span>
                    </span>{" "}
                    this week
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-surface w-2/3 rounded-2xl shadow-md h-96">
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
          <div className="bg-surface shadow-md rounded-2xl p-5 w-1/3">
            <h1 className="font-semibold text-xl">Orders </h1>

            <div className="pb-10">
              <div className="flex w-full h-2 bg-gray-200 rounded-2xl">
                <span className="block bg-green-600 w-5/12 h-full rounded-l-2xl "></span>
                <span className="block bg-amber-400 w-3/12 h-full  "></span>
                <span className="bg-orange-500 w-3/12 h-2 block"></span>
                <span className="bg-danger block w-2/12 h-full rounded-r-2xl"></span>
              </div>
            </div>
            <div className="grid-cols-1 items-center gap-2">
              <div className="flex gap-2 items-center">
                <span className="bg-green-600 w-3 h-3 block rounded-full"></span>
                <h3 className="text-xl">Orders delivered</h3>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-amber-400 w-3 h-3 block rounded-full"></span>
                <h3 className="text-xl">Orders confirmed</h3>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-orange-500 w-3 h-3 block rounded-full"></span>
                <h3 className="text-xl">Orders Pending</h3>
              </div>
              <div className="flex gap-2 items-center">
                <span className="bg-danger block w-3 h-3 rounded-full"></span>
                <h3 className="text-xl">Orders Cancelled</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dashboard;
