import React, { useState } from 'react';
import './App.css';
import HomeMap from './HomeMap';
import AuthPage from './AuthPage';
import UserDashboard from './UserDashboard';
import OfficerDashboard from './OfficerDashboard';
import FireForceDashboard from './FireForceDashboard';
import KsebDashboard from './KsebDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
  // Track current view state
  const [currentView, setCurrentView] = useState('map'); // 'map', 'auth', 'user', 'officer', 'fire', 'kseb', 'admin'

  // Handle transition from HomeMap to AuthPage
  const handleSignIn = () => {
    setCurrentView('auth');
  };

  // Handle transition from AuthPage to appropriate Dashboard
  const handleLogin = (role) => {
    setCurrentView(role); // role will be 'user', 'officer', 'fire', 'kseb', or 'admin'
  };

  // Handle logout from any Dashboard back to HomeMap
  const handleLogout = () => {
    setCurrentView('map'); // Or use 'auth' if you want to go to login page
  };

  // Render component based on currentView
  switch (currentView) {
    case 'map':
      return <HomeMap onSignIn={handleSignIn} />;

    case 'auth':
      return <AuthPage onLogin={handleLogin} />;

    case 'user':
      return <UserDashboard onLogout={handleLogout} />;

    case 'officer':
      return <OfficerDashboard onLogout={handleLogout} />;

    case 'fire':
      return <FireForceDashboard onLogout={handleLogout} />;

    case 'kseb':
      return <KsebDashboard onLogout={handleLogout} />;

    case 'admin':
      return <AdminDashboard onLogout={handleLogout} />;

    default:
      return <HomeMap onSignIn={handleSignIn} />;
  }
}

export default App;
