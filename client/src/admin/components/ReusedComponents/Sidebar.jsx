import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Users,
  Star,
  TicketPercent,
  ChartColumn,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";
import logo from "../../../assets/logoZ.png";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const links = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { name: "Products", icon: Package, path: "/admin/products" },
  { name: "Categories", icon: FolderTree, path: "/admin/categories" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/orders" },
  { name: "Customers", icon: Users, path: "/admin/customers" },
  { name: "Analytics", icon: ChartColumn, path: "/admin/analytics" },
  { name: "AI Assistant", icon: Sparkles, path: "/admin/AI" },
  { name: "Coupons", icon: TicketPercent, path: "/admin/coupons" },
  { name: "Reviews", icon: Star, path: "/admin/reviews" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/auth/logout",
        {},
        { withCredentials: true },
      );
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      navigate("/admin/login", { replace: true });
    }
  };

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen overflow-y-auto bg-slate-900 text-white flex flex-col">
      {" "}
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        {/* <h1 className="text-2xl font-black tracking-wide text-primary">
          
        </h1> */}
        <img src={logo} alt="" />
      </div>
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
                  : "hover:bg-slate-800 text-slate-300"
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
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
