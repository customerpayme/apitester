const supertest = require("supertest");
const dotenv = require("dotenv");
//using the dotenv variable
dotenv.config({ path: "./config.env" });

// retrieve the host
const request = supertest("https://staging.api.customerpay.me");

it("test login endpoint", async (done) => {
  const response = await request.post("/login/user").send({
    phone_number: process.env.PHONE_NUMBER,
    password: process.env.PASSWORD,
  });

  expect(response.body.data.statusCode).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("You're logged in successfully.");
  done();
});
