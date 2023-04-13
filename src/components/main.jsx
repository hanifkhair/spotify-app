import { Button, Box, Container, Flex, Image } from "@chakra-ui/react";
import "./main.css";
import play from "../assets/main/PLAY BUTTON (1).png";
import { useEffect } from "react";

export default function MainPage(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  return (
    <Box
      width="200vw"
      bgColor="#121212"
      height="100vh"
      maxWidth="100%"
      maxHeight="100vh"
    >
      <Box className="gradient">
        <Box
          marginLeft={"241px"}
          height={"100%"}
          padding={"80px 32px 0px 32px  "}
        >
          <Flex
            height={"350px"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Box
              height={"38px"}
              maxWidth={"2800px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box width={"100px"} className="title1">
                Focus
              </Box>
              <Box className="title2" display={"flex"} alignItems={"center"}>
                Show all
              </Box>
            </Box>

            <Flex
              className="container"
              alignItems={"center"}
              h="100%"
              // height={"500px"}
              // bottom={"0"}
              // bgColor={"red"}
              gap={"25px"}
              // padding={"20px"}
              overflowX={"hidden"}
              // zIndex={"3"}
              position={"relative"}
            >
              {props?.data.map((val) => (
                <Card {...val} setPlaylist={props.setPlaylist} />
              ))}
            </Flex>
          </Flex>

          <Flex
            height={"350px"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Box
              height={"38px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box width={"200px"} className="title1">
                Spotify Playlist
              </Box>
              <Box className="title2" display={"flex"} alignItems={"center"}>
                Show all
              </Box>
            </Box>

            <Flex
              className="container"
              alignItems={"center"}
              h="100%"
              // height={"500px"}
              // bottom={"0"}
              // bgColor={"red"}
              gap={"25px"}
              // padding={"20px"}
              overflowX={"hidden"}
              position={"relative"}
              // zIndex={"3"}
            >
              {props?.data2.map((val) => (
                <Card {...val} setPlaylist={props.setPlaylist} />
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

function Card(props) {
  return (
    <Flex
      className="card"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={() => {
        props?.setPlaylist(props?.list);
      }}
    >
      <Box className="play">
        <img src={play} alt="play" width={"40px"} height={"40px"} />
      </Box>
      <Box>
        <Box>
          <img
            src={props.imgURL}
            alt="cov"
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "10px" }}
          />
        </Box>
        <Box>
          <Box height={"30px"} paddingTop={"20px"} className="judul">
            {props.titile.length > 21
              ? props.titile.substring(0, 17) + "..."
              : props.titile}
          </Box>
          <Box height={"50px"} paddingTop={"15px"} className="desc">
            {props.desc.length > 43
              ? props.desc.substring(0, 39) + "..."
              : props.desc}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
