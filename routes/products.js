import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;
