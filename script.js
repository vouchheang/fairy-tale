function dataHome () {
  fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
  
  .then ((Response) => {
    return Response.json();
  })
  .then ((data) => {
    let count =1;
    let container =document.querySelector(".card-container");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="0-3") {
        if(count<=3) {
          container.innerHTML += `
      
          <div class="card1">
          <div class="image">
            <img src="${data[i].image}" alt="">
          </div>
          <div class="param">
            <h2>${data[i].title}</h2>
            <p>${data[i].summary}</p>
            <p>${data[i].created_at}</p>

          </div>
        </div>
          `
        }
        count++;
      }
    }

    count=1;
    let container1 =document.querySelector(".card-container1");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="4-6") {
          if(count<=3){
            container1.innerHTML += `
      
          <div class="card1">
          <div class="image">
            <img src="${data[i].image}" alt="">
          </div>
          <div class="param">
          <h2>${data[i].title}</h2>
          <p>${data[i].summary}</p>
          <p>${data[i].created_at}</p>
          </div>
        </div>
          `
          }
          count++;
      }
    }
    count=1;
    let container2 =document.querySelector(".card-container2");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="7-12") {
          if(count<=3){
            container2.innerHTML += `
      
          <div class="card1">
          <div class="image">
            <img src="${data[i].image}" alt="">
          </div>
          <div class="param">
          <h2>${data[i].title}</h2>
          <p>${data[i].summary}</p>
          <p>${data[i].created_at}</p>
          </div>
        </div>
          `
          }
          count++;
      }
    }
  })
  .then ((error) => {
    console.error("error",error);
    return error;
  })
}

dataHome();