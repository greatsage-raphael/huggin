const express = require('express')
const app = express()
const url = require('url');

const store = {}


// respond with "hello world" when a GET request is made to the homepage
app.get('/set', (req, res) => {
    const setParsedUrl = url.parse(req.url, true).query;
    for(key in setParsedUrl){
    	store[key] = setParsedUrl[key];
        res.send(store)
    }
  })


  app.get('/get', (req, res) => {
    const getParsedUrl = url.parse(req.url, true).query; //{ key: someKey}
    const response = {};

	for(key in getParsedUrl){
		if(getParsedUrl[key] in store){
			response[getParsedUrl[key]] = store[getParsedUrl[key]];
        }
        const json = JSON.stringify(response[getParsedUrl[key]]);
        res.send(json)
	}

  })



app.listen(7007);