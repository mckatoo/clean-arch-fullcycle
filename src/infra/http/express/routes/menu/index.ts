import { Router, Request, Response } from "express"

const menu = Router();

menu.post("/menu", (req: Request, res: Response) => {
  const { menu } = req.body
  const publicLinks = [
    { label: "Sobre", to: "app/about" },
    { label: "Habilidades", to: "app/skills" },
    { label: "Projetos", to: "app/projects" },
    { label: "Contatos", to: "app/contact" },
  ]

  const adminLinks = [
    { label: "Dashboard", to: "admin" },
  ]

  const social = {
    linkedin: "mckatoo",
    github: "mckatoo",
    youtube: "UCc1e1mclC9o5OnQU87PcU1g",
  }

  const links = (menu === 'public') ? publicLinks : adminLinks

  res.json({ social, links })
})

export default menu
