import React from 'react';

interface Transaction {
  id: string;
  student: string;
  amount: number;
  type: 'payment' | 'refund' | 'fee';
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      student: 'Rahul Kumar - Class 10A',
      amount: 15000,
      type: 'fee',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      student: 'Priya Sharma - Class 9B',
      amount: 12000,
      type: 'fee',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: '3',
      student: 'Arjun Patel - Class 8A',
      amount: 8500,
      type: 'fee',
      date: '2024-01-13',
      status: 'pending'
    },
    {
      id: '4',
      student: 'Sneha Reddy - Class 7B',
      amount: 7500,
      type: 'fee',
      date: '2024-01-12',
      status: 'pending'
    },
    {
      id: '5',
      student: 'Vikram Singh - Class 6A',
      amount: 6500,
      type: 'fee',
      date: '2024-01-11',
      status: 'completed'
    }
  ];

  // Calculate correct total for completed transactions only
  const calculateTotal = () => {
    return transactions
      .filter(t => t.status === 'completed')
      .reduce((sum, t) => sum + (t.type === 'refund' ? -t.amount : t.amount), 0);
  };

  const monthlyTotal = calculateTotal();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100 border-green-200';
      case 'pending':
        return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'failed':
        return 'text-red-600 bg-red-100 border-red-200';
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'payment':
        return 'text-green-600';
      case 'refund':
        return 'text-blue-600';
      case 'fee':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-3 hover:shadow-lg transition-shadow duration-300 h-[310px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' ,}}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-bold text-gray-800 mb-1" style={{ lineHeight: '1.5' }}>Fee Collection</h3>
          <p className="text-xs text-gray-500" style={{ lineHeight: '1.5' }}>Recent fee payments and transactions</p>
        </div>
        <div className="flex items-center space-x-1">
          <select className="px-2 py-1 border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" style={{ lineHeight: '1.5' }}>
            <option className="text-gray-800">This Month</option>
            <option className="text-gray-800">Last Month</option>
          </select>
          <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="max-h-36 overflow-y-auto">
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 truncate text-sm" style={{ lineHeight: '1.5' }}>{transaction.student}</div>
                <div className="text-xs text-gray-500" style={{ lineHeight: '1.5' }}>{transaction.date}</div>
              </div>
              
              <div className="text-right flex-shrink-0 ml-3">
                <div className={`font-bold text-sm ${getTypeColor(transaction.type)} mb-1`} style={{ lineHeight: '1.5' }}>
                  ₹{transaction.amount.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mb-1" style={{ lineHeight: '1.5' }}>Fee Payment</div>
                <div className={`text-xs px-2 py-1 rounded-full font-semibold ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 font-medium" style={{ lineHeight: '1.5' }}>Total collected this month:</span>
          <span className={`font-bold text-sm ${monthlyTotal >= 0 ? 'text-emerald-600' : 'text-rose-600'}`} style={{ lineHeight: '1.5' }}>
            {monthlyTotal >= 0 ? '+' : ''}₹{monthlyTotal.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
