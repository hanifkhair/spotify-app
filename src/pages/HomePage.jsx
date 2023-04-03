import Navbar from "../components/navbar";
import Playbar from "../components/playbar";
import MainPage from "../components/main";
import Sidebar from "../components/sidebar";

function HomePage() {
  return (
    <>
      <Sidebar />
      <MainPage />
      <Navbar />
      <Playbar />
    </>
  );
}

export default HomePage;