// backend/utils/mailer.js
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
    try {
        // ==========================================
        // REAL GMAIL SMTP CONFIGURATION
        // ==========================================
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'info.mlslawjournal@gmail.com',
                // Google App Passwords must have NO spaces
                pass: 'cbybctcwgpddmnii'
            }
        });

        console.log(`\n⏳ Attempting to send email to: ${to}...`);

        // Execute the email send
        const info = await transporter.sendMail({
            from: '"MLS Law Journal Editorial" <info.mlslawjournal@gmail.com>',
            to: to,
            subject: subject,
            text: text
        });

        console.log("=".repeat(50));
        console.log("✅ [AUTOMATED MAIL SENT SUCCESSFULLY]");
        console.log(`TO: ${to}`);
        console.log(`SUBJECT: ${subject}`);
        console.log(`MESSAGE ID: ${info.messageId}`);
        console.log("=".repeat(50) + "\n");

        return true;
    } catch (error) {
        console.error("\n❌ [MAILER ERROR] Failed to send email:");
        console.error(error);
        return false;
    }
};

module.exports = sendEmail;