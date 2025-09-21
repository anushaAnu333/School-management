import { BookOpen, Plus, Edit, Trash2, Users, Calendar, Clock } from "lucide-react"

export default function ClassesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Classes Management</h2>
        <p className="text-gray-600">Manage classes, subjects, and schedules</p>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">Total Classes: 24</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">Total Students: 1,234</span>
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Class
          </button>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Class Card 1 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Class 10A</h3>
              <p className="text-sm text-gray-600">Science Stream</p>
            </div>
            <div className="flex space-x-1">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Students</span>
              </div>
              <span className="text-sm font-medium text-gray-900">42</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Subjects</span>
              </div>
              <span className="text-sm font-medium text-gray-900">6</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Class Teacher</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Ms. Sarah Wilson</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Next Class</span>
              <div className="flex items-center text-sm text-gray-900">
                <Clock className="w-4 h-4 mr-1" />
                09:00 AM
              </div>
            </div>
          </div>
        </div>

        {/* Class Card 2 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Class 9B</h3>
              <p className="text-sm text-gray-600">General Stream</p>
            </div>
            <div className="flex space-x-1">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Students</span>
              </div>
              <span className="text-sm font-medium text-gray-900">38</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Subjects</span>
              </div>
              <span className="text-sm font-medium text-gray-900">5</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Class Teacher</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Mr. John Davis</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Next Class</span>
              <div className="flex items-center text-sm text-gray-900">
                <Clock className="w-4 h-4 mr-1" />
                10:30 AM
              </div>
            </div>
          </div>
        </div>

        {/* Class Card 3 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Class 8A</h3>
              <p className="text-sm text-gray-600">General Stream</p>
            </div>
            <div className="flex space-x-1">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Students</span>
              </div>
              <span className="text-sm font-medium text-gray-900">45</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Subjects</span>
              </div>
              <span className="text-sm font-medium text-gray-900">5</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600">Class Teacher</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Ms. Lisa Brown</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Next Class</span>
              <div className="flex items-center text-sm text-gray-900">
                <Clock className="w-4 h-4 mr-1" />
                11:15 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

