import React from 'react'
import './homeowner.css'
import { Link } from 'react-router-dom'
const HomeOwner = () => {
  return (
    <>
      <section className='section-homeowner'>
        <div className="overlay"></div>
        <div className="container position-relative h-100">
          <div className='col-lg-6 col-md-10 content'>
            <h3>Are you a homeowner and want to improve water comfort in your
              daily life?</h3>
            <p>Visit our Home & Garden section to learn about common water issues that homeowners face.
              You can also discover how perfect water solutions can improve comfort and provide
              energy and water savings.</p>
            <Link href="/" className='web-btn'>Get Started <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 11" fill="none">
              <path d="M11.0967 0.59668C10.6692 0.59668 10.3226 0.943301 10.3226 1.37087C10.3226 1.79844 10.6692 2.14506 11.0967 2.14506V0.59668ZM15.2258 2.14506C15.6533 2.14506 16 1.79844 16 1.37087C16 0.943301 15.6533 0.59668 15.2258 0.59668V2.14506ZM16 1.37087C16 0.943301 15.6533 0.59668 15.2258 0.59668C14.7982 0.59668 14.4516 0.943301 14.4516 1.37087H16ZM14.4516 5.49989C14.4516 5.92745 14.7982 6.27408 15.2258 6.27408C15.6533 6.27408 16 5.92745 16 5.49989H14.4516ZM15.7732 1.91831C16.0755 1.61597 16.0755 1.12577 15.7732 0.823435C15.4708 0.521098 14.9807 0.521098 14.6784 0.823435L15.7732 1.91831ZM7.99998 8.59666L7.45257 9.14406C7.75492 9.44641 8.24503 9.44641 8.54738 9.14406L7.99998 8.59666ZM4.90321 5.49989L5.45062 4.95249C5.14831 4.65014 4.65811 4.65014 4.35577 4.95249L4.90321 5.49989ZM0.226753 9.08151C-0.0755843 9.38386 -0.0755843 9.87397 0.226753 10.1763C0.52909 10.4787 1.01929 10.4787 1.32163 10.1763L0.226753 9.08151ZM11.0967 2.14506H15.2258V0.59668H11.0967V2.14506ZM14.4516 1.37087V5.49989H16V1.37087H14.4516ZM14.6784 0.823435L7.45257 8.04925L8.54738 9.14406L15.7732 1.91831L14.6784 0.823435ZM8.54738 8.04925L5.45062 4.95249L4.35577 6.0473L7.45257 9.14406L8.54738 8.04925ZM4.35577 4.95249L0.226753 9.08151L1.32163 10.1763L5.45062 6.0473L4.35577 4.95249Z" fill="white" />
            </svg></Link>
          </div>
          <div className='col-md-4'></div>
        </div>
      </section>
    </>
  )
}
export default HomeOwner