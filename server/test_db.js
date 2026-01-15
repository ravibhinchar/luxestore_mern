require('dotenv').config();
const mongoose = require('mongoose');

console.log("Testing connection to:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log("✅ CONNECTED SUCCESSFULLY!");

        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections in DB:");
        collections.forEach(c => console.log(" - " + c.name));

        const count = await mongoose.connection.db.collection('products').countDocuments();
        console.log(`Product count: ${count}`);

        mongoose.disconnect();
        process.exit(0);
    })
    .catch(err => {
        console.error("❌ FAILED TO CONNECT:", err);
        process.exit(1);
    });
