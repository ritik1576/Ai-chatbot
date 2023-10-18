import exp from "constants";
import { Router } from "express";
import app from "../../dist/app";
import userRoutes from "./user-route";
import chatRoutes from "./chat-route";

const appRouter = Router();
appRouter.use("/user", userRoutes) //domain/api/v1/user
appRouter.use("/chat", chatRoutes)  //domain/api/v1/chat
export default appRouter