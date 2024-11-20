const { Product, Shop, User } = require("../models");
const imagekit = require("../lib/imagekit");
const productController = require("../controllers/productController");
const ApiError = require("../utils/apiError");

jest.mock("../models");
jest.mock("../lib/imagekit");

describe("Product Controller", () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockReq = {
      body: {},
      params: {},
      user: {},
      files: [],
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createProduct", () => {
    it("should create a new product and return success response", async () => {
      mockReq.body = { name: "Test Product", price: 100, stock: 10, shopId: 1 };
      mockReq.user = { id: 1, role: "Admin" };
      mockReq.files = [
        { originalname: "image.jpg", buffer: Buffer.from("test") },
      ];

      imagekit.upload.mockResolvedValue({ url: "http://image.url" });
      Product.create.mockResolvedValue({
        id: 1,
        name: "Test Product",
        price: 100,
        stock: 10,
        imageUrl: ["http://image.url"],
      });

      await productController.createProduct(mockReq, mockRes, mockNext);

      expect(imagekit.upload).toHaveBeenCalledTimes(1);
      expect(Product.create).toHaveBeenCalledWith({
        name: "Test Product",
        price: 100,
        stock: 10,
        imageUrl: ["http://image.url"],
        userId: 1,
        shopId: 1,
      });
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        data: {
          newProduct: expect.objectContaining({
            name: "Test Product",
            price: 100,
          }),
        },
      });
    });

    it("should return an error if shopId is missing for Admin", async () => {
      mockReq.body = { name: "Test Product", price: 100, stock: 10 };
      mockReq.user = { role: "Admin" };

      await productController.createProduct(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(ApiError));
    });
  });

  describe("findProducts", () => {
    it("should return a paginated list of products", async () => {
      mockReq.query = { page: 1, limit: 5 };
      Product.findAll.mockResolvedValue([{ id: 1, name: "Test Product" }]);
      Product.count.mockResolvedValue(1);

      await productController.findProducts(mockReq, mockRes, mockNext);

      expect(Product.findAll).toHaveBeenCalled();
      expect(Product.count).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        data: expect.objectContaining({
          products: expect.arrayContaining([
            expect.objectContaining({ name: "Test Product" }),
          ]),
        }),
      });
    });
  });

  describe("findProductById", () => {
    it("should return product details for a valid ID", async () => {
      mockReq.params.id = 1;
      mockReq.user = { shopId: 1 };
      Product.findOne.mockResolvedValue({
        id: 1,
        name: "Test Product",
        shopId: 1,
      });

      await productController.findProductById(mockReq, mockRes, mockNext);

      expect(Product.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        data: { product: expect.objectContaining({ name: "Test Product" }) },
      });
    });

    it("should return 404 if product is not found", async () => {
      mockReq.params.id = 999;
      Product.findOne.mockResolvedValue(null);

      await productController.findProductById(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(ApiError));
    });
  });

  describe("UpdateProduct", () => {
    it("should update a product and return success response", async () => {
      mockReq.params.id = 1;
      mockReq.body = { name: "Updated Product", price: 200, stock: 20 };
      mockReq.user = { id: 1, role: "Admin" };
      Product.update.mockResolvedValue([1]);

      await productController.UpdateProduct(mockReq, mockRes, mockNext);

      expect(Product.update).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Updated Product",
          price: 200,
          stock: 20,
        }),
        { where: { id: 1 } }
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        message: "Success update product",
      });
    });
  });

  describe("deleteProduct", () => {
    it("should delete a product and return success response", async () => {
      mockReq.params.id = 1;
      Product.destroy.mockResolvedValue(1);

      await productController.deleteProduct(mockReq, mockRes, mockNext);

      expect(Product.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        message: "Success delete product",
      });
    });

    it("should return error if product does not exist", async () => {
      mockReq.params.id = 999;
      Product.destroy.mockResolvedValue(0);

      await productController.deleteProduct(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(ApiError));
    });
  });
});
