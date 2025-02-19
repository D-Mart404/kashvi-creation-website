import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (email, otp) => {
    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",  
            to: email,
            subject: "Your OTP for Verification",
            text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
        });

        console.log("Email sent successfully:", response);
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export default sendEmail;
