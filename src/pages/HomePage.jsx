import Navbar from "../components/navbar";
import Playbar from "../components/playbar";
import MainPage from "../components/main";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function HomePage() {
  const nav = useNavigate();

  const [loading, setLoading] = useState(true);

  const userSelector = useSelector((state) => state.auth);

  useEffect(() => {
    //masuk sini pada saat load page

    setTimeout(() => setLoading(false), 1000);
    const user = JSON.parse(localStorage.getItem("user"));
    // if (!user?.email) {
    //   nav("/login");
    // }
  });

  const [playlist, setPlaylist] = useState([]);
  const [home_playlist, setHome_playlist] = useState();
  async function fetchData() {
    await axios
      .get("http://localhost:2000/musics")
      .then((res) => setPlaylist(res.data));

    await axios
      .get("http://localhost:2000/playlist")
      .then((res) => setHome_playlist(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Center w={"100vw"} h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <Playbar playlist={playlist} />
          <MainPage data={home_playlist} setPlaylist={setPlaylist} />
        </>
      )}
    </>
  );
}
