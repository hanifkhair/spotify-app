import { position } from "@chakra-ui/react";
import "../css/stylesPlaybar.css";
import "../images/bg-spotify.jpg";
//import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";

// import {
// 	Box,
// 	Button,
// 	ButtonGroup,
// 	IconButton,
// 	Container,
// 	Flex,
// 	Image,
// 	Icon,
// 	Text,
// 	Stack,
// } from "@chakra-ui/react";

export default function Playbar() {
	return (
		<>
			<div
				class="music-player"
				style={{ bottom: "0", position: "fixed", width: "100%" }}
			>
				<div class="song-bar">
					<div class="song-infos">
						<div class="image-container">
							<img
								src="https://images.unsplash.com/photo-1562442507-cfa3c80f9c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80"
								alt="Ramadhan nasheed"
							/>
						</div>
						<div class="song-description">
							<p class="title">Ramadhan</p>
							<p class="artist">Mishari Rashid</p>
						</div>
					</div>
					<div class="icons">
						<i class="far fa-heart"></i>
						<i class="fas fa-compress"></i>
					</div>
				</div>
				<div class="progress-controller">
					<div class="control-buttons">
						<i class="fas fa-random"></i>
						<i class="fas fa-step-backward"></i>
						<i class="play-pause fas fa-play"></i>
						<i class="fas fa-step-forward"></i>
						<i class="fas fa-undo-alt"></i>
					</div>
					<div class="progress-container">
						<span>0:49</span>
						<div class="progress-bar">
							<div class="progress"></div>
						</div>
						<span>3:15</span>
					</div>
				</div>
				<div class="other-features">
					<i class="fas fa-list-ul"></i>
					<i class="fas fa-desktop"></i>
					<div class="volume-bar">
						<i class="fas fa-volume-down"></i>
						<div class="progress-bar">
							<div class="progress"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
