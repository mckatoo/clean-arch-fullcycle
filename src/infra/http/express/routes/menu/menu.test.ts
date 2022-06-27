import request from "supertest";
import app from "../../app";

describe('Menu', () => {
  it('should get public menu', async () => {
    const publicLinks = [
      { label: "Sobre", to: "about" },
      { label: "Habilidades", to: "skills" },
      { label: "Projetos", to: "projects" },
      { label: "Contatos", to: "contact" },
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
