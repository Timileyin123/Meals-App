import { useGlobalContext } from "./Context/Context";
import Search from "./components/Search/Search";
import Favourites from "./components/Favourites/Favourites";
import Meals from "./components/Meals/Meals";
import Modals from "./components/Modals/Modals";
import './App.css';

function App() {
  const {showModal, favourites} = useGlobalContext()
  return (
    <div className="App">
       <Search />
    {favourites.length > 0 && <Favourites /> }
      <Meals />
      {showModal && <Modals /> }
    </div>
  );
}

export default App;
