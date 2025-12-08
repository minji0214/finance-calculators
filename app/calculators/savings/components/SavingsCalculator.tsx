'use client';

import { useState } from 'react';
import DepositForm from './DepositForm';
import InstallmentForm from './InstallmentForm';

export default function SavingsCalculator() {
  const [activeTab, setActiveTab] = useState<'deposit' | 'installment'>('deposit');

  return (
    <div className="w-full">
      {/* 탭 UI */}
      <div className="flex gap-2 mb-8 bg-slate-100 p-1 rounded-xl max-w-md mx-auto">
        <button
          onClick={() => setActiveTab('deposit')}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'deposit'
              ? 'bg-white text-blue-700 shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          예금 계산기
        </button>
        <button
          onClick={() => setActiveTab('installment')}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
            activeTab === 'installment'
              ? 'bg-white text-green-700 shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          적금 계산기
        </button>
      </div>

      {/* 탭 컨텐츠 */}
      <div>
        {activeTab === 'deposit' ? <DepositForm /> : <InstallmentForm />}
      </div>
    </div>
  );
}


