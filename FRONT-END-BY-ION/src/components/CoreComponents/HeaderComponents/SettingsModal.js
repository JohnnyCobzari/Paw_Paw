import React from "react";
import { FaTimes } from "react-icons/fa";
import "../../../styles/SettingsModal.css"; // Ensure the relative path is correct
import { FaSignOutAlt, FaCog } from "react-icons/fa";

const SettingsModal = ({showNotificationsAndMatches, setShowNotificationsAndMatches}) => {

	return (
        <div className="notification-icon-container">
            <div
                className="icon-wrapper"
                onClick={() => {
                    if (showNotificationsAndMatches === 0 || showNotificationsAndMatches === 1 || showNotificationsAndMatches === 2) {
                        setShowNotificationsAndMatches(3);
                    } else {
                        setShowNotificationsAndMatches(0);
                    }
                }}
            >
                <FaCog size={22} className="notification-icon" />
            </div>
    
            {showNotificationsAndMatches == 3 && (
                <div className="notification-popup">
                    <div className="notification-header">
                        <h4>Settings</h4>
                    </div>
                    <ul>
                        <li className="notification-item">
                            <a href="/updateProfile" className="textlinksettings">
                                Update profile
                            </a>
                        </li>
                        <li className="notification-item">
                            <a href="/ForgotPassword" className="textlinksettings">
                                Change password
                            </a>
                        </li>
                        <li className="notification-item">
                            <a href="/privacySettings" className="textlinksettings">
                                Privacy settings
                            </a>
                        </li>
                        <li className="notification-item">
                            <a href="#!" className="textlinksign">
                                Switch to Business Account
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
    
};

export default SettingsModal;
