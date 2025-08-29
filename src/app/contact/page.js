"use client";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import axios from 'axios';



const INIT_DATA={
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
}

const Contact = () => {
    const [contact, setContact] = useState(INIT_DATA);
    const [showContactInfo, setShowContactInfo] = useState(false); // to toggle right side
    const [responseMsg, setResponseMsg] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
             const res= await axios.post('/api/contact' , contact)
            setResponseMsg('Thanks for contact me!');
            setContact(INIT_DATA)

            setTimeout(() => {
                setResponseMsg("");
            }, 3000);





        }catch (error){
            const msg = error.response?.data?.message || "Something went wrong";
            setResponseMsg(`Error :${msg}` );}
    };

    return (
        <section className="bg-background mt-0 text-lg py-32">
            <div className="max-w-6xl mx-auto flex flex-col justify-center md:flex-row gap-10">
                {/* Left Box - Form */}
                <div
                    className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 transition-all duration-300"
                    onMouseEnter={() => setShowContactInfo(true)}
                    onMouseLeave={() => setShowContactInfo(false)}
                >
                    <h2 className="text-3xl font-bold text-green-400 mb-2">
                        Let&#39;s work together
                    </h2>

                    <form className="py-10 bg-background" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 text-gray-200">
                            <div>
                                <input
                                    name="firstname"
                                    type="text"
                                    placeholder="First Name"
                                    value={contact.firstname}
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    name="lastname"
                                    type="text"
                                    placeholder="Last Name"
                                    value={contact.lastname}
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={contact.email}
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    name="phone"
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    value={contact.phone}
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 px-3 py-4">
                            <textarea
                                name="message"
                                placeholder="Write your message here"
                                value={contact.message}
                                onChange={handleChange}
                                required
                                className="p-3 h-40 w-full bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div className="px-3">
                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-green-400 text-gray-800 font-semibold py-3 rounded-lg transition duration-300 mt-6"
                            >
                                Send Message
                            </button>
                            {responseMsg && (
                                <p className="mt-4 text-center text-green-400 font-semibold">
                                    {responseMsg}
                                </p>
                            )}
                        </div>
                    </form>
                </div>

                {/* Right Box - Show only on hover */}

                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center text-gray-200 w-full md:w-1/2 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-green-400 mt-0">
                            Let&#39;s Contact Me
                        </h2>
                        <p className="mb-8 text-lg">
                            Have questions or want to discuss a project? Feel free to reach out using any of the following methods.
                        </p>
                        <div className="space-y-6 py-10 bg-background px-4">
                            <div className="flex gap-4 w-full p-3 bg-gray-900 border border-gray-700 rounded">
                                <Phone className="text-green-400" size={24} />
                                <span className="text-lg">+92 325 6698033</span>
                            </div>
                            <div className="flex gap-4 w-full p-3 bg-gray-900 border border-gray-700 rounded">
                                <Mail className="text-green-400" size={24} />
                                <span className="text-lg">reehabatool3536@example.com</span>
                            </div>
                            <div className="flex gap-4 w-full p-3 bg-gray-900 border border-gray-700 rounded">
                                <MapPin className="text-green-400" size={24} />
                                <span className="text-lg">Bhakkar, Pakistan</span>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
    );
};

export default Contact;
