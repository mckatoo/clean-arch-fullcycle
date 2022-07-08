import request from "supertest";
import app from "../../app";

describe('Menu', () => {
  it('should get public menu', async () => {
    const publicLinks = [
      { label: "Sobre", to: "app/about" },
      { label: "Habilidades", to: "app/skills" },
      { label: "Projetos", to: "app/projects" },
      { label: "Contatos", to: "app/contact" },
    ]
    const response = await request(app).post("/menu").send({
      menu: 'public'
    })

    expect(response.body).toHaveProperty('links', publicLinks)
  })

  // const adminLinks = [
  //     { label: "Dashboard", to: "admin" },
  //   ]
})
