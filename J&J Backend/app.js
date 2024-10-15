require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Use the environment variables from the .env file
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

// Construct the MongoDB connection URL using the variables
const dbUrl = `mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}/?retryWrites=true&w=majority&appName=${dbName}`;

// Connect to MongoDB
mongoose.connect(dbUrl, {})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));


app.use(express.json());


const userRoutes = require('./routes/routes');
app.use('/api', userRoutes); // Prefix your routes with /api


// Handle 404 errors (undefined routes)
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.listen(5020, () => {
    console.log('Server is running on port 3000');
});
