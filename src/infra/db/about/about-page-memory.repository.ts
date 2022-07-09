import { AboutPage } from "../../../domain/about/about-page.entity";
import { AboutPageRepositoryInterface } from "../../../domain/about/about-page.repository";

export class AboutPageMemoryRepository implements AboutPageRepositoryInterface {
  items: AboutPage[] = [];

  async insert(aboutPage: AboutPage): Promise<void> {
    this.items.push(aboutPage);
  }
}
