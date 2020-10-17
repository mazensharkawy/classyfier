import bodyParser from "body-parser";
import express from "express";
import next from "next";
import path from "path";
import routes, { IMAGES_BASE } from "./routes";

const BUILD_BASE = path.join(__dirname, "../client/build");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    
    server.use(express.static(IMAGES_BASE, { index: false }));
    server.use(express.static(BUILD_BASE, { index: false }));
    server.use(bodyParser.json());
    server.use("/api", routes);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
