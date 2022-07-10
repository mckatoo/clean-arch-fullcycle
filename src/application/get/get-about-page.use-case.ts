import { SkillProps, ImageProps } from "../../domain/about/about-page.entity";
import { AboutPageRepositoryInterface } from "../../domain/about/about-page.repository";

type GetAboutPageOutput = {
  id: string;
  title: string;
  description: string;
  skills: SkillProps[];
  image: ImageProps;
};

export class GetAboutPageUseCase {
  constructor(private aboutPageRepository: AboutPageRepositoryInterface) {}

  async execute(): Promise<GetAboutPageOutput> {
    const aboutPage = await this.aboutPageRepository.get()

    return aboutPage.toJson();
  }
}
