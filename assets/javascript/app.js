//JSON File contain State Name and population
// fetch the data [array]
// filter data to subset either city name or state name that match

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];


/*
const prom = fetch(endpoint);
console.log(prom)
*/
// fetch returns a promise not data
// something will come back from this fetch

/*
fetch(endpoint).then(blob => console.log(blob));
*/
// fetch(endpoint).then(blob) this also return a promis but with a blob of data
// problem the data that came back from fetch doesn't know what kind of data it is yet

//blob raw data need to be converted to JSON
/*
fetch(endpoint)
   .then(blob => blob.json())
   .then(data => console.log(data));
 */
// return of blob has method that returns JSON
// adding blob.json returns another promise
// .then(data => console.log(data)) will give you the raw data
// console log an array of cities

// need to get each one item into cities array
// cities.push(data)when use push it will put each item into an array
// cities.push(...data) to change to individual argument is to spread into push method
fetch(endpoint)
   .then(blob => blob.json())
   .then(data => cities.push(...data));
