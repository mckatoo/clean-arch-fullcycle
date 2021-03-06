import express, { NextFunction, Request, Response } from "express";

import { CreateAboutPageUseCase } from "../../../application/create-about-page.use-case";
import { AboutPageMemoryRepository } from "../../db/about-page-memory.repository";

const app = express();
app.use(express.json());

const aboutPageRepository = new AboutPageMemoryRepository();

app.post("/about", async (req: Request, res: Response) => {
  const createUseCase = new CreateAboutPageUseCase(aboutPageRepository);
  const output = await createUseCase.execute(req.body);

  res.status(201).json(output);
});

// Status
app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("OK");
});

// Error Handling
app.use((error: any, req: Request, res: Response, _: NextFunction) => {
  const httpCode = error.statusCode || error?.response?.status || 500;
  if (error.toJSON) {
    error = error.toJSON();
  }

  return res.status(httpCode).json(error);
});

export default app;
