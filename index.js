let {
  otpVerifyTest,
  OtpSendTest,
  emailVerifyTest
} = require("./Tests/account_activation.test");

//change the arguments to real values

OtpSendTest(phone_number);
otpVerifyTest(phone_number, verify);
emailVerifyTest(user_id);
