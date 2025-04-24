const zod = require('zod');

const userSchemaRegister = zod.object({
    name: zod.string().min(3).max(255),
    email: zod.string().email(),
    password: zod.string().min(6).max(255),
    role: zod.enum(['customer', 'manager']).default('customer')
});

const userSchemaLogin = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(255)
});

const userSchemaForgetPassword = zod.object({
    email: zod.string().email()
})

const userSchemaResetPassword = zod.object({
    password: zod.string().min(6).max(255),
    confirmPassword: zod.string().min(6).max(255)
})
module.exports = { userSchemaRegister, userSchemaLogin, userSchemaForgetPassword, userSchemaResetPassword };