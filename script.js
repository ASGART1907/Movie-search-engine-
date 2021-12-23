let key = "4844f262"

const container = document.querySelector(".container");
const input = document.querySelector("input");
let cardBody = document.querySelector(".card-body");

input.addEventListener("keyup",(e) => {
   
    if(e.key === "Enter"){
        if(input.value !== ""){
           
            getValue(input.value);
            input.value = '';
        }
    }
});



async function getValue(value,page){
    cardBody.innerHTML = "";
    const url = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${value}`);
    
    const result = await url.json();
    getMovie(result);

}

function getMovie(data){
    data.Search.forEach(item => {
            const movieContainer = document.createElement("div");
            movieContainer.classList.add("movie-container");
    
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");
            
            const img = document.createElement("img");
            img.src = `${item.Poster}` === "N/A" ? ("https://www.pendik.bel.tr/data/haber/61a4b2ad3dd3e_ihaleilan1.jpg") : `${item.Poster}`;

            const movieDescription = document.createElement("div");
            movieDescription.classList.add("movie-descriptions");

            const h4 = document.createElement("h4");
            h4.innerHTML = `${item.Title}`;

            const a = document.createElement("a");
            a.innerHTML = "Watch";
            a.href = `${item.imdbID}`;

            const typeYear = document.createElement("strong");
            typeYear.classList.add("type-year");
            typeYear.innerHTML = `${item.Type}/${item.Year}`;

            imgContainer.appendChild(img);
            movieContainer.appendChild(imgContainer);
            movieDescription.appendChild(typeYear);
            movieDescription.appendChild(a);
            movieDescription.appendChild(h4);
            movieContainer.appendChild(movieDescription);
            cardBody.appendChild(movieContainer);
            cardBody.appendChild(movieContainer);
    })
}


