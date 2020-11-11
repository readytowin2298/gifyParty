// const key = 'I7Y2ZVT5RE7B';

$('form').on('submit', async function(e){
    e.preventDefault();
    const gifArea = $('#artBoard');
    const search = document.querySelector('input').value;
    const result = await axios.get(`https://api.tenor.com/v1/search?q=${search}&key=I7Y2ZVT5RE7B&limit=8`);
    const ind = Math.floor(Math.random()*8);
    const img = document.createElement('img');
    const newGif = gifArea.append(img);
    img.src = result.data.results[ind].url;

});

// async function deadAss(){
//     const response = await axios.get('https://api.tenor.com/v1/search?q=excited&key=I7Y2ZVT5RE7B&limit=8');
//     console.log(response);
//     return response
// };