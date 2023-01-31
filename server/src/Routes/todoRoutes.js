import express from "express";
import { body } from "express-validator";
import { addTodoController } from "../Controller/addTodoController.js";
import { deleteTodoController } from "../Controller/deleteTodoController.js";
import { updateTodoController } from "../Controller/updateTodoController.js";
import { getTodoController } from "../Controller/getTodoController.js";

const router = express.Router();

const validation = [
  body("title", "Title must be longer than 5 and less than 25").isLength({
    min: 5,
    max: 25,
  }),
  body(
    "description",
    "Description must be longer than 5 and less than 140"
  ).isLength({
    min: 5,
    max: 140,
  }),
  body("priority", "Priority must be longer than 3 and less than 10").isLength({
    min: 3,
    max: 10,
  }),
];
// Route: 1
// POST: add todo item and validate with express-validator
router.post(
  "/todo",
  validation,
  addTodoController
);

// Route: 2
// DELETE: delete an todo item with certain id
router.delete("/todo/:id", deleteTodoController);

// Route: 3
// PUT: update todo item details
router.put(
  "/todo/:id",
  validation,
  updateTodoController
);

// Route: 4
// GET: show all todo items available
router.get("/todo", getTodoController);

export default router;
