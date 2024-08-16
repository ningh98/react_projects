import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tact-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion/> */}

      {/* Random Color component */}
      {/* <RandomColor/> */}

      {/* Star Rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page="1"
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}
      
      {/* Tree view component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator/> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}
      
      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Custome tabs component */}
      {/* <TabTest/> */}

      {/* Custom Modal Component */}
      {/* <ModalTest /> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe
      <TicTacToe/> */}

      {/* Feature Flag Implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
      
      
    </div>
  );
}

export default App;
