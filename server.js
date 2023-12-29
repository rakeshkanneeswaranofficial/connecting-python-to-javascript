const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

// GET request
app.get('/getrequest', (req, res) => {
    res.json({
        msg: "You have successfully accessed the GET request",
        arrayofnumber: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }).status(200);
});

// POST request
app.post('/postrequest', (req, res) => {
    const requestData = req.body;
    console.log("POST Request Data:", requestData);
    
    // Process the data as needed

    res.json({
        msg: "You have successfully accessed the POST request",
        receivedData: requestData
    }).status(200);
});

// DELETE request
app.delete('/deleterequest', (req, res) => {
    // Perform deletion logic

    res.json({
        msg: "You have successfully accessed the DELETE request"
    }).status(200);
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
