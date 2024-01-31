import React from 'react'
import { useState } from 'react';
import './faq.css'
const Faq = () => {

    const [isActive, setIsActive] = useState(false);

    // Function to toggle the class
    const toggleClass = () => {
        setIsActive(!isActive);
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
                                <svg className={isActive ? 'first-svg' : 'd-block'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                                <svg className={isActive ? ' second-svg' : ' d-none '} xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                                    <path d="M11.9169 9.74223L20.1177 1.5414C20.267 1.3775 20.4476 1.24521 20.6489 1.15237C20.8502 1.05952 21.0681 1.008 21.2896 1.00086C21.5112 0.993719 21.7319 1.0311 21.9388 1.11079C22.1456 1.19049 22.3344 1.31087 22.4939 1.46482C22.6534 1.61876 22.7804 1.80315 22.8674 2.00705C22.9543 2.21095 22.9995 2.43023 23.0002 2.6519C23.0009 2.87358 22.9571 3.09314 22.8715 3.2976C22.7858 3.50205 22.66 3.68724 22.5015 3.84221L22.4611 3.88257L13.0897 13.2562C12.779 13.5669 12.3575 13.7415 11.918 13.7415C11.4786 13.7415 11.0571 13.5669 10.7463 13.2562L1.37491 3.88481C1.21838 3.73359 1.09318 3.55303 1.00644 3.35342C0.919707 3.15381 0.873135 2.93907 0.869386 2.72147C0.865638 2.50386 0.904787 2.28765 0.984599 2.08517C1.06441 1.8827 1.18332 1.69792 1.33454 1.5414C1.48576 1.38488 1.66633 1.25968 1.86594 1.17294C2.06554 1.0862 2.28028 1.03963 2.49789 1.03588C2.71549 1.03213 2.93171 1.07128 3.13418 1.15109C3.33666 1.23091 3.52143 1.34982 3.67795 1.50104L3.71832 1.5414L11.9169 9.74223Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
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
                            <p className='fw-bolder'>What types of acid pumping machines do you offer?</p>
                            <button onClick={toggleClass} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive ? 'first-svg' : 'd-block'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                                <svg className={isActive ? ' second-svg' : ' d-none '} xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                                    <path d="M11.9169 9.74223L20.1177 1.5414C20.267 1.3775 20.4476 1.24521 20.6489 1.15237C20.8502 1.05952 21.0681 1.008 21.2896 1.00086C21.5112 0.993719 21.7319 1.0311 21.9388 1.11079C22.1456 1.19049 22.3344 1.31087 22.4939 1.46482C22.6534 1.61876 22.7804 1.80315 22.8674 2.00705C22.9543 2.21095 22.9995 2.43023 23.0002 2.6519C23.0009 2.87358 22.9571 3.09314 22.8715 3.2976C22.7858 3.50205 22.66 3.68724 22.5015 3.84221L22.4611 3.88257L13.0897 13.2562C12.779 13.5669 12.3575 13.7415 11.918 13.7415C11.4786 13.7415 11.0571 13.5669 10.7463 13.2562L1.37491 3.88481C1.21838 3.73359 1.09318 3.55303 1.00644 3.35342C0.919707 3.15381 0.873135 2.93907 0.869386 2.72147C0.865638 2.50386 0.904787 2.28765 0.984599 2.08517C1.06441 1.8827 1.18332 1.69792 1.33454 1.5414C1.48576 1.38488 1.66633 1.25968 1.86594 1.17294C2.06554 1.0862 2.28028 1.03963 2.49789 1.03588C2.71549 1.03213 2.93171 1.07128 3.13418 1.15109C3.33666 1.23091 3.52143 1.34982 3.67795 1.50104L3.71832 1.5414L11.9169 9.74223Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
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
                            <p className='fw-bolder'>What types of acid pumping machines do you offer?</p>
                            <button onClick={toggleClass} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive ? 'first-svg' : 'd-block'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                                <svg className={isActive ? ' second-svg' : ' d-none '} xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                                    <path d="M11.9169 9.74223L20.1177 1.5414C20.267 1.3775 20.4476 1.24521 20.6489 1.15237C20.8502 1.05952 21.0681 1.008 21.2896 1.00086C21.5112 0.993719 21.7319 1.0311 21.9388 1.11079C22.1456 1.19049 22.3344 1.31087 22.4939 1.46482C22.6534 1.61876 22.7804 1.80315 22.8674 2.00705C22.9543 2.21095 22.9995 2.43023 23.0002 2.6519C23.0009 2.87358 22.9571 3.09314 22.8715 3.2976C22.7858 3.50205 22.66 3.68724 22.5015 3.84221L22.4611 3.88257L13.0897 13.2562C12.779 13.5669 12.3575 13.7415 11.918 13.7415C11.4786 13.7415 11.0571 13.5669 10.7463 13.2562L1.37491 3.88481C1.21838 3.73359 1.09318 3.55303 1.00644 3.35342C0.919707 3.15381 0.873135 2.93907 0.869386 2.72147C0.865638 2.50386 0.904787 2.28765 0.984599 2.08517C1.06441 1.8827 1.18332 1.69792 1.33454 1.5414C1.48576 1.38488 1.66633 1.25968 1.86594 1.17294C2.06554 1.0862 2.28028 1.03963 2.49789 1.03588C2.71549 1.03213 2.93171 1.07128 3.13418 1.15109C3.33666 1.23091 3.52143 1.34982 3.67795 1.50104L3.71832 1.5414L11.9169 9.74223Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
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
                            <p className='fw-bolder'>What types of acid pumping machines do you offer?</p>
                            <button onClick={toggleClass} class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                <svg className={isActive ? 'first-svg' : 'd-block'} xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                                    <path d="M9.30668 11.9522L1.10585 3.75142C0.941956 3.60216 0.809667 3.42154 0.71682 3.22025C0.623972 3.01895 0.572453 2.80108 0.565312 2.57952C0.558171 2.35796 0.595554 2.13722 0.675246 1.93036C0.754939 1.72351 0.875322 1.53474 1.02927 1.37525C1.18322 1.21575 1.3676 1.08875 1.5715 1.00179C1.7754 0.91482 1.99468 0.869644 2.21636 0.868935C2.43803 0.868225 2.65759 0.911995 2.86205 0.997656C3.0665 1.08332 3.25169 1.20913 3.40666 1.36764L3.44702 1.408L12.8207 10.7794C13.1314 11.0902 13.3059 11.5117 13.3059 11.9511C13.3059 12.3906 13.1314 12.812 12.8207 13.1228L3.44927 22.4942C3.29805 22.6508 3.11748 22.776 2.91787 22.8627C2.71826 22.9494 2.50353 22.996 2.28592 22.9998C2.06832 23.0035 1.8521 22.9644 1.64963 22.8845C1.44715 22.8047 1.26238 22.6858 1.10585 22.5346C0.949334 22.3834 0.824131 22.2028 0.737393 22.0032C0.650656 21.8036 0.604084 21.5889 0.600336 21.3713C0.596587 21.1536 0.635737 20.9374 0.715548 20.735C0.795359 20.5325 0.91427 20.3477 1.06549 20.1912L1.10585 20.1508L9.30668 11.9522Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
                                </svg>
                                <svg className={isActive ? ' second-svg' : ' d-none '} xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
                                    <path d="M11.9169 9.74223L20.1177 1.5414C20.267 1.3775 20.4476 1.24521 20.6489 1.15237C20.8502 1.05952 21.0681 1.008 21.2896 1.00086C21.5112 0.993719 21.7319 1.0311 21.9388 1.11079C22.1456 1.19049 22.3344 1.31087 22.4939 1.46482C22.6534 1.61876 22.7804 1.80315 22.8674 2.00705C22.9543 2.21095 22.9995 2.43023 23.0002 2.6519C23.0009 2.87358 22.9571 3.09314 22.8715 3.2976C22.7858 3.50205 22.66 3.68724 22.5015 3.84221L22.4611 3.88257L13.0897 13.2562C12.779 13.5669 12.3575 13.7415 11.918 13.7415C11.4786 13.7415 11.0571 13.5669 10.7463 13.2562L1.37491 3.88481C1.21838 3.73359 1.09318 3.55303 1.00644 3.35342C0.919707 3.15381 0.873135 2.93907 0.869386 2.72147C0.865638 2.50386 0.904787 2.28765 0.984599 2.08517C1.06441 1.8827 1.18332 1.69792 1.33454 1.5414C1.48576 1.38488 1.66633 1.25968 1.86594 1.17294C2.06554 1.0862 2.28028 1.03963 2.49789 1.03588C2.71549 1.03213 2.93171 1.07128 3.13418 1.15109C3.33666 1.23091 3.52143 1.34982 3.67795 1.50104L3.71832 1.5414L11.9169 9.74223Z" fill="#840611" stroke="#840611" stroke-width="1.12125" />
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