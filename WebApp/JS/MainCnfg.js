

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

//connection string
const mongoURI = '<connection_string>';

// Connect to db
MongoClient.connect(mongoURI, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db('your_database_name');
    const ordersCollection = db.collection('orders');

    //server code here

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });
