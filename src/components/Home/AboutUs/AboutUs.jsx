import React from 'react'
import aboutimg from '../../../assets/images/image 5 (1).png'
import './about.css'
const AboutUs = () => {
  return (
    <>
    <section className='section-aboutus'>
      <div className='container'>
        <div className="row  d-flex  w-100  justify-content-between align-items-center">
        <div className="content px-md-4 col-md-8 col-lg-6">
          <h2>About Us</h2>
          <p>We are passionate about delivering top-quality pumping solutions tailored to meet the diverse needs of our customers. With over 10 years of industry experience, we have established ourselves as a trusted provider of reliable and efficient acid pumping machines.</p>
          <p>Our mission is to empower businesses with innovative pumping solutions that optimize performance and enhance productivity. We pride ourselves on our commitment to delivering exceptional products and unparalleled customer service.</p>
          <a className='web-btn'>Read More</a>
        </div>
        <div className="img col-md-4 position-relative">
          <div className="overlay"></div>
          <img src={aboutimg} alt="" />
        </div>
        </div>
      </div>
      </section>
    </>
  )
}
export default AboutUs