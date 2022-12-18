const http = require('http');

// Create an in-memory store to hold key-value pairs
const store = new Map();

// Create a server that listens on port 4000
const server = http.createServer((req, res) => {
  // Parse the request url to get the key and value from the query string
  const url = new URL(req.url, 'http://localhost:4000');
  //const key = url.searchParams.get('key');
  //const value = url.searchParams.get('value');

  // If the request path is /set and a key and value were provided, store the key-value pair in the store
  if (req.url.startsWith('/set')) {
    store.set(key, value);
    
  }

  // If the request path is /get and a key was provided, get the value for the key from the store
  if (req.url.startsWith('/get') && key) {
    const value = store.get(key);

    // If a value was found, send it as the response
    if (value) {
      res.end(value);
    } else {
      // Otherwise, send a 404 response
      res.statusCode = 404;
      res.end('Key not found');
    }
  }
});

// Start the server listening on port 4000
server.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
});
