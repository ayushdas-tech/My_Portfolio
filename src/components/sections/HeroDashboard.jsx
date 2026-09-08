import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, DollarSign, Activity, Layers } from 'lucide-react';

const timeframeData = {
  '30D': {
    revenue: '$148.4k',
    profit: '$38.2k',
    orders: '3,240',
    margin: '25.8%',
    growth: '+18.6%',
    chart: [
      { name: 'W1', revenue: 28000, profit: 7200 },
      { name: 'W2', revenue: 34500, profit: 8900 },
      { name: 'W3', revenue: 41200, profit: 10800 },
      { name: 'W4', revenue: 44700, profit: 11300 },
    ]
  },
  '90D': {
    revenue: '$482.5k',
    profit: '$124.5k',
    orders: '10,950',
    margin: '25.8%',
    growth: '+22.4%',
    chart: [
      { name: 'Month 1', revenue: 142000, profit: 36500 },
      { name: 'Month 2', revenue: 161000, profit: 41200 },
      { name: 'Month 3', revenue: 179500, profit: 46800 },
    ]
  }
};

export function HeroDashboard() {
  const [activeRange, setActiveRange] = useState('30D');
  const data = timeframeData[activeRange];

  return (
    <div className="relative rounded-2xl bg-dark-900/90 border border-slate-800/90 p-5 sm:p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 light:bg-white light:border-slate-200">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 light:border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider light:text-slate-800">
            Analytics Overview
          </span>
        </div>

        {/* Timeframe selector */}
        <div className="flex items-center gap-1 bg-dark-950/80 p-1 rounded-lg border border-slate-800 light:bg-slate-100 light:border-slate-200">
          {['30D', '90D'].map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                activeRange === range
                  ? 'bg-cyan-500 text-dark-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200 light:text-slate-600'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Row - Clean & Spacious */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-dark-850/60 border border-slate-800/70 light:bg-slate-50 light:border-slate-200">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">REVENUE</span>
          <span className="text-lg sm:text-xl font-bold font-mono text-slate-100 block metric-number light:text-slate-900">
            {data.revenue}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-3 h-3" /> {data.growth}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-dark-850/60 border border-slate-800/70 light:bg-slate-50 light:border-slate-200">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">NET PROFIT</span>
          <span className="text-lg sm:text-xl font-bold font-mono text-cyan-400 block metric-number">
            {data.profit}
          </span>
          <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
            {data.margin} margin
          </span>
        </div>

        <div className="p-3 rounded-xl bg-dark-850/60 border border-slate-800/70 light:bg-slate-50 light:border-slate-200">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">ORDERS</span>
          <span className="text-lg sm:text-xl font-bold font-mono text-slate-100 block metric-number light:text-slate-900">
            {data.orders}
          </span>
          <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
            Transactions
          </span>
        </div>
      </div>

      {/* Smooth, Clean Recharts Chart */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-2 text-xs font-mono text-slate-400">
          <span className="text-slate-300 font-medium light:text-slate-700">Revenue & Margin Growth</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Revenue</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Profit</span>
          </div>
        </div>

        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.chart} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="cleanCyanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="cleanEmeraldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis 
                stroke="#64748b" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(val) => `$${(val/1000).toFixed(0)}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="p-2.5 rounded-lg bg-dark-950/95 border border-cyan-500/30 text-xs font-mono shadow-lg">
                        <p className="text-slate-300 font-semibold mb-1">{label}</p>
                        <p className="text-cyan-400">Revenue: ${payload[0]?.value?.toLocaleString()}</p>
                        <p className="text-emerald-400">Profit: ${payload[1]?.value?.toLocaleString()}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={2} fill="url(#cleanCyanGrad)" />
              <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={1.5} fill="url(#cleanEmeraldGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
