import { useGlobalContext } from "../../Context/Context";
import "./Modals.css";
const Modal = () =>{
    const {selectedMeal, closeModal} = useGlobalContext();
    const {strMealThumb, strMeal, strInstructions, strSource, strYoutube} = selectedMeal
    return(
        <>
        <aside className="modal-overlay">
            <div className="modal-container">
               <img src={strMealThumb} alt={strMeal} className="modal-img"/>
               <div className="modal-content">
                   <h4>{strMeal}</h4>
                   <h5>Cooking Instructions</h5>
                   <p>{strInstructions}</p>
                   <a href={strSource} target="_blank" rel="noreferrer">Original Source</a>
                   <a href={strYoutube} target="_blank" rel="noreferrer">You can also watch the video here on YouTube</a>
                 <button className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
               </div>
               
                </div>
        </aside>
        </>
    );
}

export default Modal;