import React, { useState } from 'react';
import './App.css';

function FireForceDashboard({ onLogout }) {
    const [showMenu, setShowMenu] = useState(false);

    // Mock data for fire force alerts
    const tasks = [
        {
            id: "FIRE-101",
            location: "Market Road, Zone B",
            issue: "Structure Fire",
            status: "Dispatched"
        },
        {
            id: "RESCUE-204",
            location: "Riverside Apts",
            issue: "Elevator Stuck",
            status: "New Alert"
        }
    ];

    const handleLogout = () => {
        onLogout();
    };

    return (
        <div className="app">
            <div className="mobile-simulation">
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
                        <div className="greeting officer-greeting">
                            <span className="greeting-text">Hi, Station Officer Roy</span>
                            <span className="officer-subtitle">Fire Station 12</span>
                        </div>
                    </div>

                    {/* Stats Section - 3 Cards */}
                    <div className="officer-stats-grid">
                        <div className="stat-card square">
                            <span className="stat-label-small">Active Alerts</span>
                            <span className="stat-value-large">3</span>
                        </div>
                        <div className="stat-card square">
                            <span className="stat-label-small">Units Deployed</span>
                            <span className="stat-value-large">2</span>
                        </div>
                        <div className="stat-card square">
                            <span className="stat-label-small">Rescued Today</span>
                            <span className="stat-value-large">15</span>
                        </div>
                    </div>

                    {/* Active Alerts Section */}
                    <div className="reports-section">
                        <h2 className="section-title">Active Alerts</h2>
                        <div className="officer-tasks-list">
                            {tasks.map((task, index) => (
                                <div key={index} className="officer-task-card">
                                    <div className="task-header-row">
                                        <span className="task-id">{task.id}</span>
                                        <span className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>
                                            {task.status}
                                        </span>
                                    </div>
                                    <div className="task-location">
                                        <svg
                                            className="location-icon"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                                fill="#1a1a1a"
                                            />
                                        </svg>
                                        <span className="location-text-bold">{task.location}</span>
                                    </div>
                                    <div className="task-issue">
                                        <strong>Issue:</strong> {task.issue}
                                    </div>
                                    <div className="task-actions">
                                        <button className="btn-primary btn-full-width">Update Status</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FireForceDashboard;
