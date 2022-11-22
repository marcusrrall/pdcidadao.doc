import express from "express";
import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const route = Router();

var options = {
  customCssUrl: `${__dirname}/swagger-ui-custom.css`,
};

const swaggerDocs = JSON.parse(fs.readFileSync(`${__dirname}/swagger.json`));
app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));

route.get("/", (request, response) => {
  return response.json({
    success: "true",
    message: "Sucesso!",
  });
});

app.use(route);

app.listen(4000, () => {
  console.log("Server running in" + 4000);
});
