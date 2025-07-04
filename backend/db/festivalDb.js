import mongoose from 'mongoose';

const festivalConnection = mongoose.createConnection(
  "mongodb+srv://Shivani_31:Shivani_31@festivals-db.mkmxecf.mongodb.net/travel_db?retryWrites=true&w=majority&appName=Festivals-db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

festivalConnection.on('connected', () => {
  console.log('✅ Connected to Shivani DB');
});

festivalConnection.on('error', (err) => {
  console.error('❌ Error connecting to Shivani DB:', err);
});

export default festivalConnection;
