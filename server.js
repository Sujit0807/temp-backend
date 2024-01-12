// PACKAGE IMPORTS
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors"); // Import the cors middleware
const PORT = process.env.PORT || 3000;

// MONGO CONNECTION IMPORT
const connectDB = require("./config/db");

// ROUTE IMPORTS
const userRoutes = require('./routes/userRoutes');

// MIDDLEWARE IMPORTS
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();
// APP INITIALIZE
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: ['http://localhost:3000'] }));

// ROUTES
app.use("/api/users", userRoutes);

// ERROR HANDLER MIDDLEWARE
app.use(errorHandler);

// RUNNING AN APP
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
