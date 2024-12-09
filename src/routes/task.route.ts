import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTaskLists,
  updateTask,
} from "../controllers/task.controller";

export const taskRoute = Router();

taskRoute.get("/users", getTaskLists);
taskRoute.get("/users/:id", getTaskById);
taskRoute.post("/users", createTask);
taskRoute.put("/users/:id", updateTask);
taskRoute.delete("/users/:id", deleteTask);
