"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  CreditCard, 
  FileText, 
  BarChart3,
  Mail,
  Gift,
  TrendingUp,
  Lock,
  PiggyBank,
  DollarSign
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Transactions", href: "/transactions", icon: FileText },
  { name: "Invoices", href: "/invoices", icon: FileText },
  { name: "Cards", href: "/cards", icon: CreditCard },
  { name: "Saving Plans", href: "/saving-plans", icon: PiggyBank },
  { name: "Investments", href: "/investments", icon: TrendingUp },
  { name: "Inbox", href: "/inbox", icon: Mail, badge: "20" },
  { name: "Promos", href: "/promos", icon: Gift },
  { name: "Insights", href: "/insights", icon: BarChart3 },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">COINEST</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-50 text-green-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Pro Upgrade Card */}
      <div className="p-4 m-4 bg-green-600 rounded-lg">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
            <Lock className="w-4 h-4 text-white" />
          </div>
        </div>
        <p className="text-white text-sm font-medium mb-2">
          Gain full access to your finances with detailed analytics and graphs
        </p>
        <button className="w-full bg-white text-green-600 text-xs font-medium py-2 px-3 rounded-lg hover:bg-green-50 transition-colors">
          Get Pro
        </button>
      </div>
    </div>
  )
}

