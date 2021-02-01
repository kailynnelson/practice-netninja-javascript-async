// https://www.youtube.com/watch?v=drK6mdA9d_M&feature=youtu.be&ab_channel=TheNetNinja

// fetch api:
// newer and quicker way to make http requests
// native fetch api built into javascript
// old xml http request required more code
// promise api for handling errors and success messages
// learn callbacks and promises...

// fetch();
// the argument is where you pass in the resource you want to fetch
// endpoint to an api, for example
// or json

// fetch("todos/luigi.json");
// returns a promise
// at some point i will RESOLVE if we have a success
// or REJECT if there's an error

// fetch('todos/luigi.json').then()
// fire .then() when you have a success case AKA when the promise is resolved

// fetch("todos/luigis.json")
// 	.then((response) => {
// 		// resolve
// 		console.log("resolved", response);
// 	})
// 	.catch((err) => {
// 		// reject
// 		console.log("rejected", err);
// 	});
// fire .catch() when you have an error

// the fetch api promise is only ever rejected when we have a NETWORK error
// for example, offline or can't reach the api
// gets RESOLVED, but you can see you get a status 404 not found

// fetch("todos/luigi.json")
// 	.then((response) => {
// 		console.log("resolved", response);
// 		if (response.status == 404) {
// 			console.log("got 404", response.statusText);
// 		}
// 		if (response.status == 200) {
// 			console.log("got 200", response.statusText);
// 		}
// 	})
// 	.catch((err) => {
// 		console.log("rejected", err);
// 	});
// the response object is created for us with the fetch api
// the json() method on the response object gets us the data we need

// fetch("todos/luigi.json")
// 	.then((response) => {
// 		console.log("resolved", response);
// 		console.log("got status ", response.status, response.statusText);
// 		return response.json();
// 	})
// 	.catch((err) => {
// 		console.log("rejected", err);
// 	});
// json() gets the data and parses it for us
// response.json() returns a promise, which takes some time to do
// power of promise chaining: tacking on another 'then' for the json() promise within the resolve

fetch("todos/luigi.json")
	.then((response) => {
		console.log("resolved", response);
		console.log("got status ", response.status, response.statusText);
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log("rejected", err);
	});
// three steps:
// 1. fetch the data
// 2. take the response, and return the response.json()
// 3. take the promise, tack it onto your fetch and fire a function within where we actually have access to the data
