const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/cart/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Cart', price: 10 });
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});