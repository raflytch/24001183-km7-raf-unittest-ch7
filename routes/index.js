const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

router.use("/api-docs", swaggerUI.serve);
router.use("/api-docs", swaggerUI.setup(swaggerDocument));

const Product = require("./productRouter");
const Admin = require("./adminRouter");
const Auth = require("./authRouter");

router.use("/api/v1/products", Product);
router.use("/api/v1/auth", Auth);

router.use("/", Admin);

module.exports = router;
