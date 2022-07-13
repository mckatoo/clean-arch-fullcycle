import app from "../../app";
import request from "supertest";
import { randomUUID } from "crypto";

describe('About Page Data', () => {
  it('should create about page without id', async () => {
    const response = await request(app).post("/about").send({
      title: "title",
      description: "description",
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
  });

  it('should create about page withid', async () => {
    const id = randomUUID()
    const response = await request(app).post("/about").send({
      id,
      title: "title",
      description: "description",
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id", id)
  });
});
