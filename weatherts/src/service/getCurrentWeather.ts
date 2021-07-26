type keyObj={
    key:string
}

export const fetchWeather=async (e:keyObj,url_base:string,query:string,api_key:string)=>{
    let weatherDetails;
    if(e.key=='Enter'){
      await fetch(`${url_base}weather?q=${query}&units=metric&APPID=${api_key}`)
      .then(res=>{
        weatherDetails= res.json();
      })
    }else{
        weatherDetails={};
    }
    return weatherDetails;
}
