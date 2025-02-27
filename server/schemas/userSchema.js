const zod = require('zod');

const userSchemaRegister = zod.object({
    name: zod.string().min(3).max(255),
    email: zod.string().email(),
    password: zod.string().min(6).max(255),
    role: zod.enum(['user', 'hall-manager']).default('user')
});

const userSchemaLogin = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(255)
});

module.exports = { userSchemaRegister, userSchemaLogin };