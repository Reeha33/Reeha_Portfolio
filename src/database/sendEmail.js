import nodemailer from "nodemailer"

export async function sendEmail ({to,cc=false, bcc=false,subject,html,replyTo} ) {
    if (!to || !subject || !html) {
        throw new Error('To, subject, and html are required.');
    }
    try{
         const transporter = transporter.createTransport({
             host: process.env.NEXT_PUBLIC_SMTP_HOST,
             port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT, 10),
             secure: process.env.NEXT_PUBLIC_SMTP_SECURE === 'false',
              auth:{
                 user: process.env.NEXT_PUBLIC_SMTP_USER,
                  pass: process.env.NEXT_PUBLIC_SMTP_PASS
              }

         });
        const mailOptions = {
            from: `"${process.env.NEXT_PUBLIC_SITE_NAME}" <${process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL}>`,
            to,
            ...(cc ? { cc } : {}),
            ...(bcc ? { bcc } : {}),
            subject,
            html,
            ...(replyTo ? { replyTo } : {}),
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
        return { success: true, message: 'Email sent successfully', info };


    }catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email', error: error.message, fullError: error };
    }
}
