// Seriallar siyahısı üçün : https://api.tvmaze.com/shows
// Id-ə görə serialın məlumatları üçün : https://api.tvmaze.com/shows/{id}
// Serialın adına görə axtarış üçün : https://api.tvmaze.com/search/shows?q=query




// fetch("https://api.tvmaze.com/shows").then(result => result.json()).then(data => console.log(data.length));

let card = document.querySelector("#cards");


fetch(`https://api.tvmaze.com/shows`).then(result => result.json()).then(data=> {
for (let i = 0; i < data.length; i++) {
        // console.log(data.filter(function(x){ return x.name == "Bitten"; }));
        let id = data[i].id;
        let image = data[i].image.medium;
        let name = data[i].name;
        
        let premiered = data[i].premiered.slice(0,4);

        if (data[i].ended != null) {
            var ended = data[i].ended.slice(0,4);
        }
        let genres = data[i].genres[0];
        let rating = data[i].rating.average;
        let time = data[i].runtime;
        card.innerHTML += `
        <div class="col">
            <div class="card mt-5 bg-dark border-0 ">
                <div class="imgdiv ">
                    <a href="about.html?${id}">
                        <img src="${image}"
                            class="card-img-top rounded-0" alt="img">
                    </a>

                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <a class="text-decoration-none " href="about.html?${id}">
                            <h5 class="card-title d-inline fs-6 text-white namelink">${name}</h5>

                        </a>
                        <span class="date ms-3 pb-1">${premiered}-${ended}</span>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <span class="type d-inline border border-secondary border-2 text-white">${genres}</span>
                        <span class="rating text-white"><i class="fa-solid fa-star fa-sm me-1"></i>${rating}</span>
                        <span class="time text-white"><i class="fa-solid fa-clock fa-sm me-1"></i>${time}</span>
                    </div>

                </div>
            </div>
        </div>

        `
}
})
