import { User } from "lucide-react";
import Image from "next/image";

interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  avatar?: string;
}

interface ActivityCardProps {
  activities: Activity[];
  title: string;
  className?: string;
}

export default function ActivityCard({
  activities,
  title,
  className = ""
}: ActivityCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              {activity.avatar ? (
                <Image 
                  src={activity.avatar} 
                  alt={activity.user}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-gray-600" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

