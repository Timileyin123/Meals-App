import React, {useState,useContext, useEffect} from 'react';
import axios from "axios";
import {setValues, getValues} from '../Storage/Storage'
const AppContext = React.createContext({meals: [], Loading: false, searchTerm: " ", showModal: false, selectedMeal:null, favourites: []})

    const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"


    const getFavouritesFromLS = () => {
        let favourites = getValues("favourites");

        if(favourites){
            favourites = getValues("favourites")
        }
        else{
            favourites = []
        }
        return favourites
    }
    let getFavourites = getFavouritesFromLS();
    const AppProvider = ({children}) =>{
        const [Loading, setLoading] = useState('false');
        const [meals, setMeals] = useState ([]);
        const [searchTerm, setSearchTerm] = useState(" ");
        const [showModal, setShowModal] = useState(false);
        const [selectedMeal, setSelectedMeal] = useState(null);
        const [favourites, setFavourites] = useState(getFavourites);

        // Using Axios to Fetch Data
        const fetchMeals = async (url) => {
                setLoading(true)
            try{
                const request = await axios(url)
            if(request.data?.meals?.length > 0){
            setMeals(request.data.meals) 
            } else{
                setMeals([])
            }  
            } catch(e){
                console.log(e.request)
            }
            setLoading(false)

          // Using Fetch API
     //  const fetchData = async () => {
        
                // const request = await fetch("https://randomuser.me/api/ ")
                // const data = await request.json()
              //   console.log(data)
            //  }  catch(error) {
                 // console.log(error)
             // }
    
       // }
        }
    useEffect(()=>{
        fetchMeals(`${mealsUrl}${searchTerm}`)
    // fetchData()
    },[searchTerm])

    useEffect (()=>{
        fetchMeals(mealsUrl)
    }, [])

   //  useEffect(()=>{
    //    if(!searchTerm)
    //     return fetchMeals(`${mealsUrl}${searchTerm}`)
    // },[searchTerm])

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }

    const selectMeal = (idMeal, favouriteMeal)=>{
        let meal;
        if(favouriteMeal){
            meal=favourites.find((meal)=>meal.idMeal === idMeal)
        }
        else{
            meal=meals.find((meal)=>meal.idMeal === idMeal)
        }

        setSelectedMeal(meal)
        setShowModal(true);
    }

    const closeModal = () =>{
        setShowModal(false)
    }

    const addToFavourites = (idMeal) =>{
        const alreadyFavourites = favourites.find((meal) => meal.idMeal === idMeal);
        if(alreadyFavourites) return
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const updatedFavourites = [...favourites, meal];
        
        setFavourites(updatedFavourites)
        setValues("favourites", updatedFavourites)
    }

    const removeFromFavourites = (idMeal) => {
        const updatedFavourites = favourites.filter((meal)=> meal.idMeal !== idMeal);

        setFavourites(updatedFavourites)
        setValues("favourites", updatedFavourites)
    }
    return(
        <AppContext.Provider value={{Loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal,favourites, addToFavourites, removeFromFavourites}}>
            {children}
        </AppContext.Provider>
        );
    }

    export {AppContext, AppProvider};

export const useGlobalContext = () => {
    return useContext(AppContext)
}