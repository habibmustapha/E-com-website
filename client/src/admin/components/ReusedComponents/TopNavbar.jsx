import { Bell, Search, ChevronDown } from "lucide-react";
import admin from "../../assets/admin.png";

const TopNavbar = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-300 px-8 flex items-center w-full justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Welcom back! Admin</h1>
        <h3 className="text-md">
          Here are today's stats from your online store!
        </h3>
      </div>

      {/* Search */}
      <div className="relative w-96">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-11 pr-4 py-3 rounded-lg bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <img src={admin} alt="" className="w-10 h-10 rounded-full" />

          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>

          <ChevronDown size={18} />
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
