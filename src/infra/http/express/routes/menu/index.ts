import { Router, Request, Response } from "express"

const menu = Router();

menu.post("/menu", (req: Request, res: Response) => { 
  const {menu} = req.body
  const publicLinks = [
    { label: "Sobre", to: "about" },
    { label: "Habilidades", to: "skills" },
    { label: "Projetos", to: "projects" },
    { label: "Contatos", to: "contact" },
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
  
  res.json({social, links})
})

export default menu
