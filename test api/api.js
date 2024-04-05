fetch('https://fairy-tale-api-inky.vercel.app/api/fairytales')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

