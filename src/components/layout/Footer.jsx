import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Group 1.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4"><div className="d-flex flex-column gap-5 leftside px-5">
              <img src={logo} alt="companylogo" />
              <p className='fw-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
              <div className="d-flex w-100 justify-content-between">
                <Link href='/'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none">
                    <path d="M7 10.925H9.5L10.5 7.125H7V5.225C7 4.2465 7 3.325 9 3.325H10.5V0.133C10.174 0.0921501 8.943 0 7.643 0C4.928 0 3 1.57415 3 4.465V7.125H0V10.925H3V19H7V10.925Z" fill="#840611" />
                  </svg></Link>
                <Link href='/'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M4.64697 2.85047C4.64671 3.35439 4.43574 3.83756 4.06048 4.1937C3.68522 4.54984 3.17641 4.74978 2.64597 4.74952C2.11554 4.74927 1.60694 4.54885 1.23205 4.19236C0.857167 3.83586 0.646708 3.35249 0.646973 2.84857C0.647238 2.34466 0.858206 1.86149 1.23347 1.50535C1.60873 1.14921 2.11754 0.949272 2.64797 0.949524C3.17841 0.949776 3.68701 1.1502 4.06189 1.50669C4.43678 1.86319 4.64724 2.34656 4.64697 2.85047ZM4.70697 6.15647H0.706973V18.0505H4.70697V6.15647ZM11.027 6.15647H7.04697V18.0505H10.987V11.809C10.987 8.33197 15.757 8.00898 15.757 11.809V18.0505H19.707V10.517C19.707 4.65547 12.647 4.87397 10.987 7.75247L11.027 6.15647Z" fill="#840611" />
                </svg></Link>
                <Link href='/'>             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
                  <path d="M11.098 0.900452C11.632 0.903302 12.968 0.915652 14.388 0.969802L14.892 0.990701C16.321 1.05435 17.749 1.16455 18.458 1.3517C19.403 1.6044 20.145 2.3397 20.396 3.2726C20.796 4.7546 20.846 7.6445 20.852 8.34465L20.853 8.48905V8.65435C20.846 9.3545 20.796 12.2454 20.396 13.7264C20.142 14.6622 19.399 15.3984 18.458 15.6473C17.749 15.8345 16.321 15.9447 14.892 16.0083L14.388 16.0302C12.968 16.0834 11.632 16.0967 11.098 16.0986L10.863 16.0995H10.608C9.478 16.0929 4.752 16.0444 3.248 15.6473C2.304 15.3946 1.561 14.6593 1.31 13.7264C0.910004 12.2444 0.860004 9.3545 0.854004 8.65435V8.34465C0.860004 7.6445 0.910004 4.75365 1.31 3.2726C1.564 2.33685 2.307 1.6006 3.249 1.35265C4.752 0.954602 9.479 0.906152 10.609 0.900452H11.098ZM8.853 5.17545V11.8255L14.853 8.50045L8.853 5.17545Z" fill="#840611" />
                </svg></Link>
                <Link href='/'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M1 9.55001C1 5.96756 1 4.17586 2.172 3.06341C3.343 1.95001 5.229 1.95001 9 1.95001H11C14.771 1.95001 16.657 1.95001 17.828 3.06341C19 4.17586 19 5.96756 19 9.55001V11.45C19 15.0325 19 16.8242 17.828 17.9366C16.657 19.05 14.771 19.05 11 19.05H9C5.229 19.05 3.343 19.05 2.172 17.9366C1 16.8242 1 15.0325 1 11.45V9.55001Z" stroke="#840611" stroke-width="2" />
                  <path d="M14.5 7.65005C15.3284 7.65005 16 7.01205 16 6.22505C16 5.43804 15.3284 4.80005 14.5 4.80005C13.6716 4.80005 13 5.43804 13 6.22505C13 7.01205 13.6716 7.65005 14.5 7.65005Z" fill="#840611" />
                  <path d="M10 13.3501C11.6569 13.3501 13 12.0741 13 10.5001C13 8.92607 11.6569 7.65009 10 7.65009C8.34315 7.65009 7 8.92607 7 10.5001C7 12.0741 8.34315 13.3501 10 13.3501Z" stroke="#840611" stroke-width="2" />
                </svg></Link>
              </div>
            </div>
            </div>
            <div className="col-md-4">
              <div className="centerside d-flex flex-column">
                <li>Quick Links</li>
                <Link  className='links'  href="/">Home</Link>
                <Link className='links'  href="/">Build New System</Link>
                <Link  className='links' href="/">About Us</Link>
                <Link  className='links' href="/">Contact Us</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rightside d-flex flex-column">
                <li>Contact Us</li>
                <Link className='links' href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#840611" />
                </svg> info@dummycompany.com</Link>
                <Link className='links' href="/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16.2037 12.25L13.6637 11.96C13.365 11.9249 13.0623 11.958 12.7782 12.0567C12.4942 12.1554 12.2362 12.3173 12.0237 12.53L10.1837 14.37C7.34486 12.9262 5.03745 10.6188 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.66698 1.28218 5.43287 0.832237 5.06591 0.505849C4.69895 0.17946 4.22478 -0.000582255 3.73367 1.41469e-06H2.00367C0.873674 1.41469e-06 -0.0663265 0.940001 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96V14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z" fill="#840611" />
                </svg>+1 (555) 123-4567</Link>
                <Link className='links' href="/"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                  <path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="#840611" />
                </svg>1234 Dummy Street, Dummy City, State, Zip Code</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bottom-bar'>
        <p>
          Copyright © 2024<Link className='links' href="/" >&nbsp; Lutz Jesco. </Link>&nbsp; All Rights Reserved&nbsp; <Link className='links' href="/" > Dot CLick</Link>
        </p>
        <p className='d-flex terms  justify-content-between'>
          <p>Terms of use</p>
          <p>Privcacy Policy</p>
        </p>
      </div>
    </>
  )
}
export default Footer