import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { 
  DollarSign, 
  ShoppingBag, 
  TrendingUp, 
  Zap, 
  Calendar, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { heroTimeframes, categoryDistribution } from '../../data/mockAnalyticsData';

export function HeroDashboard() {
  const [timeframe, setTimeframe] = useState('30D');
  const [activeTab, setActiveTab] = useState('revenue'); // 'revenue' | 'orders'

  const currentData = heroTimeframes[timeframe];

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-dark-900/95 to-dark-950/95 border border-cyan-500/25 p-4 sm:p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 light:bg-white light:border-cyan-200 light:shadow-xl">
      
      {/* Decorative Top Glow Bar */}
      <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]" />

      {/* Dashboard Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80 light:border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider light:text-slate-800">
            Live Analytics Stream
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
            SQL & ETL Synced
          </span>
        </div>

        {/* Timeframe Toggle Buttons */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-dark-950/90 border border-slate-800 light:bg-slate-100 light:border-slate-200">
          {['7D', '30D', '90D'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-all ${
                timeframe === tf
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 light:text-slate-600'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        
        {/* Revenue KPI */}
        <div className="p-3.5 rounded-xl bg-dark-850/90 border border-cyan-500/20 light:bg-slate-50 light:border-slate-200">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>TOTAL REVENUE</span>
            <DollarSign className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 metric-number light:text-slate-900">
            {currentData.kpis.revenue}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>{currentData.kpis.revenueChange}</span>
            <span className="text-slate-500 text-[10px]">vs prior period</span>
          </div>
        </div>

        {/* Orders KPI */}
        <div className="p-3.5 rounded-xl bg-dark-850/90 border border-sky-500/20 light:bg-slate-50 light:border-slate-200">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>VOLUME / ORDERS</span>
            <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 metric-number light:text-slate-900">
            {currentData.kpis.orders}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>{currentData.kpis.ordersChange}</span>
            <span className="text-slate-500 text-[10px]">active volume</span>
          </div>
        </div>

        {/* Profit Margin KPI */}
        <div className="p-3.5 rounded-xl bg-dark-850/90 border border-emerald-500/20 light:bg-slate-50 light:border-slate-200">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>NET PROFIT ({currentData.kpis.profitMargin})</span>
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 metric-number light:text-slate-900">
            {currentData.kpis.profit}
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span>{currentData.kpis.profitChange}</span>
            <span className="text-slate-500 text-[10px]">operating gain</span>
          </div>
        </div>

      </div>

      {/* Chart View Selection & Visual */}
      <div className="p-4 rounded-xl bg-dark-850/60 border border-slate-800/80 light:bg-slate-50/70 light:border-slate-200">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('revenue')}
              className={`font-mono text-xs font-semibold pb-0.5 border-b-2 transition-colors ${
                activeTab === 'revenue' 
                  ? 'border-cyan-400 text-cyan-400' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Revenue & Profit Dynamics
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`font-mono text-xs font-semibold pb-0.5 border-b-2 transition-colors ${
                activeTab === 'orders' 
                  ? 'border-sky-400 text-sky-400' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Order Frequency
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Revenue
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Profit
            </span>
          </div>
        </div>

        {/* Recharts Area Container */}
        <div className="h-44 sm:h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {activeTab === 'revenue' ? (
              <AreaChart data={currentData.trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  stroke="#64748b" 
                  fontSize={11} 
                  tickLine={false}
                  axisLine={{ stroke: '#334155' }}
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `$${val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="p-2.5 rounded-lg bg-dark-950/95 border border-cyan-500/40 shadow-xl text-xs font-mono">
                          <p className="text-slate-300 font-semibold mb-1">{label}</p>
                          <p className="text-cyan-400">Revenue: ${payload[0]?.value?.toLocaleString()}</p>
                          {payload[1] && (
                            <p className="text-emerald-400">Profit: ${payload[1]?.value?.toLocaleString()}</p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#06b6d4" 
                  strokeWidth={2.5}
                  fillOpacity={1} 
                  fill="url(#cyanGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#emeraldGradient)" 
                />
              </AreaChart>
            ) : (
              <BarChart data={currentData.trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="date" 
                  stroke="#64748b" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={{ stroke: '#334155' }}
                />
                <YAxis 
                  stroke="#64748b" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="p-2.5 rounded-lg bg-dark-950/95 border border-sky-500/40 shadow-xl text-xs font-mono">
                          <p className="text-slate-300 font-semibold mb-1">{label}</p>
                          <p className="text-sky-400">Orders: {payload[0]?.value} units</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="orders" fill="#38bdf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mini Data Points Footer */}
      <div className="mt-3.5 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2 light:border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Category Share:</span>
          {categoryDistribution.slice(0, 3).map((c) => (
            <span key={c.name} className="text-slate-300 light:text-slate-700">
              {c.name} <strong className="text-cyan-400 font-normal">{c.value}%</strong>
            </span>
          ))}
        </div>
        <div className="text-slate-500">
          Conversion: <span className="text-emerald-400">{currentData.kpis.conversionRate}</span>
        </div>
      </div>

    </div>
  );
}
