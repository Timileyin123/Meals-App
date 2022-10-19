import React, {useState} from "react";
import { useGlobalContext} from "../../Context/Context";
import "./Search.css";
const Search = () => {

    const [text, setText] = useState(" ")
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
         if (text){
             setSearchTerm(text)
             setText(" ")
        }
    }
    
     //const handleRandomMeal = () => {
     //    setSearchTerm ("")
      //   setText("")
      //  fetchRandomMeal()
    // }
        return (
            <>
            <header className="search-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" onChange={handleChange} value={text} placeholder="Type Your Favourites"   />
                    <button type="submit" className="btn">Search
                    </button>
                    <button type="button" className="btn btn-hipster" onClick={fetchRandomMeal}>
                        Surprise Me!
                    </button>
                </form>
            </header>
            </>
        );
    
}
 
export default Search;