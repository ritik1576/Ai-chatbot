import { Router } from "express";
import { deflate } from "zlib";
import { getAllUser, userSignup } from "../controllers/user-controller";

const userRoutes  = Router();
userRoutes.get("/",getAllUser);
userRoutes.post("/signup", userSignup)
export default  userRoutes