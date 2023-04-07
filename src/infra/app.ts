import "reflect-metadata";
import express from "express";

import setupDatabase from "./database-connection";
import setupRoutes from "../routes";
import setupMiddlewares from "./middlewares";

const makeApp = async () => {
  const app = express();

  await setupDatabase();
  setupMiddlewares(app);
  setupRoutes(app);

  return app;
};

export default makeApp;
