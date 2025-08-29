import Contact from "@/database/model/contact";
import {createResponse} from "../../../../utills/response";
import {sendEmail} from "@/database/sendEmail";


export async function POST(req){
  try{
    const data= await req.json();
    const {firstname, lastname, email, phone, message} = data;

    if(!firstname || !lastname || !email || !phone || !message){
      return createResponse({
          error_code: "validation_error",
          message: "All fields are required.",
          },400)}
      const newContact = await Contact.create({
          firstname,
          lastname,
          email,
          phone,
          message,
          status: "pending",
      });

    await sendEmail({
        to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
        subject: "New Contact Form Submission",
        html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })
    return createResponse({newContact, message :"Message and email Submitted Successfully"},200);
  } catch(error){
      return createResponse({error_code: "server_error", message: error.message})
  }
}
