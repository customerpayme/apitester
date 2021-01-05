const supertest = require("supertest");

let request = supertest("https://staging.api.customerpay.me");

const OtpSendTest = phone_number => {
  request
    .post("/otp/send")
    .send({
      phone_number: phone_number
    })
    .expect(200)
    .expect("Content-Type", "application/json")
    .end((err, result) => {
      if (err)
        console.error("Post Request: /otp/send - Failed ❌ \n" + err.message);
      if (result.statusCode == 200) {
        console.log("Post Request: /otp/send - Passed ✔");
      }
    });
};

const otpVerifyTest = (phone_number, verify) => {
  request
    .post("/otp/verify")
    .send({
      phone_number: phone_number,
      verify: verify
    })
    .expect(200)
    .expect("Content-Type", "application/json")
    .end((err, result) => {
      if (err) {
        console.log("error");

        console.error("Post Request: /otp/verify - Failed ❌ \n" + err.message);
      }
      if (result.statusCode == 200) {
        console.log("Post Request: /otp/verify - Passed ✔");
      }
    });
};

const emailVerifyTest = user_id => {
  request
    .get(`/email/verify/${user_id}`)
    .expect(200)
    .expect("Content-Type", "application/json")
    .end((err, result) => {
      if (err) {
        console.error(
          "Get Request: /email/verify/user_id - Failed ❌ \n" + err.message
        );
      }
      if (result.statusCode == 200) {
        console.log("Get Request: /email/verify/user_id - Passed ✔");
      }
    });
};

module.exports = { OtpSendTest, otpVerifyTest, emailVerifyTest };
