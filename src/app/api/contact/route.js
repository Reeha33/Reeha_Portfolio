import Contact from "@/database/model/contact";
import {createResponse} from "../../../../utills/response";


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
    return createResponse({newContact, message :"Message Submitted Successfully"},200);
  } catch(error){
      return createResponse({error_code: "server_error", message: error.message})

  }
}
