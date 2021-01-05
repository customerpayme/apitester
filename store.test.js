const supertest = require("supertest");
const dotenv = require("dotenv");
//using the dotenv variable
dotenv.config({ path: "./config.env" });

const request = supertest("https://staging.api.customerpay.me");

// POST new Store
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

// GET store endpoints
it("test store endpoint(GET)", async (done) => {
  const response = await request
    .get(`/store/`)
    .set("Accept", "application/json")
    .set("x-access-token", process.env.TOKEN)
    .set("param", process.env.STORE_ID);

  expect(response.body.data.statusCode).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("Here are all your stores");
  done();
});

// UPDATE Store
it("test store endpoint(PUT)", async (done) => {
  const response = await request
    .put(`/store/update/${process.env.STORE_ID}`)
    .set("Accept", "application/json")
    .set("x-access-token", process.env.TOKEN)
    .send({
      store_name: process.env.STORE_NAME,
      shop_address: process.env.SHOP_ADDRESS,
      tagline: process.env.TAGLINE,
      phone_number: process.env.PHONE_NUMBER,
      email: process.env.STORE_EMAIL,
      country: process.env.COUNTRY,
      state: process.env.STATE,
    });

  expect(response.body.data.statusCode).toBe(201);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("Store updated successfully");
  done();
});

// DELETE Store
it("test store endpoint(DELETE)", async (done) => {
  const response = await request
    .delete(`/store/delete/${process.env.STORE_DELETE_ID}`)
    .set("Accept", "application/json")
    .set("x-access-token", process.env.TOKEN);

  expect(response.body.data.statusCode).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("Store deleted successfully");
  done();
});

// POST new bank for store
it("test store/bank endpoint(POST)", async (done) => {
  const response = await request
    .post("/store/bank/")
    .set("Accept", "application/json")
    .set("x-access-token", process.env.TOKEN)
    .send({
      store_id: process.env.STORE_ID,
      account_name: process.env.ACCOUNT_NAME,
      bank: process.env.BANK,
      bank_name: process.env.BANK_NAME,
      account_number: process.env.ACCOUNT_NUMBER,
      country: process.env.COUNTRY,
    });

  expect(response.body.data.statusCode).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("Bank Details updated successfully");
  done();
});

// Update Store bank details
it("test store/bank endpoint(PUT)", async (done) => {
  const response = await request
    .put(`/store/bank/update/${process.env.ACC_ID}`)
    .set("Accept", "application/json")
    .set("x-access-token", process.env.TOKEN)
    .send({
      store_id: process.env.STORE_ID,
      account_name: process.env.ACCOUNT_NAME,
      bank: process.env.BANK,
      account_number: process.env.ACCOUNT_NUMBER,
      country: process.env.COUNTRY,
    });


  expect(response.body.data.statusCode).toBe(200);
  expect(response.body.success).toBe(true);
  expect(response.body.message).toBe("operation successful");
  done();
});
