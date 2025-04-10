"use client"

import { Users, ShoppingBag, DollarSign, Package, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function DashboardOverview() {
  // Dummy data for the dashboard
  const stats = [
    {
      title: "Total Sales",
      value: "$24,780",
      change: "+12%",
      trend: "up",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Total Orders",
      value: "342",
      change: "+8%",
      trend: "up",
      icon: ShoppingBag,
      color: "bg-blue-500",
    },
    {
      title: "Total Products",
      value: "48",
      change: "+3",
      trend: "up",
      icon: Package,
      color: "bg-purple-500",
    },
    {
      title: "Total Users",
      value: "1,245",
      change: "-2%",
      trend: "down",
      icon: Users,
      color: "bg-orange-500",
    },
  ]

  const recentOrders = [
    { id: "ORD-7352", customer: "John Smith", date: "2025-04-10", status: "Delivered", amount: "$129.99" },
    { id: "ORD-7351", customer: "Sarah Johnson", date: "2025-04-10", status: "Processing", amount: "$79.99" },
    { id: "ORD-7350", customer: "Michael Brown", date: "2025-04-09", status: "Shipped", amount: "$199.99" },
    { id: "ORD-7349", customer: "Emily Davis", date: "2025-04-09", status: "Delivered", amount: "$59.99" },
    { id: "ORD-7348", customer: "David Wilson", date: "2025-04-08", status: "Cancelled", amount: "$149.99" },
  ]

  const topProducts = [
    { name: "SEMAX", sales: 42, revenue: "$2,100" },
    { name: "BPC-157", sales: 38, revenue: "$1,900" },
    { name: "CJC-1295", sales: 35, revenue: "$2,275" },
    { name: "TB-500", sales: 31, revenue: "$1,860" },
    { name: "Melanotan-2", sales: 28, revenue: "$1,540" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                  <span className="text-gray-500 text-xs ml-1">vs last month</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-gray-700 text-sm">
                <tr>
                  <th className="py-3 px-6 text-left">Order ID</th>
                  <th className="py-3 px-6 text-left">Customer</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="py-3 px-6 text-blue-600 font-medium">{order.id}</td>
                    <td className="py-3 px-6">{order.customer}</td>
                    <td className="py-3 px-6 text-gray-500">{order.date}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : order.status === "Shipped"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-right font-medium">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Orders</button>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Top Selling Products</h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <li key={index} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} sales</p>
                  </div>
                  <span className="font-medium">{product.revenue}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}
