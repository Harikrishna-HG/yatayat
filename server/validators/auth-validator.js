const { z } = require("zod");


// Creating schema for signup

const signupSchema = z.object({
username:z
.string({required_error:"Username is required"})
.trim()
.min(3, {message:"Username must be atleast 3 characters long"})
.max(255,{message:"Username must be atmost 255 characters long"}),

email:z
.string({required_error:"Username is required"})
.trim()
.email({required_error:"Invalid email is required"})
.min(3, {message:"Email must be atleast 3 characters long"})
.max(255,{message:"Email must be atmost 255 characters long"}),

phone:z
.string({required_error:"Phone is required"})
.trim()
.min(10, {message:"Phone must be atleast 10 characters long"})
.max(20,{message:"Phone must be atmost 20 characters long"}),

password:z
.string({required_error:"Password is required"})
.min(4, {message:"Password must be atleast 6 characters long"})
.max(1025,{message:"Password can't be greater 1024 characters long"}),
});

module.exports = {signupSchema};