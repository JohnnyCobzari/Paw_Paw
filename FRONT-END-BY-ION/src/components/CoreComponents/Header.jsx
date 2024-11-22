import Logo from "./Logo";
import NotificationIcon from "./HeaderComponents/NotificationIcon";
import styles from "../../styles/Header.module.css"; // Import corect cu styles
import { FaSignOutAlt, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import SettingsModal from "./HeaderComponents/SettingsModal";
import "../../styles/SettingsModal.css"; // Make sure the relative path is correct
import { BsFillSendPlusFill } from "react-icons/bs";
import NotificationPopup from "./HeaderComponents/NotificationPopup";
import { FaRegHeart } from "react-icons/fa6";
import MatchPopup from "./HeaderComponents/MatchPopup";

const AskIfUserWantsToLogOut = ({ onDelete, onCancel }) => {
	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<h3>Are you sure you want to Log out?</h3>
				<div className="modal-actions">
					<button className="confirm-button" onClick={onDelete}>
						Log Out
					</button>
					<button className="cancel-button" onClick={onCancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

function Header({ setIsOpen, isOpen, showMatch }) {
	//variabile ---------

	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [showSettingsModal, setShowSettingsModal] = useState(false); // State for settings modal
	const [showNotification, setShowNotification] = useState(false); // New state for notifications
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [showNotificationsAndMatches, setShowNotificationsAndMatches] = useState(0);

	// Toggle the popup open/close state
	const togglePopup = () => {
		setPopupOpen((prevState) => !prevState);
	};

	//variabile ---------

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const handleLogout = () => {
		// Clear authToken and userId from localStorage
		localStorage.removeItem("authToken");
		localStorage.removeItem("userId");
		localStorage.removeItem("userPets");
		// Redirect to the homepage
		navigate("/");
	};

	const handleSettingsClick = () => {
		setShowSettingsModal((prevState) => !prevState); // Toggle settings modal
		if (!showSettingsModal) {
			setShowNotification(false); // Close notifications if settings is opened
		}
	};

	const handleNotificationClick = () => {
		setShowNotification((prevState) => !prevState); // Toggle notifications
		if (!showNotification) {
			setShowSettingsModal(false); // Close settings if notifications is opened
		}
	};

	const NavigateHome = () => {
		if (showMatch) {
			navigate("/HomePage");
		} else {
			navigate("/ServiceHome");
		}
	};
	return (
		<header>
			<button className="toggle-btn" onClick={toggleSidebar}>
				<CgMenu size={28} />
			</button>
			<div onClick={NavigateHome} style={{ cursor: "pointer" }}>
				<Logo width="192px" />
			</div>
			<div className={styles.HeaderPets}>
				<img src={process.env.PUBLIC_URL + "/images/HeaderPets.png"} alt="Pets" />
			</div>
			<div className={styles.HeaderButtons}>
				{showMatch ? <MatchPopup showNotificationsAndMatches={showNotificationsAndMatches} setShowNotificationsAndMatches={setShowNotificationsAndMatches} /> : <BsFillSendPlusFill size={21} onClick={togglePopup} />}

                <NotificationIcon 
                    showNotificationsAndMatches={showNotificationsAndMatches} 
                    setShowNotificationsAndMatches={setShowNotificationsAndMatches} 
                />

				<SettingsModal
					showNotificationsAndMatches={showNotificationsAndMatches} 
                    setShowNotificationsAndMatches={setShowNotificationsAndMatches} 
                />
				
				<FaSignOutAlt size={21} title="Logout" onClick={() => setShowModal(true)} />
			</div>
			{/* pentru cortina sura care aparare cand apesi pe log out */}
			{showModal && <AskIfUserWantsToLogOut onDelete={handleLogout} onCancel={handleCancel} />}
			{/* Afișare modal Setări */}
			<NotificationPopup isOpen={isPopupOpen} onClose={togglePopup} />
		</header>
	);
}

export default Header;
