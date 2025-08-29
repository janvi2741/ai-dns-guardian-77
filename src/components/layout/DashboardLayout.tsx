import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto custom-scrollbar">
          <div className="mb-6">
            <SidebarTrigger className="glass-card p-2" />
          </div>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}