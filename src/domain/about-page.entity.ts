export type SkillProps = {
  name: string;
  levelPercent: number;
};

export type ImageProps = {
  src: string;
  alt: string;
};

export type AboutPageProps = {
  skills?: SkillProps[];
  title: string;
  description: string;
  image?: ImageProps;
};

export class AboutPage {
  props: Required<AboutPageProps>;

  constructor(props: AboutPageProps) {
    this.props = {
      ...props,
      skills: props.skills || [],
      image: props.image || { src: "", alt: "" },
    };
  }

  updateSkills(skills: SkillProps[]) {
    this.props.skills = skills;
  }

  updateTitle(title: string) {
    this.props.title = title;
  }

  updateDescription(description: string) {
    this.props.description = description;
  }

  updateImage(image: ImageProps) {
    this.props.image = image;
  }

  get title(): string {
    return this.props.title;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  get description(): string {
    return this.props.description;
  }
  
  private set description(description: string) {
    this.props.description = description;
  }

  get skills(): SkillProps[] {
    return this.props.skills;
  }
  
  private set skills(skills: SkillProps[]) {
    this.props.skills = skills;
  }

  get image(): ImageProps {
    return this.props.image;
  }
  
  private set image(image: ImageProps) {
    this.props.image = image;
  }

  toJson() {
    return this.props;
  }
}
