import express from "express";
import { nextApp, nextHandler } from "./next";
import { getPayloadClient } from "./payload";

const app = express();
const PORT = Number(process.env.PORT);

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((request, response) => nextHandler(request, response));

  nextApp.prepare().then(() => {
    app.listen(PORT);
  });
};

start();
