import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import DashboardCards from './components/DashboardCards';
import RevenueChart from './components/RevenueChart';
import './App.css';

function App() {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <h1 className="page-title">Dashboard Overview</h1>
        <p className="page-subtitle">Welcome back! Here's what's happening with your business today.</p>
        
        <DashboardCards />
        <RevenueChart />
        
        <div className="dashboard-grid">
          <div className="widget">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">✓</div>
                <div className="activity-details">
                  <p className="activity-title">New order received</p>
                  <p className="activity-time">2 minutes ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">👤</div>
                <div className="activity-details">
                  <p className="activity-title">New user registered</p>
                  <p className="activity-time">15 minutes ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📦</div>
                <div className="activity-details">
                  <p className="activity-title">Product shipped</p>
                  <p className="activity-time">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="widget">
            <h3>Top Products</h3>
            <div className="product-list">
              <div className="product-item">
                <span className="product-name">Premium Package</span>
                <span className="product-sales">234 sales</span>
              </div>
              <div className="product-item">
                <span className="product-name">Starter Kit</span>
                <span className="product-sales">189 sales</span>
              </div>
              <div className="product-item">
                <span className="product-name">Pro Bundle</span>
                <span className="product-sales">156 sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
