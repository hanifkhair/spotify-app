import Navbar from "../components/navbar";
import Playbar from "../components/playbar";
import MainPage from "../components/main";
import Sidebar from "../components/sidebar";

function HomePage() {
  return (
    <>
      <Navbar />

      <Sidebar />
      <MainPage />
      <Playbar />
    </>
  );
}

export default HomePage;
