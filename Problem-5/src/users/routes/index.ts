/** @format */

import { Router, Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../services";
import { IUser } from "../schema";

const router = Router();

// GET all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a single user by ID
router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

// POST create a new user
router.post("/", async (req: Request, res: Response) => {
  const newUser: IUser = req.body;
  try {
    const createdUser = await createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT update an existing user
router.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const updatedUser = await updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).send(error);
  }
});

// DELETE a user
router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deletedUser = await deleteUser(id);
    res.status(200).send("Delete user succeeded");
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;
