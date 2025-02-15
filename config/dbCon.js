const mongoose = require("mongoose");
require("dotenv").config();

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}
@clusterusers.szfak.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}
`;

const dbCon = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Conectado a la DB  ✅");
  } catch (error) {
    console.log("Error al conectar con la DB:❌", error);
  }
};

module.exports = dbCon;
