const cityForm=document.querySelector('.change-location')
const updateCity = async(city)=>{
    // console.log(city);

    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key);

    return {
        cityInfo:cityInfo,
        weather:weather
    }
}


cityForm.addEventListener('submit',(e)=>{
    //prevent default action
    e.preventDefault();

    //get city value
    const city=cityForm.city.value.trim();
    cityForm.reset();

    //update the city with new city each time
    updateCity(city)
        .then(data => console.log(data))
        .catch(err=>console.log(err));
})