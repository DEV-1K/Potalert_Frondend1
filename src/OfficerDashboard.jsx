import React, { useState } from 'react';
import './App.css';

function OfficerDashboard({ onLogout }) {
    const [showMenu, setShowMenu] = useState(false);

    // Mock data for actionable reports
    const tasks = [
        {
            id: "#PT-4921",
            date: "Today, 10:30 AM",
            location: "24.128, 71.543 (MG Road)",
            status: "New Submission",
            statusType: "new"
        },
        {
            id: "#PT-4918",
            date: "Yesterday",
            location: "23.128, 72.543 (Sector 9)",
            status: "Scheduled",
            statusType: "pending"
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
                            <span className="greeting-text">Hi, Officer Sharma</span>
                            <span className="officer-subtitle">Zone 4 Supervisor</span>
                        </div>
                    </div>

                    {/* Stats Section - 2x2 Grid (Removed "Pending") */}
                    <div className="officer-stats-grid">
                        <div className="stat-card square">
                            <span className="stat-label-small">New Reports</span>
                            <span className="stat-value-large">12</span>
                        </div>
                        <div className="stat-card square">
                            <span className="stat-label-small">In Progress</span>
                            <span className="stat-value-large">5</span>
                        </div>
                        <div className="stat-card square">
                            <span className="stat-label-small">Closed Today</span>
                            <span className="stat-value-large">14</span>
                        </div>
                    </div>

                    {/* Actionable Reports Section */}
                    <div className="reports-section">
                        <h2 className="section-title">Actionable Reports</h2>
                        <div className="officer-tasks-list">
                            {tasks.map((task, index) => (
                                <div key={index} className="officer-task-card">
                                    <div className="task-header-row">
                                        <span className="task-id">{task.id}</span>
                                        <span className={`task-status ${task.statusType}`}>
                                            {task.status}
                                        </span>
                                    </div>
                                    <div className="task-date">{task.date}</div>
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
                                    {/* Removed "View Proof" button, only "Update Status" remains */}
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

export default OfficerDashboard;
