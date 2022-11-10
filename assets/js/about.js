let card = document.querySelector("#card_row");

fetch(`https://api.tvmaze.com/shows/` + location.search.slice(1)).then(result => result.json()).then(data => {
    let id = data.id;
    let image = data.image.medium;
    let name = data.name;
    let genres = data.genres[0];
    for (let i = 1; i < data.genres.length; i++) {
        genres += "--"+data.genres[i];
    }
    let premiered = data.premiered.slice(0,4);

    if (data.ended != null) {
        var ended = data.ended.slice(0,4);
    }

    let time = data.runtime;
    let rating = data.rating.average;
    let language = data.language;
    let summary = data.summary;  //Paragraph ile qaytarir
    let officialSite = data.officialSite;

    let episodeSite = data._links.previousepisode.href;
    

  
    
    
  
  
    
    fetch(`https://api.tvmaze.com/shows/${location.search.slice(1)}/images`).then(result => result.json()).then(data => {
        var links = data.filter(function(x){ return x.type == "background"; });
        bgLink = links[0].resolutions.original.url;
        document.getElementById('sec1').style.backgroundImage="url("+bgLink+")";
    })

    card.innerHTML += `<div class="col-lg-4 col-md-8">
    <div>
        <img src="${image}" alt="">
    </div>
</div>
<div class="col-lg-6 col-md-11 bg-color">
    <h1 class="text-white"></i>${name}</h1>
    <span class="me-5 for-color">${genres}</span>
    <div class="d-flex justify-content-start align-items-center mt-2">
        <span class="me-5 text-white"><i class="fa-solid fa-calendar-days fa-sm me-1 for-color"></i>${premiered}-${ended}</span>
        <span class="me-5 text-white"><i class="fa-solid fa-clock fa-sm me-1 for-color"></i>${time}</span>
        <span class="me-5 text-white"><i class="fa-solid fa-star fa-sm me-1 for-color"></i>${rating}</span>
        <span class="me-5 text-white"><i class="fa-solid fa-language fa-sm me-1 for-color"></i>${language}</span>
    </div>
    <div class="text-white mt-3">
    ${summary}
    </div>
    <div class="d-flex justify-content-between  align-items-center">
        <span class="for-color fs-5" id="season">Season: </span>
        <span><a class="text-decoration-none text-white" href="${officialSite}"><i class="fa-solid fa-globe fa-sm me-1 for-color"></i>Official site </a></span>
    </div>
</div>
`
    fetch(episodeSite).then(result => result.json()).then(function(data){
        let season = data.season;
        document.getElementById("season").textContent="Season: " + season;
    });
    
})


