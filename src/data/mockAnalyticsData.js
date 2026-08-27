// Realistic Analytics Datasets for Hero Mini Dashboard & Project Visualizers

export const heroTimeframes = {
  '7D': {
    kpis: {
      revenue: '$28,450',
      revenueChange: '+14.2%',
      orders: '612',
      ordersChange: '+8.7%',
      profit: '$7,380',
      profitMargin: '25.9%',
      profitChange: '+4.1%',
      conversionRate: '3.84%',
      conversionChange: '+0.4%'
    },
    trendData: [
      { date: 'Mon', revenue: 3400, profit: 920, orders: 74 },
      { date: 'Tue', revenue: 4100, profit: 1080, orders: 89 },
      { date: 'Wed', revenue: 3850, profit: 980, orders: 81 },
      { date: 'Thu', revenue: 4600, profit: 1240, orders: 98 },
      { date: 'Fri', revenue: 5200, profit: 1410, orders: 112 },
      { date: 'Sat', revenue: 3900, profit: 990, orders: 82 },
      { date: 'Sun', revenue: 3400, profit: 760, orders: 76 }
    ]
  },
  '30D': {
    kpis: {
      revenue: '$148,420',
      revenueChange: '+18.6%',
      orders: '3,240',
      ordersChange: '+12.4%',
      profit: '$38,290',
      profitMargin: '25.8%',
      profitChange: '+3.2%',
      conversionRate: '4.12%',
      conversionChange: '+0.6%'
    },
    trendData: [
      { date: 'Week 1', revenue: 32400, profit: 8100, orders: 720 },
      { date: 'Week 2', revenue: 36800, profit: 9400, orders: 810 },
      { date: 'Week 3', revenue: 39100, profit: 10200, orders: 860 },
      { date: 'Week 4', revenue: 40120, profit: 10590, orders: 850 }
    ]
  },
  '90D': {
    kpis: {
      revenue: '$482,500',
      revenueChange: '+22.4%',
      orders: '10,950',
      ordersChange: '+16.8%',
      profit: '$124,480',
      profitMargin: '25.8%',
      profitChange: '+5.1%',
      conversionRate: '4.28%',
      conversionChange: '+0.8%'
    },
    trendData: [
      { date: 'Month 1', revenue: 145000, profit: 37200, orders: 3200 },
      { date: 'Month 2', revenue: 162000, profit: 41800, orders: 3750 },
      { date: 'Month 3', revenue: 175500, profit: 45480, orders: 4000 }
    ]
  }
};

export const categoryDistribution = [
  { name: 'Electronics', value: 42, color: '#06b6d4' },
  { name: 'Software/BI', value: 28, color: '#38bdf8' },
  { name: 'Office Hub', value: 18, color: '#818cf8' },
  { name: 'Accessories', value: 12, color: '#34d399' }
];

export const regionalPerformance = [
  { region: 'North America', sales: 184000, margin: 28 },
  { region: 'Europe / UK', sales: 142000, margin: 24 },
  { region: 'Asia Pacific', sales: 112000, margin: 26 },
  { region: 'Latin America', sales: 44500, margin: 19 }
];

// Project 1 Detailed Dataset: Sales & Revenue Analytics
export const salesProjectChartData = [
  { month: 'Jan', actual: 38000, target: 35000, margin: 22 },
  { month: 'Feb', actual: 42000, target: 38000, margin: 24 },
  { month: 'Mar', actual: 48000, target: 44000, margin: 26 },
  { month: 'Apr', actual: 46000, target: 45000, margin: 25 },
  { month: 'May', actual: 54000, target: 48000, margin: 27 },
  { month: 'Jun', actual: 59000, target: 52000, margin: 29 },
  { month: 'Jul', actual: 63000, target: 56000, margin: 28 },
  { month: 'Aug', actual: 68000, target: 60000, margin: 31 }
];

// Project 2 Detailed Dataset: Retail Health Check (Discount vs Profitability)
export const discountImpactData = [
  { discountTier: '0% - 5%', volume: 450, grossMargin: 38.4, netProfit: 34.2 },
  { discountTier: '5% - 10%', volume: 680, grossMargin: 32.1, netProfit: 27.5 },
  { discountTier: '10% - 20%', volume: 920, grossMargin: 24.6, netProfit: 16.8 },
  { discountTier: '20% - 30%', volume: 1150, grossMargin: 15.2, netProfit: 4.1 },
  { discountTier: '> 30%', volume: 840, grossMargin: 6.4, netProfit: -5.8 } // Bleed zone
];
