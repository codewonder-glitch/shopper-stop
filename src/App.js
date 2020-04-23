import React from 'react';
import './App.css';
import axios from 'axios'
import Trending from './components/Trending'

function App() {

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
axios.get("https://community-etsy.p.rapidapi.com/listings/trending?api_key=68k3wa84d1gbn8t4zzh3yikl", {
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
  return (
    <div className="App">
      

      <Trending/>

    </div>
  );
}

export default App;
