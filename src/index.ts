import makeApp from "./infra/app";

const makeServer = async () => {
  const app = await makeApp();

  app.listen(Number(process.env.PORT) || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
};

makeServer();
