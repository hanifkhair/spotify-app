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
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import logo from "../assets/logo-black.svg";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import { TbAlertCircleFilled } from "react-icons/tb";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";

export default function RegisterPage() {
  YupPassword(Yup);
  const months = [
    {
      name: "January",
      number: 1,
    },
    {
      name: "February",
      number: 2,
    },
    {
      name: "March",
      number: 3,
    },
    {
      name: "April",
      number: 4,
    },
    {
      name: "May",
      number: 5,
    },
    {
      name: "June",
      number: 6,
    },
    {
      name: "July",
      number: 7,
    },
    {
      name: "Agust",
      number: 8,
    },
    {
      name: "Sept",
      number: 9,
    },
    {
      name: "Oct",
      number: 10,
    },
    {
      name: "Nov",
      number: 11,
    },
    {
      name: "Desc",
      number: 12,
    },
  ];

  const nav = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      email2: "",
      password: "",
      name: "",
      day: "",
      month: "",
      yyyy: "",
      gender: "male",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("you need to enter your email.")
        .email(
          "This email is invalid. Make sure it's written like example@email.com"
        ),
      email2: Yup.string()
        .required("you need to confirm your email.")
        .oneOf([Yup.ref("email"), null], "The email addresses don't match"),
      password: Yup.string().min(8, "Your password is too short."),
      name: Yup.string().required("Enter a name for your profile."),
      day: Yup.number("Enter a valid day of the month.")
        .moreThan(0, "Enter a valid day of the month.")
        .lessThan(32, "Enter a valid day of the month"),
      month: Yup.string().required("Select your birth month."),
      year: Yup.number()
        .required("Enter a valid year.")
        .moreThan(0, "Enter a valid year"),
    }),
  });

  function inputHandler(e) {
    const { value, id } = e.target;
    formik.setFieldValue(id, value);
  }

  const [seePassword, setSeePassword] = useState(false);

  return (
    <>
      <Center flexDir={"column"} w={"100%"}>
        <Center
          maxW={"450px"}
          w={"100%"}
          flexDir={"column"}
          gap={"16px"}
          paddingX={"24px"}
          paddingBottom={"130px"}
          paddingTop={"32px"}
        >
          <Box>
            <Image src={logo} w={"88px"} h={"27px"} />
          </Box>

          <Center
            w={"100%"}
            h={"48px"}
            color={"black"}
            fontWeight={"700"}
            fontSize={"24px"}
            gap={"10px"}
          >
            Sign up for free to start listening
          </Center>
          <Center
            w={"100%"}
            maxW={"312px"}
            h={"48px"}
            bgColor="facebook.600"
            color={"white"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
          >
            <Icon as={BsFacebook} h={"20px"} w={"20px"}></Icon>
            Sign up with Facebook
          </Center>
          <Center
            w={"100%"}
            maxW={"312px"}
            h={"48px"}
            bgColor={"#ffffff"}
            color={"#535353"}
            fontWeight={"700"}
            gap={"10px"}
            borderRadius={"25px"}
            border={"3px solid #535353"}
          >
            <Icon as={FcGoogle} h={"20px"} w={"20px"}></Icon>
            Sign up with Google
          </Center>
          <Center>or</Center>
          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>What's your email?</Text>
            <Input
              id="email"
              // onChange={(e) => formik.setFieldValue("email", e.target.value)}
              onChange={inputHandler}
              w={"100%"}
              h={"48px"}
              bgColor={"#ffffff"}
              color={"#6a6a6a"}
              fontWeight={"normal"}
              gap={"10px"}
              border={"1px solid #a5a5a5"}
              type="text"
              placeholder={"Enter your email"}
              focusBorderColor="black"
            ></Input>
            <Flex flexDir={"column"}>
              <Box
                color={"red"}
                display={formik.errors.email ? "flex" : "none"}
              >
                <Icon as={TbAlertCircleFilled} />
                {formik.errors.email}
              </Box>

              <Container textDecor={"underline"} color={"#117A37"}>
                <a href="#">Use your phone number instead</a>
              </Container>
            </Flex>
          </Flex>
          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>Confirm your email</Text>
            <Input
              id="email2"
              onChange={inputHandler}
              w={"100%"}
              h={"48px"}
              bgColor={"#ffffff"}
              color={"#6a6a6a"}
              fontWeight={"normal"}
              gap={"10px"}
              border={"1px solid #a5a5a5"}
              type="text"
              placeholder={"Enter your email"}
              focusBorderColor="black"
            ></Input>
            <Flex flexDir={"column"}>
              {account.password.length < 8 ? (
                <Box
                  color={"red"}
                  display={formik.errors.email2 ? "flex" : "none"}
                >
                  <Icon as={TbAlertCircleFilled} /> {formik.errors.email2}
                </Box>
              ) : null}
            </Flex>
          </Flex>
          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>Create Password</Text>

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
                type="password"
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
            <Flex flexDir={"column"}>
              <Box
                color={"red"}
                display={formik.errors.password ? "flex" : "none"}
              >
                <Icon as={TbAlertCircleFilled} /> {formik.errors.password}
              </Box>
            </Flex>
          </Flex>
          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>What's sould we call you?</Text>
            <Input
              id="name"
              onChange={inputHandler}
              w={"100%"}
              h={"48px"}
              bgColor={"#ffffff"}
              color={"#6a6a6a"}
              fontWeight={"normal"}
              gap={"10px"}
              border={"1px solid #a5a5a5"}
              type="text"
              placeholder={"Enter your email"}
              focusBorderColor="black"
            ></Input>
            <Flex flexDir={"column"}>
              <Box color={"red"} display={formik.errors.name ? "flex" : "none"}>
                <Icon as={TbAlertCircleFilled} /> {formik.errors.name}
              </Box>
            </Flex>
          </Flex>
          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>What's your date of birth?</Text>
            <Flex justifyContent={"space-between"} gap={"20px"}>
              <Input
                id="day"
                onChange={inputHandler}
                w={"100%"}
                maxW={"80px"}
                h={"48px"}
                bgColor={"#ffffff"}
                color={"#6a6a6a"}
                fontWeight={"normal"}
                gap={"10px"}
                border={"1px solid #a5a5a5"}
                type="text"
                placeholder={"DD"}
                focusBorderColor="black"
              ></Input>
              <Select
                id="month"
                onChange={inputHandler}
                w={"100%"}
                // maxW={"80px"}
                h={"48px"}
                bgColor={"#ffffff"}
                color={"#6a6a6a"}
                fontWeight={"normal"}
                gap={"10px"}
                border={"1px solid #a5a5a5"}
                type="text"
                focusBorderColor="black"
                // placeholder={"Mont"}
                // {month.map((val)=>(
                //   <option value={val.number}> {val.name}</option>
                // ))}
              >
                {months.map((val) => (
                  <option value={val.number}>{val.name}</option>
                ))}
              </Select>

              <Input
                id="yyy"
                onChange={inputHandler}
                w={"100%"}
                maxW={"80px"}
                h={"48px"}
                bgColor={"#ffffff"}
                color={"#6a6a6a"}
                fontWeight={"normal"}
                gap={"10px"}
                border={"1px solid #a5a5a5"}
                type="text"
                placeholder={"YYY"}
                focusBorderColor="black"
              ></Input>
            </Flex>
            <Flex flexDir={"column"}>
              <Box color={"red"} display={formik.errors.day ? "flex" : "none"}>
                <Icon as={TbAlertCircleFilled} /> {formik.errors.day}
              </Box>
              <Box
                color={"red"}
                display={formik.errors.month ? "flex" : "none"}
              >
                <Icon as={TbAlertCircleFilled} /> {formik.errors.month}
              </Box>
              <Box color={"red"} display={formik.errors.yyyy ? "flex" : "none"}>
                <Icon as={TbAlertCircleFilled} /> {formik.errors.yyyy}
              </Box>
            </Flex>
          </Flex>
          <Flex w={"100%"} flexDir={"column"} gap={"5px"}>
            <Text fontWeight={"bold"}>What's your gender?</Text>

            <RadioGroup defaultValue="Male">
              <Flex flexWrap={"wrap"} gap={"5px"} columnGap={"10px"}>
                <Radio colorScheme="green" value="Male">
                  Male
                </Radio>

                <Radio colorScheme="green" value="Female">
                  Female
                </Radio>

                <Radio colorScheme="green" value="Non-binary">
                  Non-binary
                </Radio>

                <Radio colorScheme="green" value="Other">
                  Other
                </Radio>

                <Radio colorScheme="green" value="Prefer not to say">
                  Prefer not to say
                </Radio>
              </Flex>
            </RadioGroup>
          </Flex>
          <Flex
            pt={"10px"}
            pb={"10px"}
            h={"40px"}
            fontSize={"14px"}
            alignItems={"flex-start"}
            gap={"10px"}
          >
            <Checkbox></Checkbox>
            <Box h={"100%"} paddingX={"12px"}>
              I would prefer not to receive marketing messages from Spotify
            </Box>
          </Flex>
          <Flex
            pt={"10px"}
            pb={"10px"}
            h={"40px"}
            fontSize={"14px"}
            alignItems={"flex-start"}
            gap={"10px"}
          >
            <Checkbox></Checkbox>
            <Box h={"100%"} paddingX={"12px"}>
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </Box>
          </Flex>
          <Flex w={"100%"} justifyContent={"center"} pt={"16px"}>
            <Center flexDir={"column"} gap={"10px"}>
              <Center fontSize={"11px"} gap={"11px"}>
                By clicking on sign-up, you agree to Spotify's
                <Flex color={"green"} textDecor={"underline"}>
                  Terms and Conditions of Use.
                </Flex>
              </Center>

              <Center fontSize={"11px"} gap={"11px"}>
                By clicking on sign-up, you agree to the
                <Flex color={"green"} textDecor={"underline"}>
                  Spotify Privacy Policy.
                </Flex>
              </Center>

              <Button
                borderRadius={"25px"}
                fontWeight={"600"}
                bgColor={"#1ed760"}
                h={"48px"}
                w={"121px"}
              >
                Sign Up
              </Button>
            </Center>
          </Flex>

          <Center>
            Have an account?
            <Link to={"/login"}>
              <Flex color={"green"} textDecor={"underline"}>
                Log in
              </Flex>
            </Link>
          </Center>
        </Center>
      </Center>
    </>
  );
}
