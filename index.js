const express = require("express");
const router = require("./routes/usersRouter");
const dbCon = require("./config/dbCon");
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger/swagger.yaml");

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

app.use("/users", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const startServer = async () => {
  try {
    await dbCon();
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT} 🚀`);
    });
  } catch (error) {
    console.error("Error connecting to the database: ❌ ", error);
    process.exit(1);
  }
};

startServer();
