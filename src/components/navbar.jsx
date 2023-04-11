import { Box, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth_types } from "../redux/types";

export default function Navbar() {
  const userSelector = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const nav = useNavigate();
  function logout() {
    dispatch({ type: auth_types.logout });
    localStorage.removeItem("user");
    nav("/login");
  }
  return (
    <>
      <Box
        width={"100vw"}
        paddingLeft={"261px"}
        paddingRight={"20px"}
        alignItems={"center"}
        top={0}
        pos="fixed"
        height={"64px"}
        display={"flex"}
        justifyContent={"space-between"}
        bgColor={"black"}
        zIndex={"1"}
      >
        <Box>
          <ButtonGroup color={"black"}>
            <IconButton
              as={MdOutlineKeyboardArrowLeft}
              bgColor={"black"}
              color={"#A0A0A0"}
              _hover={{ background: "black" }}
              cursor={"pointer"}
            ></IconButton>
            <IconButton
              as={MdOutlineKeyboardArrowRight}
              bgColor={"black"}
              color={"#A0A0A0"}
              _hover={{ background: "black" }}
              cursor={"pointer"}
            ></IconButton>
          </ButtonGroup>
        </Box>
        <Box>
          <ButtonGroup>
            <Button
              color={"#A7A7A7"}
              font={"16px"}
              padding={"8px 32px 8px 8px"}
              borderRadius={"25px"}
              bgColor={"black"}
              _hover={{ background: "black" }}
            >
              Sign Up
            </Button>
            <Button
              color={"#000000"}
              font={"16px"}
              bgColor={"#FFFFFF"}
              padding={"8px 32px"}
              borderRadius={"25px"}
              onClick={logout}
            >
              Log Out
            </Button>
            <Button>Profile {userSelector?.name}</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
