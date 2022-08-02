const key='5uGNGj74QU5jwGgD6jkIforiICGwyTis';

//get weather information

const getWeather = async(id)=>{
    const wbase='https://dataservice.accuweather.com/currentconditions/v1/';
    const wquery=`${id}?apikey=${key}`;
    const weatherreponse =await fetch(wbase + wquery);
    const weatherdata= await weatherreponse.json();
    return weatherdata[0];
};



//get city information
const getCity = async (city) =>{
    const base='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query =`?apikey=${key}&q=${city}`;

    const reponse= await fetch(base + query);
    const data =await reponse.json();

    return data[0];
};


// getCity('pune')
//     .then(
//         data=>{
//             return getWeather(data.Key);
//         })
//         .then(weatherdata=>{
//         console.log(weatherdata);
//     })
//     .catch(err=>console.log('city not found'));

