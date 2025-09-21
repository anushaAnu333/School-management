import { CreditCard, DollarSign, TrendingUp, Calendar, AlertCircle } from "lucide-react"

export default function FeesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Fee Collection</h2>
        <p className="text-gray-600">Manage fee collection and payment tracking</p>
      </div>

      {/* Fee Collection Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Collected</p>
              <p className="text-2xl font-bold text-gray-900">₹2,45,000</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Fees</p>
              <p className="text-2xl font-bold text-gray-900">₹45,000</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-gray-900">₹12,500</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Collection Rate</p>
              <p className="text-2xl font-bold text-gray-900">85%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Collection Progress */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Fee Collection Progress</h3>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">December 2024</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">₹78,000 collected of ₹90,000 target</span>
            <span className="text-sm font-medium text-gray-900">86.7%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: '86.7%' }}></div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">₹78,000</p>
            <p className="text-sm text-gray-600">Collected</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">₹12,000</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">₹5,500</p>
            <p className="text-sm text-gray-600">Overdue</p>
          </div>
        </div>
      </div>

      {/* Recent Fee Collections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Payments */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Payments</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">JD</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Class 10A - Monthly Fee</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">₹5,000</p>
                  <p className="text-xs text-gray-500">Today</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">JS</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                    <p className="text-xs text-gray-500">Class 9B - Monthly Fee</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">₹4,500</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">MB</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Mike Brown</p>
                    <p className="text-xs text-gray-500">Class 8A - Monthly Fee</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">₹4,000</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outstanding Dues */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Outstanding Dues</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">AL</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Alice Lee</p>
                    <p className="text-xs text-gray-500">Class 10B - Overdue 15 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">₹5,500</p>
                  <p className="text-xs text-red-500">Overdue</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">TW</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Tom Wilson</p>
                    <p className="text-xs text-gray-500">Class 9A - Due in 3 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-yellow-600">₹4,200</p>
                  <p className="text-xs text-yellow-500">Due Soon</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">SG</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Sarah Green</p>
                    <p className="text-xs text-gray-500">Class 11A - Due in 5 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-yellow-600">₹6,000</p>
                  <p className="text-xs text-yellow-500">Due Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

