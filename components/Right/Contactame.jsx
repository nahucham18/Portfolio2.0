'use client'
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';

const serviceKey = process.env.YOUR_SERVICE_ID
const templateKey = process.env.YOUR_TEMPLATE_ID
const publicKey = process.env.YOUR_PUBLIC_KEY

export default function Contactame(){
    
    
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(serviceKey)
    console.log(templateKey)
    console.log(publicKey)
    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey)
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error);
      });
  };

    return (
        <section className="flex flex-col gap-y-[2rem] pt-[5rem] pb-[6rem] ">
            <h2 className="font-bold text-[1rem]">Contactame</h2>
            <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col gap-y-[1.6rem] w-[70%] mx-[auto] ">
                <label htmlFor="" className="flex flex-col gap-y-[0.2rem]">
                <input type="text" name='user_name' className={`bg-[#111111] border-b-[1px] focus:outline-none pb-[0.2rem]`}/>
                <span>Nombre</span>
                </label>
                <label htmlFor="" className="flex flex-col gap-y-[0.2rem]">
                <input type="text" name='user_email' className={`bg-[#111111] border-b-[1px] focus:outline-none pb-[0.2rem]`}/>
                <span>Email</span>
                </label>
                <label htmlFor="" className="flex flex-col gap-y-[0.2rem]">
                <textarea name='message' id="" cols="30" rows="5" className=" p-[1rem] bg-[#111111] border-[1px] rounded-[0.4rem] focus:outline-none"/>
                <span>Mensaje</span>
                </label>
                <input type='submit' className="border-[1px] py-[0.4rem] rounded-[0.4rem] hover:bg-[#242424]" value="Send"/>
            </form>
        </section>
    )
}