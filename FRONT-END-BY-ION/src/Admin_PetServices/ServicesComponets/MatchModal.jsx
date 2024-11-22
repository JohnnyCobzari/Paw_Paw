import React, { useState } from "react";
import { BsHearts } from "react-icons/bs";
import "../ServiceComponentsStyles/MatchModal.css";
import { RiHeartsLine } from "react-icons/ri";

function FullScreenMessage({ pet, onClose }) {
	return (
		<div className="fullScreenMessage">
			<div className="messageContent">
				<h1>Match Sent!</h1>
				<p>You have sent a match request for {pet.petName}!</p>
				<button className="continueButton" onClick={onClose}>
					Continue
				</button>
			</div>
		</div>
	);
}


function MatchModal({ userPets }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPet, setSelectedPet] = useState(null); // Track selected pet for full-screen message

	// Toggle curtain visibility
	const toggleCurtain = () => {
		setIsOpen(!isOpen);
	};

	// Handle pet click event
	const handlePetClick = (pet) => {
		console.log("Pet clicked:", pet);
		setSelectedPet(pet); // Set the selected pet to show the full-screen message
	};

	// Close the full-screen message
	const closeMessage = () => {
        setIsOpen(!isOpen);
		setSelectedPet(null);
	};

	return (
		<>
			{/* Button to trigger the curtain */}
			<div className="MatchHeartDivModal" onClick={toggleCurtain}>
				<BsHearts className="MatchHeartModal" />
				<p>Send a match</p>
			</div>

			{/* Curtain that appears from top when button is clicked */}
			<div className={`curtainModal ${isOpen ? "openModal" : ""}`}>
				{userPets &&
					userPets.map((pet) => (
						<div
							key={pet._id}
							className="pet-thumbnailDiv"
							onClick={() => handlePetClick(pet)}
						>
							<img src={pet.image} alt={pet.petName} className="pet-thumbnail" />
						</div>
					))}
				<p className="MatchHeartDivModalParagraf">
					Choose your pet <RiHeartsLine />
				</p>
			</div>

			{/* Full-screen message */}
			{selectedPet && (
				<FullScreenMessage
					pet={selectedPet}
					onClose={closeMessage} // Pass the function to close the message
				/>
			)}
		</>
	);
}

export default MatchModal;
