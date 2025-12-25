import React, { useState } from 'react';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`dashboard-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>{sidebarOpen ? 'Dashboard' : 'D'}</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="/" className="nav-item active">
            <span className="icon">📊</span>
            {sidebarOpen && <span>Overview</span>}
          </a>
          <a href="/analytics" className="nav-item">
            <span className="icon">📈</span>
            {sidebarOpen && <span>Analytics</span>}
          </a>
          <a href="/reports" className="nav-item">
            <span className="icon">📄</span>
            {sidebarOpen && <span>Reports</span>}
          </a>
          <a href="/settings" className="nav-item">
            <span className="icon">⚙️</span>
            {sidebarOpen && <span>Settings</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <button onClick={toggleSidebar} className="toggle-btn">
            ☰
          </button>
          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <div className="user-profile">
              <span>John Doe</span>
              <div className="avatar">JD</div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
