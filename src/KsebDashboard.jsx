import React, { useState } from 'react';
import './App.css';

function KsebDashboard({ onLogout }) {
    const [showMenu, setShowMenu] = useState(false);

    // Mock data for KSEB tasks
    const tasks = [
        {
            id: "PWR-882",
            location: "Sector 7 Housing",
            issue: "Transformer Sparking",
            status: "Critical"
        },
        {
            id: "LINE-991",
            location: "Main Highway",
            issue: "Tree on Line",
            status: "Assigned"
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
                            <span className="greeting-text">Hi, Lineman Thomas</span>
                            <span className="officer-subtitle">Section 4 Maintenance</span>
                        </div>
                    </div>

                    {/* Stats Section - 3 Cards */}
                    <div className="officer-stats-grid">
                        <div className="stat-card square">
                            <span className="stat-label-small">Live Outages</span>
                            <span className="stat-value-large">42</span>
                        </div>
                        <div className="stat-card square">
                            <span className="stat-label-small">Line Faults</span>
                            <span className="stat-value-large">5</span>
                        </div>
                        <div className="stat-card square">
                            <span className="stat-label-small">Restored Today</span>
                            <span className="stat-value-large">88</span>
                        </div>
                    </div>

                    {/* Power Issues Section */}
                    <div className="reports-section">
                        <h2 className="section-title">Power Issues</h2>
                        <div className="officer-tasks-list">
                            {tasks.map((task, index) => (
                                <div key={index} className="officer-task-card">
                                    <div className="task-header-row">
                                        <span className="task-id">{task.id}</span>
                                        <span className={`task-status ${task.status.toLowerCase()}`}>
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

export default KsebDashboard;
