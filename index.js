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

// var options = {
//   // customCssUrl: `./swagger-ui-custom.css`,
// };

const options = { customCssUrl: `/public/swagger-ui-custom.css` };

const swaggerDocs = JSON.parse(fs.readFileSync(`${__dirname}/swagger.json`));
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs, options));
route.use(
  "/api-docs-ui",
  function (req, res, next) {
    swaggerDocument.host = req.get("host");
    req.swaggerDoc = swaggerDocs;
    next();
  },
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, options)
);

app.use("/public/css", express.static("public/css"));
app.use(route);

app.listen(4000, () => {
  console.log("Server running in" + 4000);
});
