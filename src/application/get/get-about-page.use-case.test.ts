import { AboutPageMemoryRepository } from "../../infra/db/about/about-page-memory.repository";
import { CreateAboutPageUseCase } from "../create/create-about-page.use-case";
import { GetAboutPageUseCase } from "./get-about-page.use-case";

describe("Get About Page use-case Test", () => {
  it("should get the about page", async () => {
    const repository = new AboutPageMemoryRepository();
    const createUseCase = new CreateAboutPageUseCase(repository);
    const getUseCase = new GetAboutPageUseCase(repository);
    const data = {
      title: "title",
      description: "description",
    };

    const input = await createUseCase.execute(data);
    const output = await getUseCase.execute();
    expect(output).toStrictEqual(input);
    expect(repository.items).toHaveLength(1);
  });
});
