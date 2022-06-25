import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Nft from "./components/Nft/Nft";
import Partner from "./components/Partner/Partner";
import RoadMap from "./components/RoadMap/RoadMap";
import Story from "./components/Story/Story";
import Team from "./components/Team/Team";
function App() {
  return (
    <div className="App">
        <Nav />
        <Main />
        <Story />
        <Nft />
        <RoadMap />
        <Team />
        <Partner />
        <Footer />
    </div>
  );
}

export default App;