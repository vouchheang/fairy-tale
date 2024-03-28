
//data get from api

function DataApi () {
  fetch ("https://fairy-tale-api-inky.vercel.app/api/fairytales")

  .then ((response) => {
    return response.json();
  })

  .then((data) => {
  
    console.log(data);

  })

  .catch((error) => {
    console.error('error:',error);
  })
}

  
DataApi();
  





