
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, GraduationCap } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: GraduationCap, label: "Courses", path: "/courses" },
  ];

  return (
    <aside className="w-64 border-r border-border bg-card animate-slideIn">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Admin</h1>
      </div>
      <nav className="space-y-1 px-3">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={cn(
              "flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
              location.pathname === path
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            )}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
