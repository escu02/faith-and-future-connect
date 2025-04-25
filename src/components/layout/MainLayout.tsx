
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Home, Briefcase, Book, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: ReactNode;
  activeTab: 'feed' | 'jobs' | 'tools' | 'profile';
}

const MainLayout = ({ children, activeTab }: MainLayoutProps) => {
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { title: "Feed", icon: Home, path: "/" },
    { title: "Jobs", icon: Briefcase, path: "/jobs" },
    { title: "Tools", icon: Book, path: "/tools" },
    { title: "Profile", icon: User, path: "/profile" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container max-w-7xl mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
              <span className="text-white font-semibold">F</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Faith & Future Connect</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <button className="text-sm font-medium text-foreground hover:text-brand transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand-600 transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Navigation sidebar */}
        <nav className="w-64 border-r hidden md:block bg-background">
          <div className="p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand/10 text-brand"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <item.icon size={18} />
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-background">
          <div className="container max-w-4xl mx-auto py-6 px-4">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center py-3 px-4 text-xs font-medium ${
                  isActive ? "text-brand" : "text-muted-foreground"
                }`
              }
            >
              <item.icon size={20} />
              <span className="mt-1">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
