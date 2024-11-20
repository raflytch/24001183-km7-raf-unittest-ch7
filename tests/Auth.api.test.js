const dotenv = require("dotenv");
dotenv.config();

const request = require("supertest");
const app = require("../server");

// unit testing
// const AuthMiddlewares = require('../middlewares/authenticate')

// before() => run 1x diawal test case, utk semua test case
// beforeEach() => run SETIAP diawal test case, utk semua test case
// after() => run 1x diakhir test case
// afterEach() => run SETIAP diakhir test case, utk semua test case

describe("API LOGIN TEST", () => {
  it("success login", async () => {
    const user = {
      email: "imam123@mail.com",
      password: "Dummy123",
    };
    const response = await request(app).post("/api/v1/auth/login").send(user);
    expect(response.statusCode).toBe(200);
    //   expect(response.body)
  });

  it("failed login", async () => {
    const user = {
      email: "imam21412412@mail.com",
      password: "imam21412412",
    };
    const response = await request(app).post("/api/v1/auth/login").send(user);
    console.log(response.body);
    expect(response.statusCode).toBe(400);
    expect(response.body.status).toBe("Failed");
    expect(response.body.message).toBe(
      "wrong password atau user doesn't exist"
    );
  });
});
