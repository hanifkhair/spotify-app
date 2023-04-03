import "../css/stylesNavbar.css";
import { Box, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";

export default function Navbar() {
	return (
		<>
			<Box display={"flex"} justifyContent={"space-between"} bgColor={"black"}>
				<Box>
					<ButtonGroup color={"black"}>
						<IconButton
							as={TfiArrowCircleLeft}
							bgColor={"black"}
							color={"white"}
						></IconButton>
						<IconButton
							as={TfiArrowCircleRight}
							bgColor={"black"}
							color={"white"}
						></IconButton>
					</ButtonGroup>
				</Box>
				<Box>
					<ButtonGroup>
						<Button
							color={"#A7A7A7"}
							font={"16px"}
							padding={"8px 32px 8px 8px"}
						>
							Sign Up
						</Button>
						<Button
							color={"#000000"}
							font={"16px"}
							bgColor={"#FFFFFF"}
							padding={"8px 32px"}
						>
							Log In
						</Button>
					</ButtonGroup>
				</Box>
			</Box>
		</>
	);
}
