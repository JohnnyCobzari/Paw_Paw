import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import "../../../styles/NotificationIcon.css"; // Styles

const MatchPopup = ({showNotificationsAndMatches, setShowNotificationsAndMatches}) => {
  const [showMatches, setShowMatches] = useState(false);
  const [matches, setMatches] = useState([]);

  // Predefined matches array
  const predefinedMatches = [
    { id: 1, name: "Eduard", read: false },
    { id: 2, name: "Maria", read: false },
    { id: 3, name: "John", read: false },
  ];

  // Initialize matches on component mount
  useEffect(() => {
    setMatches(predefinedMatches);
  }, []);

  // Function to delete a match
  const handleDeleteMatch = (matchId) => {
    setMatches((prevMatches) =>
      prevMatches.filter((match) => match.id !== matchId)
    );
  };

  const unreadCount = matches.filter((match) => !match.read).length;

  const markAllAsRead = () => {
    const updatedMatches = matches.map((match) => ({
      ...match,
      read: true,
    }));
    setMatches(updatedMatches);
  };

  return (
    <div className="notification-icon-container">
      <div
        className="icon-wrapper"
        onClick={() => {
            if (showNotificationsAndMatches == 0 || showNotificationsAndMatches == 1 || showNotificationsAndMatches == 3){
                setShowNotificationsAndMatches(2);
            }
            else{
                setShowNotificationsAndMatches(0);
            }
          markAllAsRead();
        }}
      >
        <FaRegHeart size={24} className="notification-icon" />
        {/* Display the number of unread matches if there are any */}
        {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
      </div>

      {showNotificationsAndMatches == 2 && (
        
        <div className="notification-popup">
            
          <h4>Matches</h4>
          {matches.length > 0 ? (
            <ul>
              {matches.map((match) => (
                <li
                  key={match.id} // Ensure unique key
                  className={`notification-item ${match.read ? "read" : "unread"}`}
                >
                  You have a match from {match.name}
                  <FaTimes
                    className="delete-icon"
                    onClick={() => handleDeleteMatch(match.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No matches</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MatchPopup;
