import { AboutPage, AboutPageProps } from "./about-page.entity";

describe("Test About Page Test", () => {
  it("constructor", () => {
    let aboutPageData: AboutPageProps = {
      title: "title",
      description: "description",
    };
    let aboutPage = new AboutPage(aboutPageData);
    expect(aboutPage.props).toStrictEqual({
      ...aboutPageData,
      skills: [],
      image: { src: "", alt: "" },
    });

    aboutPageData = {
      ...aboutPageData,
      skills: [
        { name: "skill1", levelPercent: 60 },
        { name: "skill2", levelPercent: 40 },
      ],
      image: { src: "src test", alt: "alt test" },
    };
    aboutPage = new AboutPage(aboutPageData);
    expect(aboutPage.props).toStrictEqual(aboutPageData);
  });

  it("should update title method", () => {
    const aboutPageData: AboutPageProps = {
      title: "title",
      description: "description",
    };
    const aboutPage = new AboutPage(aboutPageData);
    aboutPage.updateTitle("new title");

    expect(aboutPage.title).toBe("new title");
  });

  it("should update skills method", () => {
    const aboutPageData: AboutPageProps = {
      title: "title",
      description: "description",
    };
    const aboutPage = new AboutPage(aboutPageData);
    const skills = [{ name: "skill test", levelPercent: 30 }];
    aboutPage.updateSkills(skills);
    
    expect(aboutPage.skills).toHaveLength(1)
    expect(aboutPage.skills).toStrictEqual(skills);
  });

  it("should update image method", () => {
    const aboutPageData: AboutPageProps = {
      title: "title",
      description: "description",
    };
    const aboutPage = new AboutPage(aboutPageData);
    const image = { src: "src update test", alt: "alt update test" };
    aboutPage.updateImage(image);

    expect(aboutPage.image).toStrictEqual(image);
  });

  it("should update description method", () => {
    const aboutPageData: AboutPageProps = {
      title: "title",
      description: "description",
    };
    const aboutPage = new AboutPage(aboutPageData);
    aboutPage.updateDescription("new description");

    expect(aboutPage.description).toBe("new description");
  });

  // it("constructor without id", () => {
  //   const aboutPageData: AboutPageProps = {
  //     skills: [
  //       {
  //         name: "skill1",
  //         levelPercent: 60,
  //       },
  //       {
  //         name: "skill2",
  //         levelPercent: 40,
  //       },
  //     ],
  //     title: "title",
  //     description: "description",
  //     image: {
  //       src: "src",
  //       alt: "alt",
  //     },
  //   };

  //   const aboutPage = new AboutPage(aboutPageData);

  //   expect(aboutPage.id).toBeDefined();
  // });

  // it("constructor without skills", () => {
  //   const aboutPageData: AboutPageProps = {
  //     id: "1",
  //     title: "title",
  //     description: "description",
  //     image: {
  //       src: "src",
  //       alt: "alt",
  //     },
  //   };

  //   const aboutPage = new AboutPage(aboutPageData);

  //   expect(aboutPage.skills).toEqual([]);
  // });

  // let aboutPageRepository: AboutPageRepository

  // beforeEach(() => {
  //   aboutPageRepository = new AboutPageRepository()
  // })

  // it('Should show default data on about_page table', async () => {
  //   const aboutPage = await aboutPageRepository.getAboutPage()

  //   expect(aboutPage).toEqual({
  //     id: '83ee76b5-c877-4eb1-b919-876d177bcf80',
  //     skills: ['Modelagem de dados', 'Desenvolvimento de aplicações'],
  //     title: 'Olá. Bem vindo❗',
  //     description: '<p>Me chamo Milton Carlos Katoo, moro em Itapira, interior de São Paulo/Brasil. Pai de uma princesa e filho de excelente cozinheira Italiana e um saldoso Japonês faz tudo, sou um desenvolvedor full-stack que ama programação e desenvolvimento de software afim de melhorar a vida das pessoas.</p><p>Pessoa bem organizada, solucionador de problemas, funcionário independente com alta atenção aos detalhes.Fã de animes, mangas, games, séries de TV e filmes. Uma pessoa de família e pai de uma princesa.</p><p>Interessado em todo o espectro de programação e trabalhar em projetos ambiciosos com pessoas positivas.</p><a class="text-mck_aqua underline underline-offset-8" href="https://ikatoo.com.br/contact/" rel="contact"><span>🎉</span>Vamos fazer algo especial.</a><span>😄</span>'
  //   })
  // })

  // it('Should insert new data on about_page table', async () => {
  //   const newData = {
  //     title: 'Title test',
  //     description: 'Describe test',
  //     skills: ['Test', 'Test2']
  //   }

  //   await aboutPageRepository.createAboutPage(newData)
  //   const aboutPage = await aboutPageRepository.getAboutPage()

  //   expect(aboutPage).toHaveProperty('title', 'Title test')
  //   expect(aboutPage).toHaveProperty('description', 'Describe test')
  //   expect(aboutPage).toHaveProperty('skills', ['Test', 'Test2'])
  // })

  // it('Should insert new data with id on about_page table', async () => {
  //   const newData = {
  //     id: randomUUID(),
  //     title: 'Title test',
  //     description: 'Describe test',
  //     skills: ['Test', 'Test2']
  //   }

  //   await aboutPageRepository.createAboutPage(newData)
  //   const aboutPage = await aboutPageRepository.getAboutPage()

  //   expect(aboutPage).toHaveProperty('id', newData.id)
  // })

  // it('Should return an error when informing an existing id', async () => {
  //   const newData = {
  //     id: '83ee76b5-c877-4eb1-b919-876d177bcf80',
  //     title: 'Title test',
  //     description: 'Describe test',
  //     skills: ['Test', 'Test3']
  //   }

  //   await expect(aboutPageRepository.createAboutPage(newData))
  //     .rejects
  //     .toThrowError('The id already exists.')
  // })

  // it('Should delete a existent page', async () => {
  //   aboutPageRepository.deleteAboutPage()
  //   const aboutPage = await aboutPageRepository.getAboutPage()

  //   expect(aboutPage).toBeUndefined()
  // })

  // it('Should update the about page', async () => {
  //   await aboutPageRepository.createAboutPage({
  //     title: 'Title test updated',
  //     description: 'Describe test updated',
  //     skills: ['Test', 'Test4']
  //   })

  //   const aboutPageUpdated = await aboutPageRepository.getAboutPage()

  //   expect(aboutPageUpdated).toHaveProperty('title', 'Title test updated')
  //   expect(aboutPageUpdated).toHaveProperty('description', 'Describe test updated')
  // })
});
