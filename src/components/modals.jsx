import {
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Input,
  Textarea,
  Center,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

export function CreatePlaylist(props) {
  const [imgUrl, setImgUrl] = useState(
    require("../assets/default-spotify.png")
  );

  const [musiclist, setMusiclist] = useState([]);
  const [page, setPage] = useState(1);
  const [add, setAdd] = useState(false);

  function input(e) {
    if (!e.target.value) {
      setImgUrl(require("../assets/default-spotify.png"));
      return;
    }
    setImgUrl(e.target.value);
  }

  // GET SONGS
  async function ambil(page) {
    await axios
      .get("http://localhost:2000/musics", {
        params: { _limit: 2, _page: page },
      })
      .then((res) => {
        let total = Math.ceil(res.headers["x-total-count"] / 2);
        if (total >= page && page > 0) {
          setMusiclist(res.data);
        } else if (page) {
          page--;
        } else {
          page = 1;
        }
      });
    return page;
  }

  useEffect(() => {
    ambil(page);
  }, []);

  // GET Playlist Header
  const userSelector = useSelector((state) => state.auth);
  const [details, setDetails] = useState({
    imgURL: "",
    titile: "",
    desc: "",
    createBy: userSelector.email,
    list: [],
  });

  function inputHandler(e) {
    const id = e.target.id;
    const value = e.target.value;
    const tempObj = { ...details };
    tempObj[id] = value;
    setDetails(tempObj);
    // console.log(tempObj);
  }

  // ADD
  if (add) {
    // alert("true");
  } else {
    // alert("false");
  }

  // SAVE
  async function save() {
    // const { imgURL, playlist, desc, createBy, list } = details;
    await axios.post("http://localhost:2000/playlist", details);
  }

  return (
    <>
      <Flex
        bgColor={"#282828"}
        color={"white"}
        maxW={"524px"}
        // maxH={'389px'}
        w={"524px"}
        h="100%"
        borderRadius={"5px"}
        flexDir={"column"}
        pb="20px"
      >
        <Flex
          justifyContent={"space-between"}
          w="100%"
          fontSize="24px"
          padding={"24px"}
        >
          <Flex fontWeight={"bold"}>Playlist details</Flex>
          <Flex alignItems={"end"}>
            <Icon
              as={IoMdClose}
              color="#87878"
              cursor={"pointer"}
              onClick={() => props.onClose()}
            ></Icon>
          </Flex>
        </Flex>
        <Flex padding={"0px 24px 24px 24px"} justifyContent={"space-between"}>
          <Flex flexDir={"column"} gap="10px">
            <Image
              w={"180px"}
              h="180px"
              src={imgUrl}
              boxShadow={"0px 0px 20px black"}
            ></Image>
            <Input
              bgColor={"#3E3E3E"}
              border={"none"}
              w="180px"
              h="40px"
              placeholder="Image URL"
              id="imgURL"
              onChange={(e) => {
                input(e);
                inputHandler(e);
              }}
            ></Input>
          </Flex>
          <Flex flexDir={"column"} justifyContent={"space-between"}>
            <Input
              bgColor={"#3E3E3E"}
              border={"none"}
              w="280px"
              h="40px"
              placeholder="Title"
              id="titile"
              onChange={(e) => inputHandler(e)}
            ></Input>
            <Textarea
              bgColor={"#3E3E3E"}
              border={"none"}
              w="280px"
              maxH="75%"
              h={"100%"}
              resize={"none"}
              placeholder="Description"
              id="desc"
              onChange={(e) => inputHandler(e)}
            ></Textarea>
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Center>
            <Flex paddingX={"24px"} fontWeight={"bold"}>
              Add Musics
            </Flex>
          </Center>

          <Grid gridTemplateColumns={"1fr 1fr 1fr"}>
            <GridItem w="100%" h="25px"></GridItem>
            <GridItem w="100%" h="25px" fontWeight={"bold"}>
              Title
            </GridItem>
            <GridItem w="100%" h="25px" fontWeight={"bold"}>
              Artist
            </GridItem>
          </Grid>

          {musiclist.map((val) => (
            <ListMusics
              details={details}
              titile={val.titile}
              singer={val.singer}
              setAdd={setAdd}
              add={add}
              val={val}
            />
          ))}
        </Flex>
        <Flex gap={"20px"} w="100%" justifyContent={"center"} margin={"10px 0"}>
          <Flex
            onClick={async () => {
              const p = await ambil(page - 1);
              return setPage(p);
            }}
            cursor={"pointer"}
          >
            Prev
          </Flex>
          <Flex
            onClick={async () => {
              const p = await ambil(page + 1);
              return setPage(p);
            }}
            cursor={"pointer"}
          >
            Next
          </Flex>
        </Flex>

        <Center w="100%">
          <Center
            borderRadius={"5px"}
            fontWeight={"600"}
            bgColor={"#1ED760"}
            h="48px"
            w="90%"
            cursor={"pointer"}
            onClick={save}
          >
            SAVE
          </Center>
        </Center>
      </Flex>
    </>
  );
}

export function ListMusics(props) {
  return (
    <>
      <Grid
        templateColumns="1fr 2fr 1fr"
        columnGap={5}
        maxH={"550px"}
        overflow={"hidden"}
      >
        <GridItem w="100%" h="25px" fontWeight={"bold"}>
          <Center
            onClick={() => {
              props.setAdd(!props.add);
              props.details.list.push(props.val);
              console.log(props.details.list);
            }}
            _hover={{ cursor: "pointer" }}
          >
            {/* {props.add ? <Box bgColor={"green"}>Added</Box> : <Box>Add</Box>} */}
            <Box>Add</Box>
          </Center>
        </GridItem>
        <GridItem w="100%" h="25px" id="title">
          {props.titile}
        </GridItem>
        <GridItem w="100%" h="25px" id="singer">
          {props.singer}
        </GridItem>
      </Grid>
    </>
  );
}
