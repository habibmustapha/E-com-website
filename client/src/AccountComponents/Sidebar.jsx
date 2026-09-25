import { LifeBuoy, Heart, User, Truck, Package, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Profile", icon: User, path: "/profile/info" },
  { name: "Orders", icon: Package, path: "/profile/Orders" },
  { name: "Saved Items", icon: Heart, path: "/profile/Saved-items" },
  { name: "Track my Orders", icon: Truck, path: "/profile/track-order" },
  {
    name: "Customer service",
    icon: LifeBuoy,
    path: "/profile/customer-service",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-surface text-black top-0 flex flex-col">
      {/* Logo */}
      {/* <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-2xl font-black tracking-wide text-primary">
          
        </h1>
        <img src={logo} alt="" />
      </div> */}

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        {links.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 mb-2 transition-all
              ${
                isActive
                  ? "bg-primary text-slate-900 font-semibold"
                  : "text-slate-900 hover:bg-slate-800 hover:text-slate-300"
              }`
            }
          >
            <Icon size={20} />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 transition">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
