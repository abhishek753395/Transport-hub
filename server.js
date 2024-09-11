const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle Booking
app.post('/book', (req, res) => {
    const { vehicleType, purpose, details } = req.body;
    // Logic to handle booking
    res.redirect(`/payment.html?vehicle-type=${vehicleType}&purpose=${purpose}`);
});

// Handle Payment
app.post('/pay', (req, res) => {
    const { amount, cardNumber, expiry, cvv } = req.body;
    // Handle payment logic here
    res.send('Payment successful!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
