const ApiError = require("../utils/apiError");
const { Product } = require("../models");

const checkOwnership = async (req, res, next) => {
  if (req.user.role === "Admin") {
    return next();
  }

  const product = await Product.findByPk(req.params.id);

  if (!product || (product.shopId && product.shopId !== req.user.shopId)) {
    return next(new ApiError("You don't have access to this product", 401));
  }

  next();
};

module.exports = checkOwnership;
