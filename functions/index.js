const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51I5fj1Af7QGlqNWP6ughnglFP2u5QPCOu2EKjrZwiivbwac1DtOjvUXugGuYmQ573csRa5K4VnQZDazvPF6OsIB600SnH7C4cH'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => {
    response.status(200).send('Hello World');
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen
exports.api = functions.https.onRequest(app);
