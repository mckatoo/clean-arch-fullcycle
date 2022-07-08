import { AboutPage, AboutPageProps } from "../../../domain/about/about-page.entity";
import { AboutPageMemoryRepository } from "./about-page-memory.repository";

describe("AboutPageMemory Repository", () => {
  it("should insert a new about page", async () => {
    const repository = new AboutPageMemoryRepository();
    const aboutPageData: AboutPageProps = {
      title: "title",
      description: "description",
    };
    const aboutPage = new AboutPage(aboutPageData);
    expect(repository.items).toHaveLength(0);

    await repository.insert(aboutPage);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([aboutPage]);
  });
});
