import React from "react";
import "../styles/AboutUs.css";
import Logo from "../components/CoreComponents/Logo";
import Footer from "../components/CoreComponents/Footer";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
	const navigate = useNavigate();
	const goToIntroPage = () => {
		navigate("/");
	};
	return (
		<>
			<Logo onClick={goToIntroPage} style={{ cursor: "pointer" }} />
			<div className="aboutUs-container">
				<h1 className="aboutUs-title">About Us</h1>
				<p className="aboutUs-text">
					Welcome to <strong>PawPaw</strong>, the ultimate matchmaking platform for pet lovers! At PawPaw, we understand that pets are more than just animals—they are family. Our mission is to bring together pet owners, breeders, and service providers in a single, easy-to-use app that makes pet care and breeding accessible and convenient.
				</p>
				<h2 className="aboutUs-subtitle">Our Story</h2>
				<p className="aboutUs-text">PawPaw was born out of a desire to simplify the process of finding suitable breeding partners for pets and to provide a centralized hub for all essential pet services. As pet ownership grows worldwide, so does the challenge of navigating fragmented resources for breeding, grooming, veterinary care, and other services. We set out to solve this by creating an all-in-one platform tailored to the needs of dedicated pet owners and their furry friends.</p>
				<h2 className="aboutUs-subtitle">What We Offer</h2>
				<ul className="aboutUs-list">
					<li>Breeding Matchmaking: Find the perfect partner for your purebred pets based on breed, age, health status, and location.</li>
					<li>Comprehensive Pet Profiles: Create detailed profiles for your pets, including vaccination records, allergies, and breeding status.</li>
					<li>Interactive Map: Discover nearby veterinary clinics, grooming salons, pet shops, and other essential services.</li>
					<li>User-Friendly Filters: Use advanced search options to easily find services or breeding partners that meet your specific needs.</li>
				</ul>
				<h2 className="aboutUs-subtitle">Our Vision</h2>
				<p className="aboutUs-text">We aim to build a trusted community where pet owners can easily access all the resources they need in one place. Whether you're looking for a breeding partner for your pet, searching for a reliable vet, or exploring grooming options, PawPaw has you covered. We strive to enhance the overall experience of pet ownership by providing a seamless, reliable, and secure platform that meets the needs of both pet owners and service providers.</p>
				<h2 className="aboutUs-subtitle">Join Us Today!</h2>
				<p className="aboutUs-text">Become a part of the PawPaw community and experience the convenience of having all your pet-related needs in one app. Together, let's make the world a better place for our beloved pets!</p>
			</div>
			<div className="aboutUs-subtitle">Meet Our Team</div>
			<div className="team-container">
				<div className="team-member">
					<img src="images/eu.png" alt="Ion Vornicescu" className="team-photo" />
					<h3>Ion Vornicescu</h3>
					<p>Frontend Developer</p>
				</div>
				<div className="team-member">
					<img src="images/Ion.png" alt="Ion Cobzari" className="team-photo" />
					<h3>Ion Cobzari</h3>
					<p>Backend Developer</p>
				</div>
				<div className="team-member">
					<img src="images/Cosmin.png" alt="Usurelu Cosmin" className="team-photo" />
					<h3>Usurelu Cosmin</h3>
					<p>Mapbox API Expert</p>
				</div>
				<div className="team-member">
					<img src="images/Sanda.png" alt="Crudu Alexandra" className="team-photo" />
					<h3>Crudu Alexandra</h3>
					<p>Figma Designer</p>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default AboutUs;
