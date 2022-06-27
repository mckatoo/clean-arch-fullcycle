import { Router } from "express"
import aboutPageRoute from "./aboutPage"
import menu from "./menu"

const routes = Router()

routes.use(aboutPageRoute)
routes.use(menu)

export default routes 
