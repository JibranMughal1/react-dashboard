import React from 'react';
import './DashboardCards.css';

const StatCard = ({ title, value, change, icon, color }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-title">{title}</span>
        <div className={`stat-icon ${color}`}>{icon}</div>
      </div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        <span>{isPositive ? '↑' : '↓'}</span>
        <span>{Math.abs(change)}%</span>
        <span className="stat-period">vs last month</span>
      </div>
    </div>
  );
};

const DashboardCards = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: 12.5,
      icon: '💰',
      color: 'blue'
    },
    {
      title: 'Active Users',
      value: '8,234',
      change: 8.2,
      icon: '👥',
      color: 'green'
    },
    {
      title: 'New Orders',
      value: '1,234',
      change: -3.4,
      icon: '📦',
      color: 'orange'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: 5.7,
      icon: '📊',
      color: 'purple'
    }
  ];

  return (
    <div className="dashboard-cards">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardCards;
