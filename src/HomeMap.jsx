import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';

function HomeMap({ onSignIn }) {
    // Map container style - fills mobile-simulation container
    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    // Default center - Kochi, India
    const center = {
        lat: 9.9312,
        lng: 76.2673
    };

    // Map options
    const mapOptions = {
        disableDefaultUI: false, // Keep Google's native controls
        zoomControl: true,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        styles: [] // Add custom map styling here if needed
    };

    return (
        <div className="mobile-simulation">
            {/* ⚠️ VITE Environment Variable:
              Use import.meta.env.VITE_GOOGLE_MAPS_API_KEY
            */}
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                    options={mapOptions}
                >
                    {/* Map will load here */}
                </GoogleMap>
            </LoadScript>

            {/* Custom UI Overlays */}

            {/* Top Left: Google-style Search Bar (Omnibox) */}
            <div className="map-search-container">
                <div className="map-search-box">
                    <button className="map-menu-btn" aria-label="Menu">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2 4h16M2 10h16M2 16h16" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <input
                        type="text"
                        className="map-search-input"
                        placeholder="Search Google Maps"
                    />
                    <button className="map-search-btn" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="8" cy="8" r="6" stroke="#5f6368" strokeWidth="2" />
                            <path d="M12.5 12.5L17 17" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <div className="map-divider"></div>
                    <button className="map-directions-btn" aria-label="Directions">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 2L18 10L10 18L2 10L10 2Z" stroke="#1a73e8" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M10 8v4M8 10h4" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Top Right: Sign In Button - Circular Icon */}
            <div className="map-signin-container">
                <button className="map-signin-btn" onClick={onSignIn} aria-label="Sign In">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
                        <path d="M4 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            {/* Bottom Center: Report Pothole Action Button */}
            <div className="map-action-container">
                <button className="map-report-btn">
                    <span className="report-icon">🚩</span>
                    <span className="report-text">Report Pothole</span>
                </button>
            </div>
        </div>
    );
}

export default HomeMap;