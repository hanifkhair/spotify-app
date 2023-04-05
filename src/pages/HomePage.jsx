import Navbar from "../components/navbar";
import Playbar from "../components/playbar";
import MainPage from "../components/main";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, Center } from "@chakra-ui/react";

export default function HomePage(props) {
  // const nav = useNavigate();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   //masuk sini pada saat load page

  //   setTimeout(() => setLoading(false), 1000);

  //   if (props.user != "chris") {
  //     alert("bukan chris");
  //     nav("/login");
  //   }
  // });

  return (
    <>
      {/* {loading ? (
        <Center w={"100vw"} h={"100vh"}>
          <Spinner />
        </Center>
      ) : ( */}
      <>
        <Navbar />
        <Sidebar />
        <Playbar />
        <MainPage />
      </>
      {/* )} */}
    </>
  );
}
