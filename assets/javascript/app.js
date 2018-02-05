// AjaxTypeAheadwithFetch
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

//-------------------------------------------------------------------------------------------
// when type into class search-form
// run function that take the mass of array
// filter it to subset and listen for it

// function findMatches with parameter wordToMatch and cities from the array to pass into the data
// return the cities array and filter it down to a subset array which each place
// here we need to figure out if the city ot state matches what was searched
 	// need to use regex because of variable to use in match reiere regular expression
 	// regular expression created outside eith regex
 	// g stand for gloabal and i for insensitive match lower or uppcase regaqrdless
 	// now call regex in match city and state

function findMatches(wordToMatch, cities) {
	return cities.filter(place => {
		// here we need to figure out if the city ot state matches what was searched
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex)
	});
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// create a display function
// if called when values are change in the form

// this to test and select the input
function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	// console.log(matchArray);
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi')
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span class='name'>${cityName}, ${stateName}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join('')
	suggestions.innerHTML = html;
}

// select the input 

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
// listen for the change event and keyup and run displayMatches

// return to displayMactches and use findMatches
// variable matchArray that passed in this value and cities array

// once we get data and return, need to loopover matchArray
// form each we return
// once map over the array 
// from each of those return backticks list item
// once map over the array, call suggestions.innerHTML = html
// map will return an array so we add .join(' ') to return string

// Format numbers and highlight the matchs
// create regex to match city name use that regex to place the word it matches
// and span class of hl that it matches and value it search for

