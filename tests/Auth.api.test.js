const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Auth, User } = require("../models");
const authController = require("../controllers/authController");

jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../models");

describe("Auth Controller", () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockReq = { body: {}, headers: {}, user: null };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("register", () => {
    it("should register a new user successfully", async () => {
      mockReq.body = {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        age: 25,
        address: "123 Test Street",
      };
      Auth.findOne.mockResolvedValue(null);
      bcrypt.hashSync.mockReturnValue("hashedpassword");
      User.create.mockResolvedValue({ id: 1, name: "Test User" });
      Auth.create.mockResolvedValue({ id: 1 });

      await authController.register(mockReq, mockRes, mockNext);

      expect(Auth.findOne).toHaveBeenCalledWith({
        where: { email: "test@example.com" },
      });
      expect(bcrypt.hashSync).toHaveBeenCalledWith("password123", 10);
      expect(User.create).toHaveBeenCalledWith({
        name: "Test User",
        address: "123 Test Street",
        age: 25,
        shopId: 1,
      });
      expect(Auth.create).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "hashedpassword",
        userId: 1,
      });
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        data: {
          email: "test@example.com",
          newUser: expect.any(Object),
        },
      });
    });

    it("should return 400 if email already exists", async () => {
      mockReq.body = { email: "test@example.com" };
      Auth.findOne.mockResolvedValue({ id: 1 });

      await authController.register(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "User email already taken",
          statusCode: 400,
        })
      );
    });
  });

  describe("login", () => {
    it("should login successfully and return a token", async () => {
      mockReq.body = { email: "test@example.com", password: "password123" };
      Auth.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "hashedpassword",
        User: { id: 1, name: "Test User", role: "Admin" },
      });
      bcrypt.compareSync.mockReturnValue(true);
      jwt.sign.mockReturnValue("testtoken");

      await authController.login(mockReq, mockRes, mockNext);

      expect(Auth.findOne).toHaveBeenCalledWith({
        where: { email: "test@example.com" },
        include: ["User"],
      });
      expect(bcrypt.compareSync).toHaveBeenCalledWith(
        "password123",
        "hashedpassword"
      );
      expect(jwt.sign).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          username: "Test User",
          role: "Admin",
          email: "test@example.com",
        }),
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRED }
      );
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        message: "Success login",
        data: "testtoken",
      });
    });

    it("should return 400 if password is incorrect or user doesn't exist", async () => {
      mockReq.body = { email: "test@example.com", password: "wrongpassword" };
      Auth.findOne.mockResolvedValue(null);

      await authController.login(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({
          message: "wrong password atau user doesn't exist",
          statusCode: 400,
        })
      );
    });
  });

  describe("authenticate", () => {
    it("should return the authenticated user", async () => {
      mockReq.user = { id: 1, name: "Test User" };

      await authController.authenticate(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({
        status: "Success",
        data: {
          user: { id: 1, name: "Test User" },
        },
      });
    });
  });
});
