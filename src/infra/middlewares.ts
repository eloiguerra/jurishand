import { Express } from "express";
import { bodyParserJson, bodyParserUrlEncoded } from "./middlewares/body-parser";
import { cors } from "./middlewares/cors";
import { security } from "./middlewares/security";

export default (app: Express): void => {
  app.use(cors);
  app.use(bodyParserJson);
  app.use(bodyParserUrlEncoded);
  app.use(security);
};