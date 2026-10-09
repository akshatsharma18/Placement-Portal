import asyncHandler from 'express-async-handler'
import emailjs from '@emailjs/nodejs' 

const sendMail = asyncHandler(async (params) => {
    try {
        if (!process.env.EMAIL_SERVICE_ID || !process.env.EMAIL_PUBLIC_KEY) {
            console.log(`\n========================================\n[DEV EMAIL MOCK] Simulated Email Sent to: ${params.to}\nOTP: ${params.OTP}\n========================================\n`.cyan.bold)
            return true
        }

        var templateParams = {
            email: params.to,
            OTP: params.OTP
        }

        await emailjs.send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, templateParams, {
            publicKey: process.env.EMAIL_PUBLIC_KEY,
            privateKey: process.env.EMAIL_PRIVATE_KEY
        })
        return true
    } catch (error) {
        console.log(`[DEV EMAIL] EmailJS Notice: ${error.message}`.yellow)
        console.log(`[DEV EMAIL MOCK] Fallback Simulated Email to: ${params.to} | OTP: ${params.OTP}`.cyan.bold)
        return true
    }    
})

export default sendMail