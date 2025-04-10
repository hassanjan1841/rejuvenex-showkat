import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown, Search } from "lucide-react";

import { ProductsManagement } from "@/components/admin/products-management";
import { PeptidesManagement } from "@/components/admin/peptides-management";
import { UsersManagement } from "@/components/admin/users-management";
import { AffiliatesManagement } from "@/components/admin/affiliates-management";
import { OrdersManagement } from "@/components/admin/orders-management";
import { SettingsPanel } from "@/components/admin/settings-panel";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { DashboardOverview } from "@/components/admin/dashboard-overview";

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex">
      {/* Sidebar */}
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              {activeSection === "overview" && "Dashboard Overview"}
              {activeSection === "products" && "Products Management"}
              {activeSection === "peptides" && "Peptides Information"}
              {activeSection === "users" && "User Management"}
              {activeSection === "affiliates" && "Affiliate Management"}
              {activeSection === "orders" && "Orders Management"}
              {activeSection === "settings" && "Settings"}
            </h1>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>

              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2 flex items-center">
                  <span className="text-sm font-medium">Admin User</span>
                  <ChevronDown size={16} className="ml-1 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {activeSection === "overview" && <DashboardOverview />}
          {activeSection === "products" && <ProductsManagement />}
          {activeSection === "peptides" && <PeptidesManagement />}
          {activeSection === "users" && <UsersManagement />}
          {activeSection === "affiliates" && <AffiliatesManagement />}
          {activeSection === "orders" && <OrdersManagement />}
          {activeSection === "settings" && <SettingsPanel />}
        </main>
      </div>
    </div>
  );
}
