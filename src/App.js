import "./App.css";
import ScrollIndicator from "./Components/008_Scroll_Indicator/ScrollIndicator";
// import LightDarkMode from "./Components/007_Light_Dark_Mode/LightDarkMode";
// import TreeView from "./Components/005_Tree_View/TreeView";
// import {menus} from "./Components/005_Tree_View/data";
// import ImageSlider from "./Components/004_Image_Slider/ImageSlider";
// import LoadMore from "./Components/005_Load_More_Data/LoadMore";
// import StarRating from './Components/003_Star_Rating/StarRating';
// import RandomColor from './Components/002_Random_Color_Generator/RandomColor';
// import Accordion from './Components/001_Accordian/Accordian';

function App() {
  return (
    <div>
      {/* <Accordion /> */}

      {/* Random Color Generator */}
      {/* <RandomColor /> */}

      {/* star rating */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}


      {/* Load More Data */}
      {/* <LoadMore /> */}


      {/* Tree View Components */}
      {/* <TreeView menus={menus}/> */}

      {/* Light Dark Theme */}
      {/* <LightDarkMode /> */}

      {/*Scroll Indicator  */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
