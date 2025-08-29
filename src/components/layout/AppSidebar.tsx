import {
  Home,
  Globe,
  Shield,
  Brain,
  FileText,
  Settings,
  BarChart3,
  Zap,
  Activity,
  Database,
  TrendingUp,
  Cpu,
  Network,
  Eye,
  Sparkles,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { 
    title: "Overview", 
    url: "/", 
    icon: BarChart3,
    description: "Dashboard home",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    glow: "group-hover:drop-shadow-[0_0_20px_hsl(var(--primary)/0.8)]",
    iconBg: "bg-gradient-to-br from-primary/20 to-primary/10"
  },
  { 
    title: "DNS Traffic", 
    url: "/dns-traffic", 
    icon: Network,
    description: "Traffic analytics",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    glow: "group-hover:drop-shadow-[0_0_20px_hsl(var(--accent)/0.8)]",
    iconBg: "bg-gradient-to-br from-accent/20 to-accent/10"
  },
  { 
    title: "Security", 
    url: "/security", 
    icon: Shield,
    description: "Threats & alerts",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
    glow: "group-hover:drop-shadow-[0_0_20px_hsl(var(--destructive)/0.8)]",
    iconBg: "bg-gradient-to-br from-destructive/20 to-destructive/10"
  },
  { 
    title: "AI Models", 
    url: "/ai-models", 
    icon: Brain,
    description: "Model performance",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    glow: "group-hover:drop-shadow-[0_0_20px_hsl(280_100%_70%/0.8)]",
    iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-500/10"
  },
  { 
    title: "Logs", 
    url: "/logs", 
    icon: FileText,
    description: "DNS query logs",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    glow: "group-hover:drop-shadow-[0_0_20px_hsl(180_100%_50%/0.8)]",
    iconBg: "bg-gradient-to-br from-cyan-500/20 to-cyan-500/10"
  },
  { 
    title: "Settings", 
    url: "/settings", 
    icon: Settings,
    description: "Configuration",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    glow: "group-hover:drop-shadow-[0_0_20px_hsl(var(--secondary)/0.8)]",
    iconBg: "bg-gradient-to-br from-secondary/20 to-secondary/10"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="bg-sidebar border-r border-sidebar-border shadow-2xl backdrop-blur-none">
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 px-4">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
            <Zap className="h-7 w-7 text-black drop-shadow-sm" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent animate-pulse"></div>
          </div>
          {!isCollapsed && (
            <div className="fade-in">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                DNS Monitor
              </h1>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary" />
                AI-Powered
              </p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground mb-4">
            {!isCollapsed ? "Navigation" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        cn(
                          "group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105",
                          isActive
                            ? `${item.bgColor} ${item.color} ${item.borderColor} border shadow-lg ${item.glow.replace('group-hover:', '')}`
                            : `text-muted-foreground hover:text-foreground hover:${item.bgColor} hover:${item.color}`
                        )
                      }
                    >
                      <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                        item.iconBg,
                        "shadow-sm"
                      )}>
                        <item.icon className={cn(
                          "h-5 w-5 transition-all duration-300", 
                          item.glow
                        )} />
                      </div>
                      {!isCollapsed && (
                        <div className="flex flex-col fade-in">
                          <span className="font-semibold text-sm transition-all duration-300">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-foreground/80">
                            {item.description}
                          </span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status indicator */}
        {!isCollapsed && (
          <div className="mt-auto p-4">
            <div className="bg-accent/5 border border-accent/30 rounded-xl p-4 fade-in shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-semibold text-accent">System Status</span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Activity className="h-3 w-3 text-accent" />
                All services operational
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}