import { Bell, Search, ChevronDown } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="h-20 bg-white border-b px-8 flex items-center justify-between">
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
          <img
            src="https://i.pravatar.cc/100"
            alt=""
            className="w-10 h-10 rounded-full"
          />

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
