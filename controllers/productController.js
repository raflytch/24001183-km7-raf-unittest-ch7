const { Product, Shop, User } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");
const { Op } = require("sequelize");

const createProduct = async (req, res, next) => {
  const { name, price, stock } = req.body;
  const files = req.files;
  let images = [];

  try {
    if (files) {
      await Promise.all(
        files.map(async (file) => {
          const split = file.originalname.split(".");
          const extension = split[split.length - 1];

          const uploadedImage = await imagekit.upload({
            file: file.buffer,
            fileName: `IMG-${Date.now()}.${extension}`,
          });
          images.push(uploadedImage.url);
        })
      );
    }

    let shopId;
    if (req.user.role === "Admin") {
      if (!req.body.shopId) {
        return next(
          new ApiError(
            "The 'shopId' field is required to create a product. Please provide the 'shopId' in the request body.",
            400
          )
        );
      }
      shopId = req.body.shopId;
    } else {
      shopId = req.user.shopId;
    }

    const newProduct = await Product.create({
      name,
      price,
      stock,
      imageUrl: images,
      userId: req.user.id,
      shopId,
    });

    res.status(200).json({
      status: "Success",
      data: {
        newProduct,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findProducts = async (req, res, next) => {
  try {
    const { productName, username, shop, page, limit } = req.query;
    const condition = {};
    if (productName) condition.name = { [Op.iLike]: `%${productName}%` };

    const includeShopCondition = {};
    if (shop) includeShopCondition.name = { [Op.iLike]: `%${shop}%` };

    const includeUserCondition = {};
    if (username) includeUserCondition.name = { [Op.iLike]: `${username}%` };

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    let whereCondition = condition;

    if (req.user.role === "Admin") {
      whereCondition;
    } else {
      whereCondition = {
        ...condition,
        shopId: req.user.shopId,
      };
    }

    const totalCount = await Product.count({ where: whereCondition });

    const products = await Product.findAll({
      include: [
        {
          model: Shop,
          where: includeShopCondition,
          attributes: ["id", "name"],
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
      where: whereCondition,
      order: [["id", "ASC"]],
      attributes: ["id", "name", "price", "stock", "createdAt", "updatedAt"],
      limit: pageSize,
      offset: offset,
    });

    const totalPages = Math.ceil(totalCount / pageSize);

    res.status(200).json({
      status: "Success",
      data: {
        products,
        pagination: {
          totalData: totalCount,
          totalPages,
          pageNum,
          pageSize,
        },
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findProductById = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      return next(
        new ApiError(`product with this ${req.params.id} is not exist`, 404)
      );
    }

    if (product.shopId !== req.user.shopId) {
      return next(new ApiError("Your shop is not owner of this product", 401));
    }

    res.status(200).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const UpdateProduct = async (req, res, next) => {
  const { name, price, stock } = req.body;
  const files = req.files;
  let images = [];

  try {
    if (files) {
      await Promise.all(
        files.map(async (file) => {
          const split = file.originalname.split(".");
          const extension = split[split.length - 1];

          const uploadedImage = await imagekit.upload({
            file: file.buffer,
            fileName: `IMG-${Date.now()}.${extension}`,
          });
          images.push(uploadedImage.url);
        })
      );
    }

    let shopId;
    if (req.user.role === "Admin") {
      if (!req.body.shopId) {
        return next(
          new ApiError(
            "The 'shopId' field is required to create a product. Please provide the 'shopId' in the request body.",
            400
          )
        );
      }
      shopId = req.body.shopId;
    } else {
      shopId = req.user.shopId;
    }

    await Product.update(
      {
        name,
        price,
        stock,
        imageUrl: images,
        userId: req.user.id,
        shopId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "Success update product",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Product.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Success delete product",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createProduct,
  findProducts,
  findProductById,
  UpdateProduct,
  deleteProduct,
};
