import request from "supertest";
import app from "../../app";

describe('Menu', () => {
  it('should get menu', async () => {
    const publicLinks = [
      { menu_item_id: 1, menu_id: 1, label: "Sobre", to: "app/about" },
      { menu_item_id: 2, menu_id: 1, label: "Habilidades", to: "app/skills" },
      { menu_item_id: 3, menu_id: 1, label: "Projetos", to: "app/projects" },
      { menu_item_id: 4, menu_id: 1, label: "Contatos", to: "app/contact" }
    ]
    const socialLinks = {
      social_id: 1,
      linkedin: "mckatoo-linkedin",
      github: "mckatoo-github",
      youtube: "mckatoo-youtube",
      user_id: 1
    }

    const response = await request(app).get("/menu/public").send()

    expect(response.body).toHaveProperty('links', publicLinks)
    expect(response.body).toHaveProperty('social', socialLinks)
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
