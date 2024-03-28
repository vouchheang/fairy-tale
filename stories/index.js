let paramString = window.location.search;
let urlParam = new URLSearchParams(paramString);
let value = urlParam.get('name');
console.log(value);

// fetch api + pass value from url parameter to url

// 
function fetchData(){
    fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        let card =document.getElementById("container");
        for(let i=0 ; i<data.length;i++) {
            if(data[i].id) {
                card.innerHTML += `
                <div class="card mb-3" style="max-width: 100%;">
            <div class="row g-0">
              <div class="col-md-4">
              <img style="width:200px;" src="${data[i].image}" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                
                  <h5 class="card-title">${data[i].title}</h5>
                  <p class="card-text">${data[i].summary}</p>
                  <p class="card-text"><audio controls>
                  <source src="${data[i].audio}">
                </audio></p>
                </div>
              </div>
            </div>
          </div>
                
                `;
            }
        }
    })
    .then ((error) => {
        console.error('error:',error)
    })
    return fetchData;
};

fetchData();