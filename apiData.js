const axios = require('axios');
const url = 'https://akabab.github.io/superhero-api/api/all.json';

let allData = [];

axios.get(url)
.then(response => {
        response.data.forEach(element => {
        allData.push(element);
    });
});



module.exports = allData;