fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(element => {
        let l=element.languages
        let lang=null
        let c=element.currencies
        let cur=null;
        if (typeof l !== 'undefined' && l !== null && typeof c !== 'undefined' && c !== null) {
            lang = Object.values(l);
            cur=Object.keys(c);
        var _current_Card = `
                            <div class="card">
                            <img src="${element.flags.png}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h3 class="card-title">${element.name.official}</h5>
                            <h7 class="card-text">Capital: </h7><span>${element.capital}</span><br>
                            <h7 class="card-text">Region: </h7><span>${element.region}</span><br>
                            <h7 class="card-text">Subregion: </h7><span>${element.subregion}</span><br>
                            <h7 class="card-text">Languages: </h7><span>${lang}</span><br>
                            <h7 class="card-text">Currencies: </h7><span>${cur}</span><br>
                            <h7 class="card-text">Timezones: </h7><span>${element.timezones}</span><br>
                            <a href=${element.maps.googleMaps} target="_blank" class="btn btn-outline-primary">Show map</a>
                            </div>
                            </div>`
                        
                var div = document.createElement('span')
                div.innerHTML = _current_Card;
                document.getElementById('allCountries').appendChild(div);
        }
    });
  });
