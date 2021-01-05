'use strict';
//var requests = require('requests');
var https = require('https');
const register = function(phoneNumber, password, country, state){
     if( typeof phoneNumber !== 'string' || typeof password !== 'string' || typeof country !== 'string' || typeof state !== 'string'){
        console.log("Incorrect arguments");
        return "Incorrect arguments"
    }
    const user = JSON.stringify({phone_number: phoneNumber, 
                             password: password,
                            country: country,
                            state: state});
   
    const options = {
    hostname: 'staging.api.customerpay.me',
    path: "/register/user",
    method: "POST",
    headers :{'Content-Type':'application/json',
             'Content-Length': user.length
             }
    }
    
    const req = https.request(options, function(res){
        console.log('statusCode: '+ res.statusCode);
        res.on('data', function(data){
            //process.stdout.write(data);
            data = JSON.parse(data);
            //console.log(data)
            if( typeof data.data !== 'undefined'){
                if(data.data.statusCode==201){
                    console.log("User registration successfull");
                    return "User registration successfull"
                }
            }else if(data.error.statusCode==409){
                console.error("User already exists");
                return "User already exists"
            }else{
                console.log("An unknown error occurred");
            }
        })
    })
    
    req.on('error', function(err){
        console.error(err)
    })
    req.write(user);
    req.end();
    
}

const recoverPwd = function (phoneNumber){
    if( typeof phoneNumber !== 'string'){
        console.log("Incorrect arguments");
        return "Incorrect arguments"
    }
    const user = JSON.stringify({phone_number: phoneNumber});
    const options = {
        hostname: 'staging.api.customerpay.me',
        path: "/recover",
        method: "POST",
        headers : { 'Content-Type':'application/json',
                    'Content-Length': user.length
                  }
    }
    const req = https.request(options, function(res){
        console.log('statusCode: '+ res.statusCode);
        res.on('data', function(data){
            //process.stdout.write(data);
            data = JSON.parse(data);
            //console.log(data)
            if( typeof data.data !== 'undefined'){
               if( data.data.statusCode == 200){
                console.log("Recovery email sent successfully"); 
                return "Recovery SMS sent successfully"
            } 
            }else if(data.error.code == 400){
                console.error("User not found");
                return "User not found"
            }else{
                console.log("An unknown error occurred");
                return "An unknown error occurred"
            }
        })
    })

    req.on('error', function(err){
    console.error(err)
    })
    req.write(user);
    req.end();
}

module.exports.register = register;
module.exports.recoverPwd = recoverPwd;






