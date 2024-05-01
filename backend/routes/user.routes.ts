import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getUsersForSidebar } from "../controllers/user.controller";

const routes = express.Router();

routes.get("/", protectRoute, getUsersForSidebar);

export default routes;
