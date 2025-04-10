"use client"

import {
  LayoutDashboard,
  Package,
  FlaskRoundIcon as Flask,
  Users,
  UserPlus,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react"

type AdminSection = "overview" | "products" | "peptides" | "users" | "affiliates" | "orders" | "settings"

interface AdminSidebarProps {
  activeSection: AdminSection
  setActiveSection: (section: AdminSection) => void
  onLogout: () => void
}

export function AdminSidebar({ activeSection, setActiveSection, onLogout }: AdminSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "peptides", label: "Peptides Info", icon: Flask },
    { id: "users", label: "Users", icon: Users },
    { id: "affiliates", label: "Affiliates", icon: UserPlus },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col h-screen">
      <div className="p-4 border-b border-blue-800">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          REJUVENEXX
        </h2>
        <p className="text-blue-300 text-sm">Admin Dashboard</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id as AdminSection)}
                className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                  activeSection === item.id ? "bg-blue-800 text-white" : "text-blue-200 hover:bg-blue-800/50"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-blue-800">
        <button
          onClick={onLogout}
          className="flex items-center w-full px-4 py-2 text-left text-blue-200 hover:bg-blue-800/50 rounded transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
