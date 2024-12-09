import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUserLists,
  updateUser,
} from "../controllers/user.controller";

export const userRoute = Router();

userRoute.get("/users", getUserLists);
userRoute.get("/users/:id", getUserById);
userRoute.post("/users", createUser);
userRoute.put("/users/:id", updateUser);
userRoute.delete("/users/:id", deleteUser);
