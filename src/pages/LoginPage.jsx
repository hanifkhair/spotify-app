import {
  Box,
  Flex,
  Image,
  Icon,
  Center,
  Input,
  Checkbox,
  Button,
  Container,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo-black.svg";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import axios from "axios";

export default function LoginPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  function inputHandler(e) {
    console.log("asd");
    const { value, id } = e.target;
    const tempAccount = { ...account };
    tempAccount[id] = value;
    setAccount(tempAccount);
  }

  const [seePassword, setSeePassword] = useState(false);

  // useEffect(() => {
  // const user = JSON.parse(localStorage.getItem("user"));
  // if (user?.email && user?.password) {
  //   nav("/");
  // }
  // }, []);

  async function login() {
    //karena butuh waktu untuk mendapat data dari API
    //maka function diubah menjadi asycn

    await axios
      .get("http://localhost:2000/user", {
        params: {
          email: account.email.toLocaleLowerCase(),
          password: account.password,
        },
      })
      .then((res) => {
        if (res.data.length) {
          dispatch({
            type: auth_types.login,
            payload: account,
          });
          localStorage.setItem("user", JSON.stringify(account));
          nav("/");
        } else {
          alert("email atau password salah");
        }
      });
  }

  return (
    <>
      <Center flexDir={"column"} gap={"20px"} w={"100%"} paddingBottom={"8px"}>
        <Center
          paddingTop={"25px"}
          pb={"12px"}
          borderBottom={"1px solid #D9DADC"}
          w={"100%"}
        >
          <Image src={logo} w={"auto"} h={"44px"} />
        </Center>

        <Center maxW={"450px"} w={"100%"} flexDir={"column"} gap={"16px"}>
          <Center
            w={"100%"}
            h={"48px"}
            bgColor={"#1877f2"}
            color={"#e8f2fe"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
          >
            <Icon as={BsFacebook} h={"20px"} w={"20px"}></Icon>
            CONTINUE WITH FACEBOOK
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            bgColor={"#191919"}
            color={"#e8e8e8"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
          >
            <Icon as={BsApple} h={"20px"} w={"20px"}></Icon>
            CONTINUE WITH APPLE
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            bgColor={"#ffffff"}
            color={"#6a6a6a"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
            border={"1px solid #a5a5a5"}
          >
            <Icon as={FcGoogle} h={"20px"} w={"20px"}></Icon>
            CONTINUE WITH GOOGLE
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            bgColor={"#ffffff"}
            color={"#6a6a6a"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
            border={"1px solid #a5a5a5"}
          >
            CONTINUE WITH PHONE NUMBER
          </Center>

          <Center>
            <hr /> OR
          </Center>

          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>Email address or username</Text>
            <Input
              id="email"
              onChange={inputHandler}
              w={"100%"}
              h={"48px"}
              bgColor={"#ffffff"}
              color={"#6a6a6a"}
              fontWeight={"normal"}
              gap={"10px"}
              border={"1px solid #a5a5a5"}
              type="text"
              placeholder={"Email address or username"}
              focusBorderColor="black"
            ></Input>
          </Flex>

          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>Password</Text>

            <InputGroup size={"md"}>
              <Input
                id="password"
                w={"100%"}
                h={"48px"}
                bgColor={"#ffffff"}
                color={"#6a6a6a"}
                fontWeight={"normal"}
                gap={"10px"}
                border={"1px solid #a5a5a5"}
                type={seePassword ? "text" : "password"}
                placeholder={"Password"}
                focusBorderColor="black"
                onChange={inputHandler}
              ></Input>

              <InputRightElement h={"100%"}>
                <Icon
                  as={seePassword ? AiOutlineEye : AiOutlineEyeInvisible}
                  color={"#a5a5a5"}
                  w={"24px"}
                  h={"24px"}
                  cursor={"pointer"}
                  onClick={() => setSeePassword(!seePassword)}
                ></Icon>
              </InputRightElement>
            </InputGroup>
            {account.password.length < 8 ? (
              <Box color={"red"}>password minimal 8</Box>
            ) : null}
          </Flex>

          <Container textDecor={"underline"} fontWeight={"bold"}>
            <a href="#">Forget your password?</a>
          </Container>

          <Flex w={"100%"} justifyContent={"space-between"}>
            <Center>
              <label htmlFor="remember-login">
                <input
                  type="checkbox"
                  name=""
                  id="remember-login"
                  height={"24px"}
                  width={"24px"}
                />
                <span> Remember me</span>
              </label>
            </Center>
            <Button
              borderRadius={"25px"}
              fontWeight={"600"}
              bgColor={"#1ed760"}
              h={"48px"}
              w={"121px"}
              onClick={login}
            >
              LOG IN
            </Button>
          </Flex>

          <Center>
            <Container fontSize={"large"} fontWeight={"bold"}>
              Don't have an account?
            </Container>
          </Center>

          <Center
            w={"100%"}
            h={"48px"}
            bgColor={"#ffffff"}
            color={"#6a6a6a"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
            border={"1px solid #a5a5a5"}
          >
            <Link to={"/register"}>SIGN UP FOR SPOTIFY</Link>
          </Center>
        </Center>
      </Center>
    </>
  );
}
