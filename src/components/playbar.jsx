import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Center,
} from "@chakra-ui/react";
import {
  BiSkipNext,
  BiShuffle,
  BiSkipPrevious,
  BiRepeat,
} from "react-icons/bi";
import { GoPlay } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPip } from "react-icons/bs";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { SlVolume2 } from "react-icons/sl";
import pic from "../images/bg-spotify.jpg";
import { useEffect, useState } from "react";

export default function Playbar(props) {
  const [audio, setAudio] = useState({});

  useEffect(() => {
    console.log(props.playlist);
    soundTrack();
  }, []);

  function soundTrack() {
    if (props.playlist?.length) {
      const tempAudio = new Audio(
        require("../assets/audio/" + props.playlist[0].src)
      );
      // tempAudio.addEventListener("loadedmetadata", function () {
      //   setDuration(tempAudio.duration);
      // })
      setAudio(tempAudio);
    }
  }

  return (
    <Container bottom="0" position="fixed" width="100%" zIndex="3">
      <Flex
        className="music-container"
        bg="#111"
        w="100%"
        h={90}
        position={"fixed"}
        bottom={0}
        direction="row"
        align="center"
        justify="center"
      >
        {/* Description */}
        <Flex className="msc-desc" gap={3} w={"30%"} align={"center"}>
          <Image src={pic} w={70} h={70} />
          <Flex className="msc-intr" direction={"column"} justify={"center"}>
            <Link href="#" color={"white"}>
              Ramadhan
            </Link>
            <Link href="#" color={"white"}>
              Mishari Rashid
            </Link>
          </Flex>
          <Link href="#">
            <Icon as={AiOutlineHeart} w={5} h={5} color={"white"}></Icon>
          </Link>
          <Link href="#">
            <Icon as={BsPip} w={4} h={4} color={"white"}></Icon>
          </Link>
        </Flex>

        {/* Player Button */}
        <Flex
          className="msc-controller"
          direction="column"
          align="center"
          justify="center"
          width={"30%"}
        >
          <Flex
            className="ctrl-button"
            align={"center"}
            width={"100%"}
            justify={"center"}
            gap={3}
          >
            <Box>
              <IconButton
                variant={"link"}
                as={BiShuffle}
                style={{ width: "20px", height: "20px" }}
                color="#999"
              ></IconButton>
            </Box>
            <Box>
              <IconButton
                variant={"link"}
                as={BiSkipPrevious}
                style={{ width: "40px", height: "40px" }}
                color="#999"
              ></IconButton>
            </Box>

            <IconButton
              variant={"link"}
              as={GoPlay}
              style={{ width: "40px", height: "40px" }}
              color="white"
              onClick={() => audio.play()}
            ></IconButton>

            <Box>
              <IconButton
                variant={"link"}
                as={BiSkipNext}
                style={{ width: "40px", height: "40px" }}
                color="#999"
              ></IconButton>
            </Box>
            <Box>
              <IconButton
                variant={"link"}
                as={BiRepeat}
                style={{ width: "20px", height: "20px" }}
                color="#999"
              ></IconButton>
            </Box>
          </Flex>
          <Box height={1} width={"100%"}></Box>
          <Flex
            className="prog-pool"
            align={"center"}
            justify={"space-between"}
            width={"100%"}
          >
            <Box color={"white"} width={10}>
              <Center>0:00</Center>
            </Box>

            <Box className="prog-bar" width={"100%"}>
              <Slider aria-label="slider-ex-1" w={350}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>

            <Box color={"white"} width={10}>
              <Center>3:20</Center>
            </Box>
          </Flex>
        </Flex>

        {/* Control */}
        <Flex
          className="msc-opt"
          w={"30%"}
          justify={"right"}
          gap={2}
          align={"center"}
          h={50}
        >
          <Link>
            <Icon as={TbMicrophone2} w={6} h={5} color={"white"}></Icon>
          </Link>
          <Link>
            <Icon as={HiOutlineQueueList} w={6} h={5} color={"white"}></Icon>
          </Link>
          <Link>
            <Icon as={TbDevices2} w={6} h={5} color={"white"}></Icon>
          </Link>
          <Link>
            <Icon as={SlVolume2} w={6} h={5} color={"white"}></Icon>
          </Link>
          <Slider aria-label="slider-ex-1" w={28}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
    </Container>
  );
}
