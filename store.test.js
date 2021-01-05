const supertest = require("supertest");
const dotenv = require("dotenv");
//using the dotenv variable
dotenv.config({ path: "./config.env" });

const request = supertest("https://staging.api.customerpay.me");

it("test store endpoint(POST)", async (done) => {
  const response = await request
    .post("/store/new")
    .send({
      store_name: process.env.STORE_NAME,
      shop_address: process.env.SHOP_ADDRESS,
      tagline: process.env.TAGLINE,
      phone_number: process.env.PHONE_NUMBER,
      email: process.env.STORE_EMAIL,
      country: process.env.COUNTRY,
      state: process.env.STATE,
    })
    .set("Accept", "application/json")
    .set("x-access-token", process.env.TOKEN);

  expect(response.body.data.statusCode).toBe(201);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("Store added successfully");
  done();
});


// it("test store endpoint(GET)", async (done) => {
//   const response = await request
//     .get(`/store/:store_id=${process.env.STORE_ID}`)
//     .set("Accept", "application/json")
//     .set("x-access-token", process.env.TOKEN);

//   expect(response.body.data.statusCode).toBe(200);
//   expect(response.body.success).toBe(true);
//   expect(response.body.message).toBe("Here are all your stores");
//   done();
// });
