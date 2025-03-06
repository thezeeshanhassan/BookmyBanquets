const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const validateData = require('../middlewares/validateInput');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userSchemaRegister, userSchemaLogin, userSchemaForgetPassword } = require('../schemas/userSchema');


const prisma = new PrismaClient();
const dotenv = require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


router.post('/register', validateData(userSchemaRegister), async (req, res) => {

    const { name, email, password, role } = req.body;

    //Check if user already exists
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (user) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const token = generateVerificationToken(email);
    await sendVerificationEmail(email, token);

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //Create user
    const resp = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role
        }
    })


    res.status(201).json({ message: 'Registration successful. Please check your email to verify your account.' });


})

router.post('/login', validateData(userSchemaLogin), async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    if (!user.isActive) {
        return res.status(400).json({ error: 'Please verify your email to login' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.status(200).json({ token });
});

router.post('/forget-password', validateData(userSchemaForgetPassword), async (req, res) => {
    const data = req.body();
    const { email } = data;
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    const token = generateVerificationToken(email);
    await sendVerificationEmailForgetPassword(email, token);
    



})

router.get('/verify-email', async (req, res) => {
    const { token } = req.query;
    console.log("Request for email verification")
    if (!token) {
        return res.status(400).json({ error: 'Invalid token' });
    }
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded;

        // Find the user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid token' });
        }

        // Update the user's verification status
        await prisma.user.update({
            where: { email },
            data: { isActive: true },
        });

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Invalid or expired token' });
    }
});



const sendVerificationEmail = async (email, token) => {
    const verificationLink = `http://localhost:3000/api/v1/user/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        html: `<p>Please click the following link to verify your email address:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
    };

    await transporter.sendMail(mailOptions);

};

const sendVerificationEmailForgetPassword = async (email, token) => {
    const verificationLink = `http://localhost:3000/api/v1/user/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Reset Password',
        html: `<p>Please click the following link to reset your password:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
    };

    await transporter.sendMail(mailOptions);

}
const generateVerificationToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' });
};

module.exports = router;