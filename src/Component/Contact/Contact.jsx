import React, { useRef } from "react";
import "./Contact.css";
import { BiEnvelope } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const contactForm = e.target;
        emailjs
            .sendForm(
                "service_3htzbvd",
                "template_cz8glds",
                form.current,
                "IQtAN0xcg7gyAlwx6"
            )
            .then(
                (result) => {
                    if (result.text) {
                        contactForm.reset();
                        toast.success("Message sent", {
                            style: {
                                border: "1px solid #26537C",
                                backgroundColor: "#14233B",
                                padding: "16px",
                                color: "#ffffff",
                            },
                        });
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="container mx-auto">
            <div  
        className="pb-7" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-3xl mt-5 mb-8 font-bold text-center">Contact Us</h2>
            <div className="w-3/4 grid md:grid-cols-2 sm:grid-cols-1 h-full  gap-6 mx-auto 
            "
            >
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="flex flex-col gap-5"
                >
                    <article
                    style={{
                        backgroundColor: '#16a085',
                      }}
                        className="bg-slate-900 p-5 md:w-8/12 sm:w-full  rounded-2xl 
                        text-center border-red-300 text-white"
                    >
                        <BiEnvelope className="mb-2 text-center hover:bg-green-500 inline-block text-3xl" />
                        <h4>Email</h4>
                        <h5>Company@gmail.com</h5>
                        <a 
                            href="#"
                        >
                            Send a message
                        </a>
                    </article>
                    <article
                    style={{
                        backgroundColor: '#16a085',
                      }}
                        className="bg-slate-900 p-5 md:w-8/12 sm:w-full  rounded-2xl 
                         text-center border-red-300 text-white"
                    >
                        <RiMessengerLine className="mb-2 text-center inline-block text-3xl" />
                        <h4>Messenger</h4>
                        <h5>HR</h5>
                        <a
                            href="#"
                        >
                            Send a message
                        </a>
                    </article>
                    <article
                    style={{
                        backgroundColor: '#16a085',
                      }}
                        className="bg-slate-900 p-5 md:w-8/12 sm:w-full  rounded-2xl 
                        text-center border-red-300 text-white"
                    >
                        <BsWhatsapp className="mb-2 text-center inline-block text-3xl" />
                        <h4>WhatsApp</h4>
                        <h5>Company Number</h5>
                        <a
                            href="#"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-5"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Full Name"
                        required
                        className="w-full p-6 bg-transparent border-2 resize-none text-white"
                    />
                    <input
                        type="text"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full p-6 bg-transparent border-2 resize-none text-white"
                    />
                    <textarea
                
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                        className="w-full p-6 bg-transparent border-2 resize-none text-white"
                    ></textarea>
                    <button type="submit" value="Send" className="btn text-white btn-outline w-full bg-green-600 rounded-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
