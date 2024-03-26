import React from 'react'
import Contactcard from '../components/Contactcard'
import styles from "./contact.module.css"
import Contactform from '../components/Contactform'

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
     <h1>Contact Us</h1>
     <Contactcard/>
     <section className={styles.contact_section}>
      <h2>We'd Like to hear <span>From You</span></h2>
     <Contactform/>

     </section>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1103697526364!2d88.36124862475508!3d22.500041835626874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027127574118e9%3A0x54cf661ec555682c!2sKatju%20Nagar%2C%20Jadavpur%2C%20Kolkata%2C%20West%20Bengal%20700032!5e0!3m2!1sen!2sin!4v1711378168612!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" className={styles.mapping} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Contact