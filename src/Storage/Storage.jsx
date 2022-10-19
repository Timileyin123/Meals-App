
export const setValues = (key, value) => {
return localStorage.setItem(key, JSON.stringify(value));
}

export const getValues = () => {
    return JSON.parse(localStorage.getItem("favourites"));
}
