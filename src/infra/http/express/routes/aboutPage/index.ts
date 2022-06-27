import { Router } from 'express'
import { CreateAboutPageUseCase } from '../../../../../application/create-about-page.use-case';
import { AboutPageMemoryRepository } from '../../../../db/about-page-memory.repository';
import { Request, Response } from "express";

const aboutPageRoute = Router()

const aboutPageRepository = new AboutPageMemoryRepository();

aboutPageRoute.post("/about", async (req: Request, res: Response) => {
  const createUseCase = new CreateAboutPageUseCase(aboutPageRepository);
  const output = await createUseCase.execute(req.body);

  res.status(201).json(output);
});


export default aboutPageRoute
