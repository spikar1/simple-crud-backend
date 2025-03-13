import express from "express";

import {
  createUser,
  getUsers,
  getUserFromId,
  deleteUserById,
  patchUserById,
} from "../controllers/users.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id", getUserFromId);

router.delete("/:id", deleteUserById);

router.patch("/:id", patchUserById);

export default router;
