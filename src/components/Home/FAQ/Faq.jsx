import React from 'react'
import { useState } from 'react';
import './faq.css'
const Faq = () => {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);

    // Function to toggle the class
    const toggleClass = () => {
        setIsActive1(!isActive1);
    };
    const toggleClass2 = () => {
        setIsActive2(!isActive2);
    };
    const toggleClass3 = () => {
        setIsActive3(!isActive3);
    };
    const toggleClass4 = () => {
        setIsActive4(!isActive4);
    };

    return (
        <>
            <section className='section-faq'>
                <div className='container'>
                    <h1>FAQ: Frequently Asked Questions</h1>
                    <div className="questions">
                        <div className='q-ask'>
                            <p className='fw-bolder'>What types of acid pumping machines do you offer?</p>
                            <button onClick={toggleClass} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive1 ? 'first-svg' : 'second-svg'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                            </button>
                        </div>
                        <div class="collapse" id="collapseExample1">
                            <div class="border-0 text-dark card-body">
                                we offer a diverse range of acid pumping machines designed to handle various types of acids and
                                corrosive liquids. Our product lineup
                                includes diaphragm pumps, centrifugal pumps, and peristaltic pumps,
                                among others. Each machine is engineered for reliability, efficiency, and durability.
                            </div>
                        </div>
                    </div>
                    <div className="questions">
                        <div className='q-ask'>
                            <p className='fw-bolder'>How do I select the right acid pumping machine for my application?</p>
                            <button onClick={toggleClass2} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive2 ?  'first-svg' : 'second-svg'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                            </button>
                        </div>
                        <div class="collapse" id="collapseExample2">
                            <div class="border-0 text-dark card-body">
                                we offer a diverse range of acid pumping machines designed to handle various types of acids and
                                corrosive liquids. Our product lineup
                                includes diaphragm pumps, centrifugal pumps, and peristaltic pumps,
                                among others. Each machine is engineered for reliability, efficiency, and durability.
                            </div>
                        </div>
                    </div>
                    <div className="questions">
                        <div className='q-ask'>
                            <p className='fw-bolder'> Are your acid pumping machines customizable?</p>
                            <button onClick={toggleClass3} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive3 ?  'first-svg' : 'second-svg'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                            </button>
                        </div>
                        <div class="collapse" id="collapseExample3">
                            <div class="border-0 text-dark card-body">
                                we offer a diverse range of acid pumping machines designed to handle various types of acids and
                                corrosive liquids. Our product lineup
                                includes diaphragm pumps, centrifugal pumps, and peristaltic pumps,
                                among others. Each machine is engineered for reliability, efficiency, and durability.
                            </div>
                        </div>
                    </div>
                    <div className="questions">
                        <div className='q-ask'>
                            <p className='fw-bolder'>What is the warranty on your acid pumping machines?</p>
                            <button onClick={toggleClass4} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive4 ?  'first-svg' : 'second-svg'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                            </button>
                        </div>
                        <div class="collapse" id="collapseExample4">
                            <div class="border-0 text-dark card-body">
                                we offer a diverse range of acid pumping machines designed to handle various types of acids and
                                corrosive liquids. Our product lineup
                                includes diaphragm pumps, centrifugal pumps, and peristaltic pumps,
                                among others. Each machine is engineered for reliability, efficiency, and durability.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq


{/* <p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div> */}