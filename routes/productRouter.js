const router = require("express").Router();
const { Product } = require("../models");

const productController = require("../controllers/productController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkOwnership = require("../middlewares/checkOwnership");
const checkId = require("../middlewares/checkId");

router.post(
  "/",
  autentikasi,
  checkRole(["Admin", "Manager"]),
  upload.array("images"),
  productController.createProduct
);
router.get("/", autentikasi, productController.findProducts);
router.get(
  "/:id",
  autentikasi,
  checkId(Product),
  productController.findProductById
);
router.patch(
  "/:id",
  autentikasi,
  checkId(Product),
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  upload.array("images"),
  productController.UpdateProduct
);
router.delete(
  "/:id",
  autentikasi,
  checkId(Product),
  checkRole(["Admin", "Manager"]),
  checkOwnership,
  productController.deleteProduct
);

module.exports = router;
