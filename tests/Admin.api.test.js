const { Product } = require("../models");
const imagekit = require("../lib/imagekit");
const adminController = require("../controllers/adminController");

jest.mock("../models");
jest.mock("../lib/imagekit");

describe("Admin Controller", () => {
  let mockReq, mockRes;

  beforeEach(() => {
    mockReq = {
      body: {},
      file: null,
      params: {},
    };

    mockRes = {
      render: jest.fn(),
      redirect: jest.fn(),
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createPage", () => {
    it("should render the create page", async () => {
      await adminController.createPage(mockReq, mockRes);

      expect(mockRes.render).toHaveBeenCalledWith("create.ejs");
    });
  });

  describe("createProduct", () => {
    it("should create a product and redirect to admin dashboard", async () => {
      mockReq.body = { name: "Test Product", price: 100, stock: 10 };
      mockReq.file = { originalname: "image.jpg", buffer: Buffer.from("test") };

      imagekit.upload.mockResolvedValue({ url: "http://image.url" });
      Product.create.mockResolvedValue({
        id: 1,
        name: "Test Product",
        price: 100,
        stock: 10,
        imageUrl: "http://image.url",
      });

      await adminController.createProduct(mockReq, mockRes);

      expect(imagekit.upload).toHaveBeenCalledWith({
        file: mockReq.file.buffer,
        fileName: expect.stringMatching(/^IMG-\d+\.\w+$/),
      });
      expect(Product.create).toHaveBeenCalledWith({
        name: "Test Product",
        price: 100,
        stock: 10,
        imageUrl: "http://image.url",
      });
      expect(mockRes.redirect).toHaveBeenCalledWith("/dashboard/admin");
    });

    it("should return a 400 error if image upload fails", async () => {
      mockReq.body = { name: "Test Product", price: 100, stock: 10 };
      mockReq.file = { originalname: "image.jpg", buffer: Buffer.from("test") };

      imagekit.upload.mockRejectedValue(new Error("Image upload failed"));

      await adminController.createProduct(mockReq, mockRes);

      expect(imagekit.upload).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Failed",
        message: "Image upload failed",
      });
    });
  });

  describe("findProducts", () => {
    it("should render the index page with a list of products", async () => {
      Product.findAll.mockResolvedValue([
        { id: 1, name: "Product A", price: 100, stock: 10 },
        { id: 2, name: "Product B", price: 200, stock: 20 },
      ]);

      await adminController.findProducts(mockReq, mockRes);

      expect(Product.findAll).toHaveBeenCalled();
      expect(mockRes.render).toHaveBeenCalledWith("index.ejs", {
        products: expect.arrayContaining([
          expect.objectContaining({ name: "Product A" }),
          expect.objectContaining({ name: "Product B" }),
        ]),
      });
    });

    it("should return a 400 error if product retrieval fails", async () => {
      Product.findAll.mockRejectedValue(new Error("Database error"));

      await adminController.findProducts(mockReq, mockRes);

      expect(Product.findAll).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Failed",
        message: "Database error",
      });
    });
  });
});
