import React, { useState } from 'react';
import './App.css';

function AdminDashboard({ onLogout }) {
    const [showMenu, setShowMenu] = useState(false);

    // Analytics data
    const stats = [
        { label: 'Total Reports', value: '1,247', trend: '+12%', color: '#f78f2e' },
        { label: 'New Potholes', value: '45', trend: '+12% this week', color: '#D9534F' },
        { label: 'Repaired Potholes', value: '850', trend: '+5 today', color: '#5CB85C' }
    ];

    // Officers data
    const officers = [
        { name: 'Officer Sharma', zone: 'North Zone', status: 'Active', statusColor: '#5CB85C' },
        { name: 'Station Officer Roy', zone: 'Fire Station 12', status: 'Busy', statusColor: '#f78f2e' },
        { name: 'Lineman Thomas', zone: 'KSEB Section 4', status: 'Active', statusColor: '#5CB85C' },
        { name: 'Officer Kumar', zone: 'East Sector', status: 'Active', statusColor: '#5CB85C' }
    ];

    const handleLogout = () => {
        onLogout();
    };

    return (
        <div className="app">
            <div className="mobile-simulation">
                {/* Scrollable Content Area */}
                <div className="dashboard-content">
                    <div className="dashboard">
                        {/* Header Section */}
                        <div className="header">
                            <div className="profile-container">
                                <div
                                    className="avatar"
                                    onClick={() => setShowMenu(!showMenu)}
                                    style={{ cursor: 'pointer' }}
                                ></div>
                                {showMenu && (
                                    <div className="profile-dropdown">
                                        <button className="logout-btn" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="greeting">
                                <span className="greeting-text">System Overview</span>
                                <span className="admin-badge">Headquarters</span>
                            </div>
                        </div>

                        {/* Analytics Section - Horizontal Scroll */}
                        <div className="analytics-scroll">
                            {stats.map((stat, index) => (
                                <div key={index} className="analytics-card">
                                    <span className="analytics-label">{stat.label}</span>
                                    <span className="analytics-value" style={{ color: stat.color }}>
                                        {stat.value}
                                    </span>
                                    <span className="analytics-trend">{stat.trend}</span>
                                </div>
                            ))}
                        </div>

                        {/* Field Officers Section */}
                        <div className="reports-section">
                            <h2 className="section-title">Field Officers</h2>
                            <div className="officer-list">
                                {officers.map((officer, index) => (
                                    <div key={index} className="officer-item">
                                        <div className="officer-info">
                                            <div className="officer-name">{officer.name}</div>
                                            <div className="officer-zone">{officer.zone}</div>
                                        </div>
                                        <div className="officer-status">
                                            <span
                                                className="status-dot"
                                                style={{ backgroundColor: officer.statusColor }}
                                            ></span>
                                            <span className="status-text">{officer.status}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Action Button - Fixed position outside scrollable area */}
                <button className="fab" aria-label="Add new">
                    +
                </button>
            </div>
        </div>
    );
}

export default AdminDashboard;
