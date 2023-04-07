import { AppDataSource } from "./database/data-source";

export default async () => {
  try {
    console.log("Connecting to database...");

    await AppDataSource.initialize();

    console.log("Connection with database established!");
  } catch (error) {
    console.log(error);
  }
};
