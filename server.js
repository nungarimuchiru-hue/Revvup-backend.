const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, mileage: 15000, status: 'Available', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000, mileage: 18000, status: 'Available', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800' },
  { id: 3, make: 'Tesla', model: 'Model 3', year: 2023, price: 38000, mileage: 8000, status: 'Available', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800' }
];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (!car) return res.status(404).json({ message: 'Car not found' });
  res.json(car);
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ message: 'Login successful', token: 'mock-jwt-token-12345' });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    res.json({ message: 'User registered successfully' });
  } else {
    res.status(400).json({ message: 'Please fill out all fields' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

