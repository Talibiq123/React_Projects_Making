import './App.css';
import StarRating from './Components/003_Star_Rating/StarRating';
// import RandomColor from './Components/002_Random_Color_Generator/RandomColor';
// import Accordion from './Components/001_Accordian/Accordian';

function App() {
  return (
    <div >
      {/* <Accordion /> */}

      {/* Random Color Generator */}
      {/* <RandomColor /> */}

      {/* star rating */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
