import "./HomePage.css";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";

const HomePage = () => {
  return (
    <div className="HomePage__container">
      {/* <Posts posts={posts}></Posts> */}
      <Navbar />
      <MainContent />
    </div>
  );
};

export default HomePage;
