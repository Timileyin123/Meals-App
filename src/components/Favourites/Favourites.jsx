import { useGlobalContext } from "../../Context/Context";
import "./Favourites.css";
const Favourites = () => { 
       const {favourites, selectMeal, removeFromFavourites} = useGlobalContext();
    return (
        <>
        <div className="favourites">
            <div className="favourites-content">
                <h3>Favourites</h3>
                <div className="favourites-container">
                    {favourites.map((item)=>{
                        const {idMeal, strMealThumb} = item;
                        return <div key={idMeal} className="favourite-item">
                            <img src={strMealThumb} alt="" className="favourites-img img" onClick={()=> selectMeal(idMeal, true)}/>
                            <button className="remove-btn" onClick={()=> removeFromFavourites(idMeal)}>remove</button>
                        </div>
                    })}
                </div>
            </div>
        </div>
        </>
    );
    
}
 
export default Favourites;