import { CreditCard, ArrowUpRight, ArrowDownLeft, History, Send } from "lucide-react";

interface AccountCardProps {
  name: string;
  balance: string;
  expiry: string;
  cvv: string;
  className?: string;
  onTopUp?: () => void;
  onTransfer?: () => void;
  onRequest?: () => void;
  onHistory?: () => void;
}

export default function AccountCard({
  name,
  balance,
  expiry,
  cvv,
  className = "",
  onTopUp,
  onTransfer,
  onRequest,
  onHistory
}: AccountCardProps) {
  const actions = [
    { icon: ArrowUpRight, label: "Top Up", onClick: onTopUp },
    { icon: ArrowDownLeft, label: "Transfer", onClick: onTransfer },
    { icon: Send, label: "Request", onClick: onRequest },
    { icon: History, label: "History", onClick: onHistory }
  ];

  return (
    <div className={`bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm opacity-90">Balance Amount</p>
          </div>
          <CreditCard className="w-8 h-8 opacity-80" />
        </div>
        
        <div className="mb-6">
          <p className="text-3xl font-bold mb-2">{balance}</p>
          <p className="text-sm opacity-90">EXP {expiry} CVV {cvv}</p>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className="flex flex-col items-center p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
            >
              <action.icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


