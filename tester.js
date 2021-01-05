const https = require("https");
const assert = require('assert');

const body = JSON.stringify({
    transactionId: "1234qwer98ty"
    
})

let requestOptions = {
    method: 'POST',
    host: 'staging.api.customerpay.me',
    path: '/reminder/email',
    headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIwNzA0NDQwOTI0NCIsInVzZXJfcm9sZSI6InN0b3JlX2FkbWluIiwiX2lkIjoiNWZmNDIyN2ZmZTg1NWZmYWFlMzBlOGFjIiwiaWF0IjoxNjA5ODM1MTM1LCJleHAiOjE2MDk5MjE1MzV9.XkZ9iBZ_zQwe24ztKZ3yBxBnnaAhqWUJJFtKFA4VYHY"
    }
};

const req = https.request(requestOptions, (res) => {
    
    console.log('SEND EMAIL REMINDER: templateId, message and paymentLink should be optional');
    console.log(" ");
    let code = res.statusCode;
    let body = "";
    
    res.setEncoding("utf-8");
    res.on("data", chunk => { body += chunk; });
    res.on("end", () => {
        parsedBody = JSON.parse(body);
        assert(parsedBody.success, `Status Code: ${code} , message: ${parsedBody.message} and description: ${parsedBody.error.description}`);
        console.log('The test passed, yipee!!!');
    });
});

req.on('error', error => {
    console.error(error)
})

req.write(body)
req.end()

