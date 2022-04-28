const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const CdegTemp = document.getElementById("CdegTemp");
const temp_status = document.getElementById("temp_status");
const middle_layer = document.querySelector(".middle_layer");

const getInfo = async (e) => {
    e.preventDefault();
    if (cityName.value == ""){
        middle_layer.classList.add("data_hide");
        city_name.innerText = "Please Enter a city name";
        e.preventDefault();
    }else{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=659bed0296b84e15c21f8134c699d6b6`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            CdegTemp.innerHTML = `${arrData[0].main.temp} <sup>o</sup>C`;
            
            let temp_mod = arrData[0].weather[0].main;
            
            temp_status.innerHTML = `<img id="temp_icon" src="https://openweathermap.org/img/wn/${arrData[0].weather[0].icon}@2x.png"></img>`;
            
            middle_layer.classList.remove("data_hide");
            e.preventDefault();
            
            
        } catch (error) {
            middle_layer.classList.add("data_hide");
            city_name.innerText = "Please enter a valid city name"
            e.preventDefault();
        }
    }
}

submitBtn.addEventListener("click", getInfo);
