import { AboutPageMemoryRepository } from "../../infra/db/about/about-page-memory.repository";
import { CreateAboutPageUseCase } from "./create-about-page.use-case";

describe("Create About Page use-case Test", () => {
  it("should create a new about page", async () => {
    const repository = new AboutPageMemoryRepository();
    const createUseCase = new CreateAboutPageUseCase(repository);
    const data = {
      title: "title",
      description: "description",
    };
    expect(repository.items).toHaveLength(0);

    const output = await createUseCase.execute(data);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      ...data,
      image: {
        src: "",
        alt: "",
      },
      skills: [],
    });
    expect(repository.items).toHaveLength(1);
  });
});
