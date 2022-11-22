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

app.use(route);

const options = { customCssUrl: `/public/swagger-ui-custom.css` };

const swaggerDocs = JSON.parse(fs.readFileSync(`${__dirname}/swagger.json`));
// app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));
route.use(
  "/",
  function (req, res, next) {
    swaggerDocs.host = req.get("host");
    req.swaggerDoc = swaggerDocs;
    next();
  },
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, options)
);

app.use("/public/css", express.static("public/css"));

app.listen(4000, () => {
  console.log("Server running in" + 4000);
});
