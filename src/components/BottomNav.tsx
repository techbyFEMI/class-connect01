import { Calendar, FileText, MessageSquare, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/timetable", icon: Calendar, label: "Timetable" },
  { to: "/resources", icon: FileText, label: "Resources" },
  { to: "/", icon: MessageSquare, label: "Timeline" },
  { to: "/profile", icon: User, label: "Profile" },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 shadow-medium">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all",
                "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
              activeClassName="text-primary bg-secondary"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
