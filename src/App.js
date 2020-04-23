import React from 'react';
import './App.css';
import axios from 'axios'
import Trending from './components/Trending'


function App() {
  //Featured Listing
  axios.get("https://community-etsy.p.rapidapi.com/featured_treasuries/listings/homepage_current?api_key=68k3wa84d1gbn8t4zzh3yikl", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
	}
})
.then(response => {
	console.log(response.data);
})
.catch(err => {
	console.log(err);
});

const imgs=

[
    "./Assets/bamboopin.jpg",
    "./Assets/Blouse3.jpg",
    "./Assets/screw3.jpg",
    "./Assets/Earing11.jpg",
    "./Assets/girl5.jpg",
    "./Assets/goldstud10.jpg",
"./Assets/HairTie.jpg",
"./Assets/Rng7.jpg",
"./Assets/Skirt6.jpg"

]

  //active Listing

//   axios.get("https://community-etsy.p.rapidapi.com/listings/active?api_key=68k3wa84d1gbn8t4zzh3yikl", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
// 		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
// 	}
// })
// .then(response => {
// 	console.log(response.data);
// })
// .catch(err => {
// 	console.log(err);
// });
// axios.get("https://community-etsy.p.rapidapi.com/listings/trending?api_key=68k3wa84d1gbn8t4zzh3yikl", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
// 		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
// 	}
// })
// .then(response => {
// 	console.log(response.data);
// })
// .catch(err => {
// 	console.log(err);
// });

//Get Interesting listing
// fetch("https://community-etsy.p.rapidapi.com/listings/interesting?api_key=68k3wa84d1gbn8t4zzh3yikl", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
// 		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
  return (
    <div className="App">
      

      <Trending/>

    </div>
  );
}

export default App;
