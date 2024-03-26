"use client";
import React from 'react'
import  styles  from '@/app/Contact/contact.module.css';
import {Mulish} from "next/font/google";
import {useState} from "react";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})
const Contactform = () => {

  const [user, setuser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
  })
  const [status, setStatus] = useState(null)

  function handlechange(e){
   const name = e.target.name;
   const value = e.target.value;
   setuser((prevuser) => ({...prevuser,[name]:value}))
 
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
     try {

      const response = await fetch("/api/contact",{
        method:'POST',
                headers:{"Content_Type":"application/json"},
                body: JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
      })
    })

    if (response.status === 200) {
      setuser({
          username: "",
          email: "",
          phone: "",
          message: ""
      })
      setStatus('success');
  } else {
      setStatus('error');
  }

      
     } catch (e) {
      console.log(e)
     }
  }
  return (
    <form className={styles.contact_form} onSubmit={handlesubmit}  >
    <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
            username
            <input type="text" name="username" id="username"
                placeholder="Enter your name"
                   className={mulish.className}
                   value={user.username}
                   onChange={handlechange}
                   autoComplete='off'
                   required
                   
            />
        </label>
    </div>

    <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
            Email
            <input type="email" name="email" id="email"
                placeholder="Enter your email"
                   className={mulish.className}
                   value={user.email}
                   onChange={handlechange}
                   autoComplete='off'
                   required
                   
            />
        </label>
    </div> <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
            Phone Number
            <input type="number" name="phone" id="phone"
                placeholder="Enter your "
                   className={mulish.className}
                   value={user.phone}
                   onChange={handlechange}
                   autoComplete='off'
                   required
            />
        </label>
    </div> <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
            Message
            <textarea rows={5}  name="message" id="message"
                placeholder="Enter your message"
                   className={mulish.className}
                   value={user.message}
                   onChange={handlechange}
                   autoComplete='off'
                   
            />
        </label>
    </div>

    <div>

      {status === "success" && <p className={styles.success_msg}>Submitted Successfully </p>}

      <button className="bg-black"  type="submit">

        Send Message

      </button>


    </div>
    </form>
  )
}

export default Contactform
