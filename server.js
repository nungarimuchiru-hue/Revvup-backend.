const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Car inventory
const cars = [
  // --- BMW ---
 { 
    id: '1', make: 'BMW', model: 'X5', year: 2023, price: 8500000, mileage: 12000, 
    fuelType: 'Diesel', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
    description: 'A luxurious midsize SUV powered by a responsive 3.0L V6 diesel engine, offering cutting-edge technology and supreme comfort.'
  },
  { 
    id: '2', make: 'BMW', model: 'M4 Competition', year: 2024, price: 14000000, mileage: 3000, 
    fuelType: 'Petrol', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=500',
    description: 'A high-performance sports coupe powered by a roaring twin-turbo 3.0L V8-class petrol engine built for track-inspired thrills.'
  },
  { 
    id: '3', make: 'BMW', model: '330i', year: 2022, price: 5200000, mileage: 18000, 
    fuelType: 'Petrol', engineSize: '2.0L',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500',
    description: 'The benchmark luxury sports sedan driven by an efficient turbocharged 2.0L petrol engine with agile handling.'
  },
  { 
    id: '4', make: 'BMW', model: 'i4 Electric', year: 2023, price: 9500000, mileage: 5000, 
    fuelType: 'Electric', engineSize: 'Electric',
    image: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=500',
    description: 'An all-electric gran coupe combining instant torque, zero emissions, and signature BMW dynamics.'
  },
  { 
    id: '30', make: 'BMW', model: '740i', year: 2023, price: 13500000, mileage: 4500, 
    fuelType: 'Petrol', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
    description: 'The pinnacle of executive luxury featuring a whisper-quiet 3.0L petrol engine and executive lounge seating.'
  },

  // --- Toyota ---
  { 
    id: '5', make: 'Toyota', model: 'Camry', year: 2022, price: 3800000, mileage: 15000, 
    fuelType: 'Petrol', engineSize: '2.5L',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
    description: 'A dependable midsize sedan equipped with a reliable 2.5L petrol engine known for fantastic fuel economy and durability.'
  },
  { 
    id: '6', make: 'Toyota', model: 'RAV4', year: 2023, price: 4500000, mileage: 10000, 
    fuelType: 'Petrol', engineSize: '2.5L',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500',
    description: 'A versatile compact SUV powered by a smooth 2.5L petrol engine, ready for weekend outdoor adventures.'
  },
  { 
    id: '7', make: 'Toyota', model: 'Supra', year: 2023, price: 11000000, mileage: 4000, 
    fuelType: 'Petrol', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1633158829581-b91c0f53419b?w=500',
    description: 'An iconic sports car featuring a high-output twin-turbo 3.0L petrol engine and head-turning aerodynamic design.'
  },
  { 
    id: '8', make: 'Toyota', model: 'Corolla', year: 2021, price: 2600000, mileage: 22000, 
    fuelType: 'Petrol', engineSize: '1.8L',
    image: 'https://images.unsplash.com/photo-1593055446074-b421a48a16fb?w=500',
    description: 'An ultra-reliable compact car powered by an economic 1.8L petrol engine that offers modern safety tech.'
  },

  // --- Mercedes ---
  { 
    id: '9', make: 'Mercedes', model: 'C-Class', year: 2023, price: 5500000, mileage: 8000, 
    fuelType: 'Petrol', engineSize: '2.0L',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500',
    description: 'A sophisticated luxury sedan driven by a refined 2.0L petrol engine with ambient lighting and a smooth ride quality.'
  },
  { 
    id: '10', make: 'Mercedes', model: 'GLC SUV', year: 2022, price: 7200000, mileage: 14000, 
    fuelType: 'Diesel', engineSize: '2.0L',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500',
    description: 'A premium luxury crossover featuring a powerful 2.0L diesel engine, plush seating, and ample cargo room.'
  },
  { 
    id: '11', make: 'Mercedes', model: 'AMG GT', year: 2024, price: 28000000, mileage: 1200, 
    fuelType: 'Petrol', engineSize: '4.0L',
    image: 'https://images.unsplash.com/photo-1618843479313-7fdefcbf8dc9?w=500',
    description: 'A handcrafted supercar powered by a monstrous 4.0L V8 petrol engine wrapped in breathtaking styling with a thunderous exhaust note.'
  },

  // --- Nissan ---
  { 
    id: '12', make: 'Nissan', model: 'Altima', year: 2021, price: 3200000, mileage: 25000, 
    fuelType: 'Petrol', engineSize: '2.5L',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500',
    description: 'A comfortable family sedan driven by a smooth 2.5L petrol engine featuring zero-gravity seats and intuitive tech.'
  },
  { 
    id: '13', make: 'Nissan', model: 'GT-R R35', year: 2023, price: 18500000, mileage: 6000, 
    fuelType: 'Petrol', engineSize: '3.8L',
    image: 'https://images.unsplash.com/photo-1607853585997-e17fab004422?w=500',
    description: 'The legendary "Godzilla" supercar equipped with a twin-turbo 3.8L V6 petrol engine and all-wheel-drive grip.'
  },
  { 
    id: '14', make: 'Nissan', model: 'Rogue', year: 2022, price: 4200000, mileage: 19000, 
    fuelType: 'Petrol', engineSize: '2.5L',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500',
    description: 'A family-friendly crossover powered by a dependable 2.5L petrol engine built with flexible cargo storage.'
  },
  { 
    id: '15', make: 'Nissan', model: 'Z Coupe', year: 2023, price: 9000000, mileage: 4500, 
    fuelType: 'Petrol', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1617702033081-2c70176b92a2?w=500',
    description: 'A retro-modern sports car offering a twin-turbo 3.0L petrol engine, rear-wheel-drive agility, and pure driving fun.'
  },

  // --- Porsche ---
  { 
    id: '16', make: 'Porsche', model: '911', year: 2024, price: 26000000, mileage: 1500, 
    fuelType: 'Petrol', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500',
    description: 'The iconic rear-engine sports car powered by a precision-engineered 3.0L twin-turbo petrol engine for elite track performance.'
  },
  { 
    id: '17', make: 'Porsche', model: 'Macan', year: 2023, price: 9800000, mileage: 9000, 
    fuelType: 'Petrol', engineSize: '2.9L',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500',
    description: 'A sports car disguised as a compact luxury SUV, driven by an athletic 2.9L petrol engine.'
  },
  { 
    id: '18', make: 'Porsche', model: 'Cayenne', year: 2022, price: 12500000, mileage: 20000, 
    fuelType: 'Petrol', engineSize: '4.0L',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500',
    description: 'A high-end luxury performance SUV offering a robust 4.0L V8 petrol engine option and exquisite cabin craftsmanship.'
  },

  // --- Audi ---
  { 
    id: '19', make: 'Audi', model: 'A4', year: 2022, price: 4800000, mileage: 10000, 
    fuelType: 'Petrol', engineSize: '2.0L',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500',
    description: 'A sophisticated luxury sedan featuring a responsive 2.0L petrol engine and legendary Quattro all-wheel drive.'
  },
  { 
    id: '20', make: 'Audi', model: 'RS3', year: 2023, price: 9200000, mileage: 7500, 
    fuelType: 'Petrol', engineSize: '2.5L',
    image: 'https://images.unsplash.com/photo-1541348263662-e052662afda3?w=500',
    description: 'A compact powerhouse featuring a turbocharged 2.5L 5-cylinder petrol engine, aggressive styling, and exceptional cornering grip.'
  },
  { 
    id: '21', make: 'Audi', model: 'Q7', year: 2023, price: 10500000, mileage: 11000, 
    fuelType: 'Diesel', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500',
    description: 'A spacious three-row luxury SUV driven by a powerful 3.0L V6 diesel engine with top-tier tech and safety features.'
  },
  { 
    id: '22', make: 'Audi', model: 'TT Roadster', year: 2021, price: 6500000, mileage: 16000, 
    fuelType: 'Petrol', engineSize: '2.0L',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=500',
    description: 'An open-top sports roadster offering a nimble 2.0L petrol engine and wind-in-your-hair freedom.'
  },

  // --- Honda ---
  { 
    id: '23', make: 'Honda', model: 'Civic', year: 2023, price: 3100000, mileage: 5000, 
    fuelType: 'Petrol', engineSize: '1.5L',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500',
    description: 'A stylish compact car powered by an efficient 1.5L turbocharged petrol engine featuring a modern interior.'
  },
  { 
    id: '24', make: 'Honda', model: 'Accord', year: 2022, price: 3600000, mileage: 14000, 
    fuelType: 'Petrol', engineSize: '2.0L',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=500',
    description: 'A spacious midsize sedan driven by a dependable 2.0L petrol engine celebrated for passenger comfort and reliability.'
  },
  { 
    id: '25', make: 'Honda', model: 'CR-V', year: 2023, price: 4000000, mileage: 8500, 
    fuelType: 'Petrol', engineSize: '1.5L',
    image: 'https://images.unsplash.com/photo-1568844276982-3e5f0d367462?w=500',
    description: 'A practical compact SUV featuring a reliable 1.5L petrol engine with generous cargo room.'
  },

  // --- Ford ---
  { 
    id: '26', make: 'Ford', model: 'Mustang', year: 2022, price: 7500000, mileage: 11000, 
    fuelType: 'Petrol', engineSize: '5.0L',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500',
    description: 'An American muscle car legend powered by a thunderous 5.0L V8 petrol engine delivering raw rear-wheel-drive power.'
  },
  { 
    id: '27', make: 'Ford', model: 'F-150', year: 2023, price: 9500000, mileage: 15000, 
    fuelType: 'Petrol', engineSize: '3.5L',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500',
    description: 'America’s best-selling full-size pickup truck, built tough with a heavy-duty 3.5L EcoBoost petrol engine for extreme towing.'
  },
  { 
    id: '28', make: 'Ford', model: 'Explorer', year: 2022, price: 6800000, mileage: 21000, 
    fuelType: 'Petrol', engineSize: '3.0L',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500',
    description: 'A versatile family SUV equipped with a sturdy 3.0L petrol engine and robust towing capability.'
  },
  { 
    id: '29', make: 'Ford', model: 'Bronco', year: 2023, price: 8200000, mileage: 9000, 
    fuelType: 'Petrol', engineSize: '2.7L',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500',
    description: 'An adventure-ready 4x4 off-road SUV featuring a high-torque 2.7L petrol engine designed to conquer rough terrain.'
  }
];
// API Endpoints
app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === req.params.id);
  if (!car) return res.status(404).json({ error: 'Car not found'});
  res.json(car);
});

app.post('/api/test-drives', (req, res) => {
  const booking = req.body;
  console.log('Test drive booked:', booking);
  res.status(201).json({ message: 'Test drive booked successfully', booking});
});

const PORT = Process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Backened server running on http://localhost:${PORT}');
});