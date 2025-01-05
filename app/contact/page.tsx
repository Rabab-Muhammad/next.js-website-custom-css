import React from 'react'
import cssStyle from "./contact.module.css"

const Contact = () => {
  return (
    <div>
      <section className={cssStyle.contactform}>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
            <input type="text"  placeholder='Full Name' required/>
            <input type="email" placeholder='Email' required/>
            <input type="phone" placeholder='Phone Number' />
            <textarea placeholder='write your message here...' rows={4} required></textarea>
            <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
