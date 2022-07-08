import { SkillProps, ImageProps, AboutPage } from "../domain/about/about-page.entity";
import { AboutPageRepositoryInterface } from "../domain/about/about-page.repository";

type CreateAboutPageInput = {
  title: string;
  description: string;
  skills?: SkillProps[];
  image?: ImageProps;
};

type CreateAboutPageOutput = {
  title: string;
  description: string;
  skills: SkillProps[];
  image: ImageProps;
};

export class CreateAboutPageUseCase {
  constructor(private aboutPageRepository: AboutPageRepositoryInterface) {}

  async execute(input: CreateAboutPageInput): Promise<CreateAboutPageOutput> {
    const aboutPage = new AboutPage(input);
    await this.aboutPageRepository.insert(aboutPage);

    return aboutPage.toJson();
  }
}
