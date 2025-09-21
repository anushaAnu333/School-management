import { Clock, CheckCircle, XCircle } from "lucide-react";

interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: string;
  note: string;
  status: 'completed' | 'pending' | 'failed';
  category: string;
}

interface TransactionCardProps {
  transactions: Transaction[];
  title: string;
  className?: string;
  headerAction?: React.ReactNode;
}

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  pending: {
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  failed: {
    icon: XCircle,
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
};

export default function TransactionCard({
  transactions,
  title,
  className = "",
  headerAction
}: TransactionCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {headerAction}
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction) => {
          const statusInfo = statusConfig[transaction.status];
          const StatusIcon = statusInfo.icon;
          
          return (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{transaction.name}</h4>
                  <span className="text-sm font-semibold text-gray-900">{transaction.amount}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{transaction.date}</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">{transaction.category}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{transaction.note}</p>
              </div>
              <div className={`ml-4 flex items-center ${statusInfo.color}`}>
                <StatusIcon className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium capitalize">{transaction.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

