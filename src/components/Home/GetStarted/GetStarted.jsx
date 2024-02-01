import React from 'react'
import './getstarted.css'
const GetStarted = () => {
    return (
        <>
            <section className="section-getstarted">
                <div className="container">
                    <div className="content row d-flex justify-content-between align-items-center">
                        <div className="col-md-8 col-sm-12"> <span className="text-light">
                            <h2>Get Started</h2>
                            <p className='fs-6 mt-2'>Ready to take the first step towards your custom pumping solution? Click below to get started.</p>
                        </span></div>
                        <div className="col-md-4 col-sm-12 d-flex justify-content-sm-start justify-content-lg-center">                      
                          <a href="/" className='web-btn'>Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GetStarted