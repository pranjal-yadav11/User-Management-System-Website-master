const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection string
    const MONGO_URI =
      "mongodb+srv://BobbyKuhikar:thriinone@cluster0.jdtcv.mongodb.net/crud?retryWrites=true&w=majority";
    const con = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
