const express = require("express");
const router = require('./routes/index.js');
const cors = require('cors');

const app = express();

// Add CORS middleware
app.use(cors());

//body parser
app.use(express.json());

app.use('/api/v1', router);


// starting Express app
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

