import express from "express";
import CategoryController from "./controllers/CategoryController.js";
import ProductController from "./controllers/ProductController.js";
import CustomerController from "./controllers/CustomerController.js";
import OrderController from "./controllers/OrderController.js";
import OrderItemController from "./controllers/OrderItemController.js";

const router = express.Router();

router.get("/categories", CategoryController.index);
router.get("/categories/create", CategoryController.create);
router.post("/categories/store", CategoryController.store);

router.get("/products", ProductController.index);
router.get("/products/create", ProductController.create);
router.post("/products/store", ProductController.store);

router.get("/customers", CustomerController.index);
router.get("/customers/create", CustomerController.create);
router.post("/customers/store", CustomerController.store);

router.get("/orders", OrderController.index);
router.get("/orders/create", OrderController.create);
router.post("/orders/store", OrderController.store);

router.get("/order-items", OrderItemController.index);
router.get("/order-items/create", OrderItemController.create);
router.post("/order-items/store", OrderItemController.store);

export default router;