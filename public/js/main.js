
const getinfo = async () => {
    let cityname = document.getElementById("search").value;
    let day = document.getElementById("day");
    let date = document.getElementById("date");
    let city = document.getElementById("cityname");
    let country = document.getElementById("country")
    let temp = document.getElementById("temp");
    let icon_temp = document.getElementById("icon_temp");

    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=590c959fd7a71a2abe2e8a13ae471a30`;
     if(cityname==""){
        alert("please enter a city name");
     }else{
    const data = await fetch(url);
    const respons = await data.json();
    const arrdata = [respons];
    console.log(arrdata[0].name)
    city.innerHTML = (arrdata[0].name) + " , " + (arrdata[0].sys.country);
    total = `${(arrdata[0].main.temp)}<sup>0</sup>C`;
    temp.innerHTML =total;
    const tempmood = arrdata[0].weather[0].main;

    if (tempmood == "Clear") {
        icon_temp.innerHTML = "<i class='fas fa-sun'></i>";
    }
    else if (tempmood == "Clouds") {
        icon_temp.innerHTML = "<i class='fas fa-cloud' style='color:'blue;'></i>";
    }
    else if (tempmood == "Rain") {
        icon_temp.innerHTML = "<i class='fas fa-rain'></i>";
    }
    else {
        icon_temp.innerHTML = "<i class='fas fa-sun'></i>";
    }
    

     }
    }catch(errors){
        alert("please enter a valid city name");
    }
}


function submitbtn() {
    getinfo();

}




