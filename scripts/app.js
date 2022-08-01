const cityForm=document.querySelector('.change-location')
const card=document.querySelector('.card');
const details=document.querySelector('.details')
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');


const updateUI =  (data) =>{
    const cityInfo =data.cityInfo;
    const weather=data.weather;

    //update details template
    //console.log(cityInfo,weather);
    details.innerHTML=`
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;


    //update day/night icon images
    const iconSrc=`img/icons/${weather.WeatherIcon}.svg`;
    
    icon.setAttribute('src',iconSrc);


    //update day night icon images

    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc='img/day.svg';
    }
    else{
        timeSrc='img/night.svg';
    }

    time.setAttribute('src',timeSrc);


    //remove the d-none dlass if present

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
}

const updateCity = async(city)=>{
    // console.log(city);

    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key);

    return {
        cityInfo,
        weather
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
        .then(data => updateUI(data))
        .catch(err=>console.log(err));
})