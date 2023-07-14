'use client'
import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import Swal from 'sweetalert2';

const serviceKey = process.env.YOUR_SERVICE_ID
const templateKey = process.env.YOUR_TEMPLATE_ID
const publicKey = process.env.YOUR_PUBLIC_KEY

export default function Contactame() {

    const [data, setData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(serviceKey)
        console.log(templateKey)
        console.log(publicKey)
        emailjs.sendForm(serviceKey, templateKey, form.current, publicKey)

            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Muchas gracias por contactarme!",
                    text: 'En instantes estare respondiendo su mensaje.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                setData({
                    user_name: "",
                    user_email: "",
                    message: "",
                })
            }, (error) => {
                console.log(error);
            });
    };

    const handleOnChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    console.log(data)

    return (
        <section className="flex flex-col gap-y-[2rem] pt-[5rem] pb-[6rem] ">
            <h2 className="font-bold text-[1rem]">Contactame</h2>
            <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col gap-y-[1.6rem] w-[85%] sm:w-[80%] md:w-[85%] lg:w-[70%] mx-[auto] ">
                <label htmlFor="" className="flex flex-col gap-y-[0.2rem]">
                    <input onChange={handleOnChange} value={data.user_name} type="text" name='user_name' className={`bg-[#111111] border-b-[1px] focus:outline-none pb-[0.2rem]`} />
                    <span>Nombre</span>
                </label>
                <label htmlFor="" className="flex flex-col gap-y-[0.2rem]">
                    <input onChange={handleOnChange} value={data.user_email} type="text" name='user_email' className={`bg-[#111111] border-b-[1px] focus:outline-none pb-[0.2rem]`} />
                    <span>Email</span>
                </label>
                <label htmlFor="" className="flex flex-col gap-y-[0.2rem]">
                    <textarea onChange={handleOnChange} value={data.message} name='message' id="" cols="30" rows="5" className=" p-[1rem] bg-[#111111] border-[1px] rounded-[0.4rem] focus:outline-none" />
                    <span>Mensaje</span>
                </label>
                <input type='submit' className="border-[1px] py-[0.4rem] rounded-[0.4rem] hover:bg-[#242424] cursor-pointer" value="Send" />
            </form>
        </section>
    )
}