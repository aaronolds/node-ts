import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('hello world');
  });

  app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}/`);
  });

export default app;