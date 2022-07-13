import request from "supertest";
import app from "../../app";

describe('Menu', () => {
  it('should get menu', async () => {
    const publicLinks = [
      { label: "Sobre", to: "app/about" },
      { label: "Habilidades", to: "app/skills" },
      { label: "Projetos", to: "app/projects" },
      { label: "Contatos", to: "app/contact" },
    ]
    const response = await request(app).get("/menu/public").send()

    expect(response.body).toHaveProperty('links', publicLinks)
  })

  it('should create menu', async () => {
    const adminLinks = [
      { label: "Dashboard", to: "admin" },
    ]
    const response = await request(app).post("/menu").send({
      menu: adminLinks
    })

    expect(response.status).toBe(201)
  });

})
