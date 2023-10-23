import 'dotenv/config'
import express, { Request, Response } from 'express';
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  res.status(200).json({
    username: 'hectorC99',
    email: 'hectorcampbell99@gmail.com',
    isAdmin: true
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});